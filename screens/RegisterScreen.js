import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, PermissionsAndroid } from 'react-native';
import Footer from '../task/Footer';
import DetailHeader from '../components/DetailHeader';
import Header from '../task/Header';
import AccountLoginBox from '../components/AccountLoginBox';
import Form from '../components/Form';
import { CheckBox } from 'native-base';
import OpenLinking from '../utils/OpenLinking';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';


const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
        skipBackup: false,
    },
};



export default class RegisterScreen extends Component {
    constructor(props) {
        data = props.navigation.getParam('data');
        super(props);
        this.state = {
            display: false,
            province: ['Hokkaido', 'Aomori Prefecture', 'Iwate Prefecture', 'Miyagi Prefecture',
                'Akita Prefecture', 'Yamagata Prefecture', 'Fukushima Prefecture',
                'Ibaraki Prefecture', 'Tochigi Prefecture', 'Gunma Prefecture'
            ],
            city: ['Tokyo'],
            national: ['Andorra', 'Các Tiểu Vương quốc Ả Rập Thống nhất', 'Afghanistan', 'Antigua và Barbuda',
                'Anguilla', 'Albania', 'Armenia'
            ],
            japanLevel: ['N1', 'N2', 'N3', 'N4', 'N5', 'Chưa có'],
            status: [
                'Vui lòng chọn tình trạng của bạn',
                'Đang xem xét kế hoạch du học/làm việc tại Nhật Bản',
                'Đã quyết định du học/làm việc tại Nhật Bản',
                'Đang chờ ngày bay qua Nhật Bản',
                'Đã đến Nhật Bản',
            ],
            checked: false,
            image: data.image,
        };
    }

    static navigationOptions = {
        header: null
    };

    onPressButton = () => {
        const { checked } = this.state;
        this.setState({ checked: !checked })
    };

    handleOpenLoginBox = () => {
        this.setState({
            display: true
        })
    }

    handleCloseBox = () => {
        this.setState({
            display: false
        })
    };

    handleChooseImage = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.launchImageLibrary(options, (response) => {
                    console.log(response)
                    this.setState({
                        image: response.uri,
                    })
                });
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }

    }

    render() {
        console.log(this.state.image);
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.headerDetailStyle}>
                            <DetailHeader
                                button={!data ? 'Tạo tài khoản' : 'Thông tin tài khoản'}
                                title={!data ? 'Tạo tài khoản Kokotachi' : 'Thông tin tài khoản'}
                                textAlign='center'
                            />
                            {!data && (
                                <Text style={styles.questionText}>Bạn đã có tài khoản chưa?
                                <Text
                                        style={{ color: '#ff2a30' }}
                                        onPress={this.handleOpenLoginBox}
                                    >
                                        Vui lòng đăng nhập
                                </Text>
                                </Text>
                            )}
                        </View>
                        <View style={styles.chooseImageContainer}>
                            <Text style={styles.text}>Hình ảnh</Text>
                            <Image
                                style={styles.image}
                                source={
                                    !data ?
                                        { uri: 'https://kokotachi.com/images/avatar-no-image.jpg' } :
                                        { uri: this.state.image }
                                }
                            />
                            <Text style={styles.text}>Vui lòng chọn hình ảnh có định dạng: jpg, jpeg, png và có dung lượng {'<='} 500Kb</Text>
                            <TouchableOpacity
                                style={styles.chooseImageText}
                                onPress={this.handleChooseImage}
                            >
                                <Text style={[styles.text, { color: 'white', textAlign: 'center' }]}>Chọn ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Form
                                title="Họ và tên"
                                star
                                isInput
                                value={data.name}
                            />
                            <Form
                                title="Tên tài khoản"
                                star
                                isInput
                                placeholder="Vui lòng chỉ nhập ký tự chữ"
                            />
                            <Form
                                title="Giới tính"
                                star
                                isGender
                            />
                            <Form
                                title="Ngày sinh"
                                star
                                isThreeDropDown
                            />
                            <View style={styles.line} />
                            <Form
                                title="Email"
                                star
                                isInput
                                placeholder="email@example.com"
                            />
                            <Form
                                title="Mật khẩu"
                                star
                                isInput
                                secureTextEntry={true}
                            />
                            <Form
                                title="nhập lại Mật khẩu"
                                star
                                isInput
                                secureTextEntry={true}
                            />

                            <View style={styles.line} />

                            <Form
                                title="Địa chỉ lưu trú tại nhật"
                                isTwoDropDown
                                province="Vui lòng chọn tỉnh"
                                city="Vui lòng chọn thành phố"
                                list1={this.state.province}
                                list2={this.state.city}
                            />

                            <Form
                                title="Quốc tịch"
                                star
                                isOneDropDown
                                section="Vui lòng chọn quốc tịch"
                                list={this.state.national}
                            />

                            <Form
                                title="Trình độ JLPT"
                                star
                                isOneDropDown
                                section="Vui lòng chọn trình độ tiếng Nhật"
                                list={this.state.national}
                            />

                            <Form
                                title="Tình trạn hiện tại"
                                star
                                isOneDropDown
                                section="Vui lòng chọn tình trạng hiện tại của bạn"
                                list={this.state.status}
                            />

                            <View style={styles.checkBoxStyle}>
                                <CheckBox
                                    checked={this.state.checked}
                                    onPress={this.onPressButton}
                                    style={styles.checkBoxButtonStyle} />

                                <Text style={styles.saveText}>
                                    Đồng ý với <Text
                                        style={{ color: '#ff2a30' }}
                                        onPress={() => OpenLinking('https://kokotachi.com/dieu-khoan-su-dung')}
                                    >
                                        Điều khoản sử dụng
                                        </Text>
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <TouchableOpacity style={styles.register}>
                                    <Icon
                                        name="user-check"
                                        size={20}
                                        color="white"
                                    />
                                    <Text style={styles.registerText}>{!data? "Lưu thay đổi": "Đăng ký"}</Text>
                                </TouchableOpacity>
                            </View>

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
    },

    line: {
        borderColor: 'rgba(214, 214, 214, 0.8)',
        borderWidth: 1,
        marginTop: 11,
        marginBottom: 27
    },

    checkBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
    },

    checkBoxButtonStyle: {
        marginRight: 20,
    },

    saveText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#212529'
    },

    register: {
        paddingVertical: 4.5,
        paddingHorizontal: 13.5,
        backgroundColor: '#e02f49',
        flexDirection: 'row',
        width: 120,
        height: 37,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 20,
        marginBottom: 40,
        marginTop: 30
    },

    registerText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    }

});
