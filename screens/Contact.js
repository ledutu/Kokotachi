import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { View, Icon, Container, Content, Item, Input, Textarea, Form, Left, Body, Right, Header } from 'native-base'
import SclableImage from 'react-native-scalable-image'
import { useTranslation } from 'react-i18next'
import { RedTitle, PangolinText, PangolinLabel, Row, RedButton, ErrorText, BlackText, Logo_BackToHome } from '../utils/commons'
import styles from '../styles'
import { width } from '../utils/constants'
import { sendContact } from '../utils/api'

function ContactScreen({ navigation }) {
    const { t } = useTranslation()

    const _styles = StyleSheet.create({
        centerRow: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
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

    const [state, setState] = useState({
        fullname: null,
        email: null,
        message: null
    })

    const [formState, setFormState] = useState({
        errors: {},
        isSent: false,
        isSending: false
    })

    const closeThisScreen = () => {
        navigation.goBack()
    }

    const { errors, isSent, isSending } = formState

    const submitForm = async () => {
        try {
            setFormState({ ...formState, isSending: true })
            await sendContact(state)
            setFormState({
                ...formState,
                isSent: true,
                isSending: false
            })
        } catch (error) {
            setFormState({
                ...formState,
                isSending: false,
                errors: error.response.data && error.response.data.errors
            })
        }
    }

    if (isSent) {
        return (
            <View>
                <Row padder style={_styles.centerRow}>
                    <PangolinText style={{ fontSize: 29 }}>{t('Thank you!')}</PangolinText>
                </Row>

                <Row padder style={_styles.centerRow}>
                    <SclableImage source={require('../assets/images/message_sent_success.png')} width={width * 0.6} />
                </Row>

                <Row padder style={_styles.centerRow}>
                    <PangolinText style={{ textAlign: 'center' }}>{t('We will reply you as soon as possible!')}</PangolinText>
                </Row>

                <Row padder style={_styles.centerRow}>
                    <RedButton rounded iconLeft onPress={() => navigation.dispatch(NavigationActions.back())}>
                        <Icon style={{ possition: 'relative', bottom: 2 }} type="FontAwesome" name="angle-left" />
                        <PangolinText style={{ paddingLeft: 5 }}>{t('Back')}</PangolinText>
                    </RedButton>
                </Row>
            </View>
        )
    }

    return (
        <Container>

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

            <Content padder>
                <View style={{ marginTop: 20 }}>
                    <RedTitle>{t('about_us.company_name')}</RedTitle>
                </View>

                <Row style={styles.flexRow}>
                    <Icon type="FontAwesome" name="building" style={{ fontSize: 18, marginRight: 10, color: '#717171' }} />
                    <BlackText>158 Đào Duy Anh, Quận Phú Nhuận, Tp. Hồ Chí Minh</BlackText>
                </Row>

                <Row style={styles.flexRow}>
                    <Icon type="FontAwesome" name="phone" style={{ fontSize: 18, marginRight: 10, color: '#717171' }} />
                    <BlackText>(+84)28-3847-2683</BlackText>
                </Row>

                <Row style={styles.flexRow}>
                    <Icon type="FontAwesome" name="envelope" style={{ fontSize: 18, marginRight: 10, color: '#717171' }} />
                    <BlackText>support@kokotachi.com</BlackText>
                </Row>

                <Form>
                    <View style={styles.itemForm} error={errors.fullname && true}>
                        <Text>{t('Full name')}*</Text>
                        <TextInput style={styles.textInput} value={state.fullname}
                            onChangeText={fullname => setState({ ...state, fullname })}
                        />
                        {errors.fullname && (
                            <ErrorText>{errors.fullname[0]}</ErrorText>
                        )}
                    </View>

                    <View style={styles.itemForm} error={errors.email && true}>
                        <Text>{t('Email')}*</Text>
                        <TextInput style={styles.textInput} value={state.email}
                            onChangeText={email => setState({ ...state, email })}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {errors.email && (
                            <ErrorText>{errors.email[0]}</ErrorText>
                        )}
                    </View>

                    <View style={styles.itemForm} error={errors.message && true}>
                        <Text>{t('Contact message')}*</Text>
                        <Textarea style={styles.textInput} value={state.message}
                            onChangeText={message => setState({ ...state, message })}
                        />
                        {errors.message && (
                            <ErrorText>{errors.message[0]}</ErrorText>
                        )}
                    </View>

                    <Row style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <RedButton rounded iconLeft onPress={submitForm} disabled={isSending}>
                            <Icon type="FontAwesome" name="envelope" style={{ transform: [{ rotate: '-10deg' }] }} />
                            <PangolinText style={{ fontSize: 16 }}>{isSending ? t('Sending') : t('Send message')}</PangolinText>
                        </RedButton>
                    </Row>
                </Form>
            </Content>
        </Container>
    )
}

ContactScreen.navigationOptions = () => ({
    header: null
})

export default ContactScreen