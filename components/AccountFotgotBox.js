import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";

export default class AccountFotgotBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        display: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        back: PropTypes.func.isRequired
    }

    render() {
        const { display, close, back } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    isVisible={display}
                    animationOut="slideOutDown"
                    onBackButtonPress={close}
                    onBackdropPress={close}
                    style={styles.modal}
                    useNativeDriver={true}
                    scrollHorizontal={false}
                    children={true}
                >
                    <View style={{ flex: 1 }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../kokotachi_image/logo.png')}
                                style={styles.logoImage}
                            />
                        </View>
                        <ScrollView contentContainerStyle={styles.content}>
                            <Text style={styles.title}>Bạn đã quên mật khẩu?</Text>
                            <View style={styles.subtitleContainer}>
                                <Text style={styles.subtitle}>Không sao! Bạn vui lòng nhập địa chỉ email đã đăng ký trên kokotachi.</Text>
                                <Text style={styles.subtitle}>Chúng tôi sẽ gửi mật khẩu mới đến email của bạn.</Text>
                                <Text style={styles.subtitle}>(P/s: Miễn là bạn còn nhớ email đã đăng ký...)</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder={'Địa chỉ email'}
                                    style={styles.textinput}
                                />
                            </View>
                            <View style={styles.captcha}/>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.resetText}>Thiết đặt lại mật khẩu</Text>
                            </TouchableOpacity>
                            <Text style={styles.backButton} onPress={back}>Quay về trang đăng nhập</Text>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1
    },
    imageContainer: {
        backgroundColor: "#ff2a30",
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoImage: {
        width: 170,
        resizeMode: 'contain',
        flex: 1,
    },

    title: {
        fontSize: 22.5,
        fontWeight: '500',
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: '400',
        fontSize: 18,
        textAlign: 'center'
    },
    content: {
        padding: 27,
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {

        backgroundColor: '#FFFFFF',
        color: 'black',
        width: '100%',
        borderRadius: 10,
        borderColor: '#ced4da',
        borderWidth: 1,
        height: 42.5,
    },
    textinput: {
        paddingVertical: 6.75,
        paddingHorizontal: 13.5,
        fontSize: 18,

    },
    button: {
        backgroundColor: '#e02f49',
        borderRadius: 32,
    },
    resetText: {
        fontSize: 18,
        color: 'white',
        paddingVertical: 4.5,
        paddingHorizontal: 18,
    },
    captcha: {
        height: 86,
        width: 300,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        backgroundColor: '#f9f9f9'
    },
    backButton: {
        fontSize: 18,
        color: '#ff2a30',
    }

});
