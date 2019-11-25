import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavigationScreenProp } from 'react-navigation'
import { Button, Icon, Container, Content } from 'native-base'
import { useTranslation } from 'react-i18next'
import { setAuth } from '../actions/auth'
import { Dimensions, TouchableOpacity, View, TextInput, StyleSheet, FlatList, Image, ScrollView, Text, Alert } from 'react-native'
import { openStaticPage } from '../actions/staticPage'
import { _styles as loginStyles, Title } from './SignInScreen'
import { PangolinText, Logo_BackToHome, RedLink, GrayText } from '../utils/commons'
import styles from '../styles'
import ProfileForm from '../components/ProfileForm'
import { signUp } from '../utils/api'

let contentComponent = null

/**
 * Connected component
 * 
 * @param {Object} props 
 * @param {NavigationScreenProp} props.navigation 
 * @param {Function} props.dispatch
 */
function SignUpScreen({ navigation, dispatch }) {
    const { t } = useTranslation()
    const [state, setState] = useState({
        form_status: '',
        randomly: null, // Scroll to top each time this state changes.
        form_errors: []
    })
    const { form_status, randomly, form_errors } = state

    const closeThisScreen = () => {
        navigation.goBack()
    }

    const doSignUp = async formData => {

        if (!formData.termOfUse) {
            Alert.alert(t('Notification'), t('Please agree to the terms of use'))
            return false
        }

        try {
            const res = await signUp(formData)
            if (res.data._data) {
                dispatch(setAuth(res.data._data))
                navigation.pop(2)
            }
            setState({
                ...state,
                form_status: res.data._data ? 'success' : 'error',
                form_errors: [],
                randomly: Math.random()
            })
        } catch (error) {
            setState({
                ...state,
                form_status: 'error',
                form_errors: error.response.data && error.response.data.errors,
                randomly: Math.random()
            })
        }
    }

    // Scroll to top
    useEffect(() => {
        if (randomly && contentComponent) {
            contentComponent._root.scrollToPosition(0, 0)
        }
    }, [randomly])

    return (
        <Container style={loginStyles.container}>
            <Content ref={c => contentComponent = c}>

                <View padder>
                    <View style={loginStyles.titleWrap}>
                        <Title>{t('Register new Kokotachi\'s account')}</Title>
                    </View>
                </View>

                <View padder style={{ padding: 10 }}>
                    <GrayText style={{ textAlign: 'center' }}>{t('Already have account?')}</GrayText>
                    <TouchableOpacity onPress={closeThisScreen}
                        style={{ paddingBottom: 10, marginBottom: 10, borderBottomColor: '#dee2e6', borderBottomWidth: 1 }}>
                        <RedLink style={{ textAlign: 'center', marginTop: 5 }}>{t('Please log in')}</RedLink>
                    </TouchableOpacity>
                </View>

                {form_status == 'error' && (
                    <View padder style={styles.flexRowCenter}>
                        <Icon style={{ color: '#ff2a30' }} type="FontAwesome" name="warning" />
                        <PangolinText style={{ color: '#ff2a30' }}>{t('Saving failed')}</PangolinText>
                    </View>
                )}

                <ProfileForm dispatch={dispatch} submitForm={formData => doSignUp(formData)} errors={form_errors} />
            </Content>
        </Container>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        headerStyle: {
            backgroundColor: styles.header.backgroundColor,
        },
        headerRight: <View />,
        headerTitle: <Logo_BackToHome />,
        headerTintColor: '#fff',
    }
}

export default connect()(SignUpScreen)