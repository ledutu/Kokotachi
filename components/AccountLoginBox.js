import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox, Button } from 'native-base';
import PropTypes from 'prop-types';

class AccountLoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    static propTypes = {
        display: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired
    }

    onPressButton = () => {
        const { checked } = this.state;
        this.setState({ checked: !checked })
    };

    render() {
        const { display, close } = this.props
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
                    <ScrollView>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../kokotachi_image/logo.png')}
                                style={styles.logoImage}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.loginText}>Đăng nhập</Text>
                            <TouchableOpacity style={styles.facebookButton}>
                                <Icon
                                    name="facebook"
                                    size={30}
                                    color="white"
                                    style={styles.icon}
                                />
                                <Text style={styles.fbLoginText}>Đăng nhập bằng Facebook</Text>
                            </TouchableOpacity>
                            <View style={styles.detailInfo}>
                                <Text style={styles.note}>hoặc bằng Email</Text>
                                <TextInput
                                    placeholder="Nhập email đã đăng ký"
                                    style={[styles.input, { marginBottom: 20 }]}
                                />
                                <TextInput
                                    placeholder="**********"
                                    style={styles.input}
                                />
                                <View style={styles.saveAndForgetWrapper}>
                                    <View style={styles.checkBoxStyle}>
                                        <CheckBox
                                            checked={this.state.checked}
                                            onPress={this.onPressButton}
                                            style={styles.checkBoxButtonStyle} />

                                        <Text style={styles.saveText}>Ghi nhớ tên {'\n'} đăng nhập</Text>
                                    </View>

                                    <TouchableOpacity>
                                        <Text style={[styles.saveText, { color: '#ff2a30' }]}>Quên mật khẩu</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Button rounded style={styles.button}>
                                        <Text style={styles.loginTextButton}>Đăng nhập</Text>
                                    </Button>

                                    <Text style={[styles.note, { marginVertical: 0 }]}>Chưa có tài khoản?</Text>

                                    <Button bordered rounded style={styles.registerButton} onPress={this.props.onPress}>
                                        <Text style={[styles.saveText, { color: 'rgba(51, 51, 51, 0.7)' }]}>Tạo tài khoản mới</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },

    checkBoxButtonStyle: {
        marginRight: 20,
        marginTop: 10
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

    facebookButton: {
        flexDirection: 'row',
        backgroundColor: '#3b5998',
        width: 322,
        height: 44.5,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5
    },

    infoContainer: {
        padding: 27,
        alignItems: 'center',
    },

    loginText: {
        fontSize: 22.5,
        marginBottom: 18,
    },

    fbLoginText: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 25
    },

    icon: {
        borderRightColor: 'white',
        borderRightWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    note: {
        marginVertical: 18,
        color: 'rgba(51, 51, 51, 0.3)',
        fontSize: 16,
        textAlign: 'center'
    },

    input: {
        fontSize: 18,
        color: '#495057',
        width: 322,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#495057',
        paddingVertical: 10,
        paddingHorizontal: 13,
    },

    detailInfo: {
        justifyContent: 'space-around',

    },

    checkBoxStyle: {
        flexDirection: 'row',
        marginTop: 15
    },

    saveAndForgetWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    saveText: {
        fontSize: 18
    },

    loginTextButton: {
        fontSize: 18,
        color: 'white'
    },

    button: {
        backgroundColor: '#e02f49',
        width: 120,
        height: 40,
        justifyContent: 'center',
        marginVertical: 10
    },

    registerButton: {
        paddingVertical: 4.5,
        paddingHorizontal: 18,
        marginTop: 15
    }


});

export default withNavigation(AccountLoginBox);
