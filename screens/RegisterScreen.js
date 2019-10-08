import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Footer from '../task/Footer';
import DetailHeader from '../components/DetailHeader';
import Header from '../task/Header';
import AccountLoginBox from '../components/AccountLoginBox';

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
            <View style={{flex: 1}}>
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
                                    style={{color: '#ff2a30'}}
                                    onPress={this.handleOpenLoginBox}
                                >
                                    Vui lòng đăng nhập
                                </Text>
                            </Text>
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
    container:{
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
    }
});
