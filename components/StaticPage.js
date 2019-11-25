import React, { useState, useEffect } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import { View, Header, Left, Body, Right, Button, Icon, Container, Content } from 'native-base'
import { _styles as loginStyles } from '../screens/SignInScreen'
import { fetchPage } from '../utils/api'
import { AppIndicator, PangolinText, Logo_BackToHome } from '../utils/commons'
import AutoHeightWebView from './../utils/webview-autoheight'
import { static_page } from '../utils/constants'
import styles from '../styles'
import { closeStaticPage } from '../actions/static-page'

// const Title = styled(PangolinText)`
//     font-size: 22px
// `

const mapStateToProps = state => ({
    page_name: state.modal_static_page_name
})

const initialState = {
    page: null,
    screen_message: null
}

const StaticPage = connect(mapStateToProps)(function ({ page_name, dispatch }) {
    const [state, setState] = useState(initialState)
    const { page, screen_message } = state

    async function getPage() {
        try {
            const response = await fetchPage(static_page[page_name].ref_id)
            setState({
                ...state,
                page: response.data._data.page
            })
        } catch (error) {
            setState({
                ...state,
                screen_message: t('Could not load the page you requested')
            })
            console.log("get page error", error)
        }
    }

    function closeTheModal() {
        dispatch(closeStaticPage())
    }

    useEffect(() => {
        if (page_name) {
            getPage()
        }
    }, [page_name])

    return (
        <Modal
            animationIn="slideInRight"
            animationOut="slideOutRight"
            isVisible={page_name !== null}
            onBackButtonPress={closeTheModal}
            onModalHide={() => setState(initialState)}
            style={{ margin: 0 }}
        >
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
                    <ModalContent page={page} screen_message={screen_message} />
                </Content>
            </Container>
        </Modal>
    )
})

function ModalContent({ page, screen_message }) {
    if (!page && !screen_message) {
        return AppIndicator
    }

    if (screen_message) {
        return (
            <View padder style={styles.flexRowCenter}>
                <PangolinText style={{ color: 'rgba(51, 51, 51, 0.7)' }}>{screen_message}</PangolinText>
            </View>
        )
    }

    return (
        <View style={{ minHeight: 800, paddingBottom: 30 }}>
            <AutoHeightWebView
                originWhitelist={['*']}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                customStyle={`
                    p {
                        font-size: 18px;
                    }
                    p, h1, h2, h3, h4, h5, h6 {
                        user-select: none;
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                    img {
                        margin-left: -10px;
                        max-width: ${Dimensions.get('window').width};
                        height: auto;
                        display: block;
                    }
                `}
                source={{ html: page.content }} />
        </View>
    )
}

export default StaticPage