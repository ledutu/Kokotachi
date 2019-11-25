import React, { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Header, Left, Body, Right, Icon, View, List, ListItem } from 'native-base'
import Modal from 'react-native-modal'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import styled from 'styled-components'
import styles from './../styles'
import { language_utils } from '../utils/constants'
import { useTranslation } from 'react-i18next'
import { setLanguage } from '../actions/language'
import { PangolinText } from '../utils/commons';

const FlagImage = styled(Image)`
    width: 30px;
    height: 20px;
    border-radius: 5
`

const AppHeader = ({ navigation, language, dispatch, logoPressed }) => {
  const { t } = useTranslation()
  const [state, setState] = useState({
    modalVisible: false
  })
  const { modalVisible } = state

  const closeModal = () => setState({ ...state, modalVisible: false })
  const openModal = () => setState({ ...state, modalVisible: true })

  const setApplanguage = (language) => {
    dispatch(setLanguage(language));
    closeModal();
  };

  return (
    <Header androidStatusBarColor={styles.header.backgroundColor} style={styles.header}>
      <Left style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="md-menu" style={{ color: 'white', marginRight: 15 }} />
        </TouchableOpacity>
      </Left>

      <Body style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity onPress={logoPressed}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 100, height: 30 }}
          />
        </TouchableOpacity>
      </Body>

      <Right style={{ flex: 1, paddingTop: 5 }}>
        <TouchableOpacity onPress={openModal}>
          <FlagImage source={language_utils[language].source} />
        </TouchableOpacity>
      </Right>

      {/* Modal for selecting language (Currently no used) */}
      <Modal
        transparent={true}
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}>

        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, bottom: 0, right: 0, left: 0, position: 'absolute' }}>
          <List style={{ marginLeft: 50, marginRight: 50 }}>
            <ListItem onPress={() => setApplanguage('vi')}>
              <Left>
                <FlagImage source={language_utils.vi.source} />
                <PangolinText style={{ marginLeft: 5 }}>{t(language_utils.vi.title)}</PangolinText>
              </Left>
            </ListItem>

            <ListItem noBorder onPress={() => setApplanguage('en')}>
              <Left>
                <FlagImage source={language_utils.en.source} />
                <PangolinText style={{ marginLeft: 5 }}>{t(language_utils.en.title)}</PangolinText>
              </Left>
            </ListItem>
          </List>
        </View>
      </Modal>
    </Header>
  )
}

const mapStatetoProps = (state) => ({
  language: state.language
})

export default connect(mapStatetoProps)(withNavigation(AppHeader))