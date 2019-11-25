import React, { useState } from 'react';
import { SafeAreaView, Platform, Alert, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Thumbnail, Left, View, Right, Icon, Button } from 'native-base';
import styled from 'styled-components';
import { PangolinText, RedButton } from '../utils/commons';
import { useTranslation } from 'react-i18next';
import { fetchCategories } from '../utils/api';
import { type_utils } from '../utils/constants';
import i18n from '../language/i18n';
import { logOut } from '../actions/auth';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { avatarSource } from '../utils/pureFunction';
import { navigate } from '../utils/navigation';

let language = i18n.language

const TopListItem = styled(ListItem)`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #f7f7f7;
`

const established_categories = [
    {
        type: 'job',
        id: 'job',
        title: type_utils.job.display,
        children: []
    },
    {
        type: 'apartment',
        id: 'apartment',
        title: type_utils.apartment.display,
        children: []
    },
    {
        type: 'lifestyle',
        id: 'lifestyle',
        title: type_utils.lifestyle.display
    },
    {
        type: 'cosme',
        id: 'cosme',
        title: type_utils.cosme.display,
        children: []
    },
    {
        type: 'church',
        id: 'church',
        title: type_utils.church.display,
        onPress: () => navigate('ChurchList')
    },
    {
        type: 'event',
        id: 'event',
        title: type_utils.event.display,
        children: []
    },
    {
        type: 'sim',
        id: 'sim',
        title: type_utils.sim.display,
        children: [],
        disabled: true
    },
    {
        type: 'date',
        id: 'date',
        title: type_utils.date.display,
        children: [],
        disabled: true
    },
    {
        id: 'contact',
        title: 'Contact',
        onPress: () => navigate('Contact')
    }
]

const mapStateToProps = (state) => ({
    user: state.user
})

// Declare `fetched` here instead in `AppDrawerContent` to avoid drawer-content component called twice by react-navigation caused unexpected behaviour.
let fetched = false

const AppDrawerContent = connect(mapStateToProps)(function ({ navigation, user, dispatch }) {
    const { t } = useTranslation()

    const [state, setState] = useState({
        categories: established_categories,
        current_sub_menu: false
    })
    const { categories, current_sub_menu } = state

    const getCategories = async () => {
        fetched = true
        try {
            const categoriesRef = await fetchCategories({})
            const _all_categories = categoriesRef.data._data.categories

            // Fill categories to type
            established_categories.forEach(established_category => {
                if (established_category.children) {
                    established_category.children = _all_categories.filter(category => category.type == established_category.type)
                }
            })

            setState({
                ...state,
                categories: established_categories,
                current_sub_menu: false
            })
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Open sub menu or back to parent menu
     * 
     * @param {Array} categories 
     */
    const changeMenu = (categories, current_sub_menu = true) => {
        setState({
            ...state,
            categories,
            current_sub_menu
        })
    }

    const logoutConfirm = () => {
        Alert.alert(t('Log out'), t('Do you want to log out?'), [
            { text: t('Cancel') },
            { text: t('Log out'), onPress: () => dispatch(logOut()) }
        ])
    }

    function currentCategoryType() {
        if (current_sub_menu && categories.length > 0) {
            return categories[0].type
        }
    }

    const type = currentCategoryType()

    function navigateAllArticles() {
        if (type) {
            navigation.push(type_utils[type].list_screen, { type, title: t(type_utils[type].display) })
        }
    }

    if (!fetched || language != i18n.language) {
        language = i18n.language
        getCategories()
    }

    const all_message = type && type_utils[type].all_message

    return (
        <Container>
            <Content>
                <List>
                    <TopListItem noIndent avatar>
                        <SafeAreaView style={{ flexDirection: 'row', marginTop: 0 }}>

                            {user ? (
                                <TouchableOpacity onPress={() => navigate('Profile', { title: t('Profile') })}>
                                    <Thumbnail source={avatarSource(user && user.avatar)} />
                                </TouchableOpacity>
                            ) : (
                                    <Thumbnail source={avatarSource(user && user.avatar)} />
                                )}

                            {user ? (
                                <View style={{ marginLeft: 15 }}>
                                    <TouchableOpacity onPress={() => navigate('Profile', { title: t('Profile') })}>
                                        <PangolinText style={{ fontSize: 18 }}>{user.name}</PangolinText>
                                        <PangolinText note style={{ color: '#333', textDecorationLine: 'underline' }}>{t('See profile')}</PangolinText>
                                    </TouchableOpacity>

                                    <Button small rounded bordered style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }} onPress={logoutConfirm}>
                                        <PangolinText>{t('Log out')}</PangolinText>
                                    </Button>
                                </View>
                            ) : (
                                    <RedButton small rounded style={{ marginTop: 13, marginLeft: 15 }} onPress={() => navigate('SignIn')}>
                                        <PangolinText>{t('Log In')}</PangolinText>
                                    </RedButton>
                                )}
                        </SafeAreaView>
                    </TopListItem>

                    {current_sub_menu && (
                        <>
                            <ListItem onPress={() => changeMenu(established_categories, false)}>
                                <Icon type="FontAwesome" name="angle-left" style={{ color: '#888', marginRight: 10 }} />
                                <PangolinText note style={{ lineHeight: 22, position: 'relative', top: Platform.OS === 'ios' ? 4 : 0 }}>{t('Back to previous menu')}</PangolinText>
                            </ListItem>

                            {all_message && (
                                <ListItem onPress={navigateAllArticles}>
                                    <PangolinText>{t(all_message)}</PangolinText>
                                </ListItem>
                            )}
                        </>
                    )}

                    {categories.map((category) => {
                        const { children, type, disabled } = category
                        let { title, slug } = category

                        const onPress = (() => {
                            if (children && children.length > 0) {
                                return () => changeMenu(children)
                            }

                            if (category.onPress) {
                                return category.onPress
                            }

                            if (!current_sub_menu) {
                                title = t(title)
                                slug = null
                            }

                            if (type_utils[type].list_screen) {
                                return () => navigation.navigate(type_utils[type].list_screen, { title, type, slug })
                            }
                        })()

                        return (
                            <ListItem key={category.id} onPress={onPress} disabled={disabled}>
                                <Left>
                                    <PangolinText style={disabled && { color: '#ccc' }}>{t(title)}</PangolinText>
                                </Left>

                                {children && children.length > 0 && (
                                    <Right>
                                        <Icon type="FontAwesome" name="angle-right" />
                                    </Right>
                                )}
                            </ListItem>
                        )
                    })}
                </List>
            </Content>
        </Container>
    )
})

export default AppDrawerContent