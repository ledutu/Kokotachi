import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Footer from '../task/Footer';
import DetailHeader from '../components/DetailHeader';
import Header from '../task/Header';
import AccountLoginBox from '../components/AccountLoginBox';
import Form from '../components/Form';


export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
    }

    static navigationOptions = {
        header: null
    }

    handleOpenLoginBox = () => {
        this.setState({
            display: true
        })
    }

    handleCloseBox = () => {
        this.setState({
            display: false
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.headerDetailStyle}>
                            <DetailHeader
                                button="Tạo tài khoản"
                                title="Tạo tài khoản Kokotachi"
                                textAlign='center'
                            />
                            <Text style={styles.questionText}>Bạn đã có tài khoản chưa?
                                <Text
                                    style={{ color: '#ff2a30' }}
                                    onPress={this.handleOpenLoginBox}
                                >
                                    Vui lòng đăng nhập
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.chooseImageContainer}>
                            <Text style={styles.text}>Hình ảnh</Text>
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://kokotachi.com/images/avatar-no-image.jpg' }}
                            />
                            <Text style={styles.text}>Vui lòng chọn hình ảnh có định dạng: jpg, jpeg, png và có dung lượng {'<='} 500Kb</Text>
                            <TouchableOpacity style={styles.chooseImageText}>
                                <Text style={[styles.text, { color: 'white', textAlign: 'center' }]}>Chọn ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Form
                                title="Họ và tên"
                                star
                                isInput
                            />
                            <Form
                                title="Tên tài khoản"
                                star
                                isInput
                            />
                            <Form
                                title="Tên tài khoản"
                                star
                                isGender
                            />
                            <Form
                                title="Tên tài khoản"
                                star
                                isThreeDropDown
                            />
                        </View>
                    </View>
                    <Footer />
                </ScrollView>
                <AccountLoginBox
                    display={this.state.display}
                    close={this.handleCloseBox}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },

    questionText: {
        textAlign: 'center',
        color: 'rgba(51, 51, 51, 0.7)',
        fontSize: 18
    },

    headerDetailStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: '#dee2e6',
        borderBottomWidth: 1,
        paddingBottom: 18,
        marginBottom: 18
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 18,
        color: '#212529',
    },
    chooseImageContainer: {
        height: 384,
        justifyContent: 'space-around',
        marginBottom: 16
    },
    chooseImageText: {
        paddingVertical: 5,
        backgroundColor: '#007bff',
        width: 95,
        borderRadius: 5
    }
});
