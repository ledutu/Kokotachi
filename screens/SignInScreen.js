import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { View, Button, Icon, Form, Item, Input, Header, Left, Body, Right, Container, Content } from 'native-base'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { PangolinText, RedButton, Logo_BackToHome, GrayView } from '../utils/commons';
import FBLoginBtn from '../components/FBLoginBtn'
import ForgotPassword from '../components/ForgotPassword'
import { setAuth } from '../actions/auth'
import styles from '../styles'
import { authenticate } from '../utils/api'
import { height } from '../utils/constants'

export const Title = styled(PangolinText)`
    font-size: 25px;
`

export const _styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: styles.header.backgroundColor,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10
    },
    titleWrap: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    fontLarger: {
        fontSize: 18
    },
    iconWarning: {
        fontSize: 16,
        color: '#ff2a30',
        marginRight: 5
    }
})

const initialState = {
    email: null,
    password: null,
    remember_me: false,
    securePassword: true
}

const SignInScreen = connect()(function ({ navigation, dispatch }) {
    const { t } = useTranslation()
    const [state, setState] = useState(initialState)
    const [formStatus, setFormStatus] = useState({
        submitting: false,
        message: navigation.getParam('message'),
        warning_message: null,
        isForgotPasswordVisible: false
    })
    const { remember_me, email, password } = state

    const closeThisScreen = () => {
        navigation.goBack()
    }

    const closeForgotPasswordModal = () => setFormStatus({
        ...formStatus,
        isForgotPasswordVisible: false
    })

    const toggleRemenberMe = () => setState({
        ...state,
        remember_me: !remember_me
    })

    const submitForm = async () => {
        setFormStatus({ ...formStatus, submitting: true })
        try {
            const authRes = await authenticate(state)
            setFormStatus({ ...formStatus, submitting: false })
            if (authRes.data._data) {
                if (authRes.data._data.user.actived === 0) {
                    setFormStatus({
                        ...formStatus,
                        warning_message: t('unactived_message')
                    })
                }
                else {
                    dispatch(setAuth(authRes.data._data))
                    closeThisScreen()
                }
            }
            else {
                setState({ ...state, password: '' })
                setFormStatus({ ...formStatus, warning_message: t('Email or Password incorrect') })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Hide error message on inputs changes
    useEffect(() => {
        if (formStatus.warning_message) {
            setFormStatus({ ...formStatus, warning_message: null })
        }
    }, [email, password])

    return (
        <Container style={_styles.container}>
            <Header androidStatusBarColor={styles.header.backgroundColor} style={_styles.header}>
                <Left style={{ flex: 1 }} />

                <Body style={{ flex: 1 }}>
                    <Logo_BackToHome />
                </Body>

                <Right style={{ flex: 1 }}>
                    <TouchableOpacity onPress={closeThisScreen}>
                        <Icon type="MaterialIcons" name="close" style={{ color: 'white', marginLeft: 15 }} />
                    </TouchableOpacity>
                </Right>
            </Header>

            <Content>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start', height: height - 90 }}>
                    <View padder>
                        {formStatus.message && (
                            <GrayView padder style={{ flexDirection: 'row' }}>
                                <Icon type="MaterialIcons" name="info" />
                                <PangolinText style={{ fontSize: 18 }}>{formStatus.message}</PangolinText>
                            </GrayView>
                        )}

                        <View style={_styles.titleWrap}>
                            <Title>{t('Log In')}</Title>
                        </View>

                        <FBLoginBtn />

                        {/* <Button block bordered iconLeft style={{ marginTop: 10 }}>
                            <Icon type="FontAwesome" name="google" />
                            <PangolinText style={_styles.fontLarger}>Google</PangolinText>
                        </Button> */}

                        {/* <View padder style={{ alignItems: 'center' }}>
                            <PangolinText note>{t('Or')}</PangolinText>
                        </View> */}

                        <Form>
                            {formStatus.warning_message && (
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon style={_styles.iconWarning} type="FontAwesome" name="warning" />
                                    <PangolinText note style={{ color: '#ff2a30' }}>{formStatus.warning_message}</PangolinText>
                                </View>
                            )}

                            <Item regular style={{ marginTop: 10 }}>
                                <Input
                                    autoCapitalize="none"
                                    placeholder={t('Enter the registered email')}
                                    placeholderTextColor="#666"
                                    value={email}
                                    onChangeText={email => setState({ ...state, email })} />
                            </Item>

                            <Item regular style={{ marginTop: 20 }}>
                                <Input
                                    autoCapitalize="none"
                                    secureTextEntry={state.securePassword}
                                    placeholder={t('Password')}
                                    placeholderTextColor="#666"
                                    value={password}
                                    onChangeText={password => setState({ ...state, password })} />

                                <TouchableOpacity onPress={() => setState({ ...state, securePassword: !state.securePassword })}>
                                    <Icon style={{ paddingRight: 15 }} name={state.securePassword ? 'eye-off' : 'eye'} />
                                </TouchableOpacity>

                            </Item>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Button small transparent iconLeft onPress={toggleRemenberMe}>
                                    <Icon type="FontAwesome" name={remember_me ? 'check-square-o' : 'square-o'} />
                                    <PangolinText style={{ marginLeft: -5 }}>{t('Remember me')}</PangolinText>
                                </Button>

                                <Button small transparent onPress={() => setFormStatus({ ...formStatus, isForgotPasswordVisible: true })}>
                                    <PangolinText style={{ flexWrap: "nowrap" }}>{t('Forgot password')}?</PangolinText>
                                </Button>
                            </View>

                            <View style={{ ...styles.contentCenter, marginTop: 10 }}>
                                <RedButton disabled={formStatus.submitting} rounded style={{ paddingLeft: 20, paddingRight: 20 }} onPress={submitForm}>
                                    <PangolinText style={_styles.fontLarger}>{t('Log In')}</PangolinText>
                                </RedButton>
                            </View>

                        </Form>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <View style={{ marginTop: 20, marginBottom: 10, alignItems: 'center' }}>
                            <PangolinText style={{ color: '#888' }}>{t('Have no account yet?')}</PangolinText>
                        </View>

                        <View style={styles.contentCenter}>
                            <Button rounded bordered iconRight style={{ paddingLeft: 20, paddingRight: 20 }} onPress={() => navigation.navigate('SignUp')}>
                                <PangolinText style={_styles.fontLarger}>{t('Register new account')}</PangolinText>
                                <Icon type="FontAwesome" name="angle-right" />
                            </Button>
                        </View>
                    </View>
                </View>

            </Content>

            <ForgotPassword
                isVisible={formStatus.isForgotPasswordVisible}
                closeTheModal={closeForgotPasswordModal} />
        </Container>
    )
})

SignInScreen.navigationOptions = () => {
    return {
        header: null
    }
}

export default SignInScreen;