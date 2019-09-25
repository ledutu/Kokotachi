import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.imageStyle}>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Image
                                source={{ uri: 'https://kokotachi.com/images/assets/logo-bottom.png' }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.iconContainer}>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Icon
                                name="logo-instagram"
                                color="rgba(255, 255, 255, 0.5)"
                                size={30}
                                style={styles.iconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Icon
                                name="logo-facebook"
                                color="rgba(255, 255, 255, 0.5)"
                                size={30}
                                style={styles.iconStyle}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoStyle}>
                        <View style={styles.info}>
                            <TouchableOpacity activeOpacity={0.9}>
                                <Text style={styles.textButton}>Về chúng tôi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9}>
                                <Text style={styles.textButton}>Chính sách quyền riêng tư</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <TouchableOpacity activeOpacity={0.9}>
                                <Text style={styles.textButton}>Điều khoản sử dụng</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9}>
                                <Text style={styles.textButton}>Liên hệ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{alignItems: 'center',}}>
                        <Text style={styles.copyrightText}>© Kokotachi 2019</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#494949',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        height: 220,
        width: '100%',
        justifyContent: 'space-around',
        marginVertical: 54
    },
    image: {
        width: 182,
        height: 56
    },
    iconContainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconStyle: {
        paddingHorizontal: 10
    },
    infoStyle: {
        paddingHorizontal: 30
    },

    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textButton: {
        color: 'white',
        fontSize: 18,
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    copyrightText:{
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18
    }
})
