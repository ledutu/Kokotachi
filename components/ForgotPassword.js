import React, { useState } from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { Container, Content, Header, Left, Right, Body, Icon, Input, Item, Button, Form } from 'native-base'
import Modal from 'react-native-modal'
import { useTranslation } from 'react-i18next'
import { _styles as loginStyles } from '../screens/SignInScreen'
import styles from '../styles'
import { PangolinText, Row, RedButton, ErrorText, Logo_BackToHome } from '../utils/commons'
import { resetPassword } from '../utils/api'
import { height } from '../utils/constants'

const initialState = {
  email: null
}

export default function ForgotPassword({ isVisible = false, closeTheModal }) {
  const { t } = useTranslation()

  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      isVisible={isVisible}
      onBackButtonPress={closeTheModal}
      style={{ margin: 0 }}>
      <Container style={loginStyles.container}>
        <Header androidStatusBarColor={styles.header.backgroundColor} style={{ backgroundColor: styles.header.backgroundColor }}>
          <Left style={{ flex: 1 }}></Left>

          <Body style={{ flex: 1 }}>
            <Logo_BackToHome />
          </Body>

          <Right style={{ flex: 1 }}>
            <TouchableOpacity onPress={closeTheModal}>
              <Icon type="MaterialIcons" name="close" style={{ color: 'white', marginLeft: 15 }} />
            </TouchableOpacity>
          </Right>
        </Header>

        <Content>
          <ModalContent closeTheModal={closeTheModal} />
        </Content>
      </Container>
    </Modal>
  )
}

function ModalContent({ closeTheModal }) {
  const { t } = useTranslation()
  const [state, setState] = useState(initialState)
  const [formState, setFormState] = useState({
    errors: {},
    isSent: false,
    isSending: false
  })
  const { email } = state
  const { errors, isSending, isSent } = formState

  const onCloseModal = () => {
    closeTheModal()
    setState(initialState)
  }

  const submitForm = async () => {
    setFormState({ ...formState, isSending: true })
    try {
      await resetPassword(state)
      setFormState({ ...formState, isSent: true })
    } catch (error) {
      setFormState({
        ...formState,
        isSending: false,
        errors: error.response.data && error.response.data.errors,
      })
    }
  }

  if (isSent) {
    return (
      <View style={{ height: height * 0.7, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Row padder style={styles.rowCenter}>
          <PangolinText>{t('Email reset password has been sent')}</PangolinText>
        </Row>

        <Row padder style={styles.rowCenter}>
          <RedButton rounded onPress={closeTheModal}>
            <PangolinText>{t('Back')}</PangolinText>
          </RedButton>
        </Row>
      </View>
    )
  }

  return (
    <Form>
      <Row style={[styles.rowCenter, { marginTop: 40, marginBottom: 10 }]}>
        <PangolinText style={{ fontSize: 20, textAlign: 'center' }}>{t('Did you forgot your password?')}</PangolinText>
      </Row>

      <Row style={styles.rowCenter}>
        <PangolinText style={{ textAlign: 'center' }}>{t('Không sao! Bạn vui lòng nhập địa chỉ email đã đăng ký trên kokotachi.')}</PangolinText>
      </Row>

      <Row style={styles.rowCenter}>
        <PangolinText style={{ textAlign: 'center' }}>{t('Chúng tôi sẽ gửi mật khẩu mới đến email của bạn.')}</PangolinText>
      </Row>

      <Row style={styles.rowCenter}>
        <PangolinText style={{ textAlign: 'center' }}>{t('(P/s: Miễn là bạn còn nhớ email đã đăng ký...)')}</PangolinText>
      </Row>

      <Row padder style={{ marginTop: 0, paddingTop: 0 }}>
        <View style={styles.itemForm}>
          <TextInput style={styles.textInput} placeholder={t('Email address')} keyboardType="email-address" onChangeText={email => setState({ ...state, email })} />
        </View>
        {errors.email && (
          <ErrorText>{errors.email[0]}</ErrorText>
        )}
      </Row>

      <Row style={styles.rowCenter}>
        <RedButton rounded onPress={submitForm} disabled={isSending}>
          <PangolinText>{t('Reset my password')}</PangolinText>
        </RedButton>
      </Row>
    </Form>
  )
}