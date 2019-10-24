import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";

export default function LogoutBox({ visible, onRequestClose, logoutPress }) {

    return (
        <View style={styles.container}>
            <Modal
                style={styles.modal}
                isVisible={visible}
                animationIn={"slideInDown"}
                onBackButtonPress={onRequestClose}
                onBackdropPress={onRequestClose}
                useNativeDriver={true}
            >
                <View style={styles.modalDetail}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../kokotachi_image/logo.png')}
                            style={styles.logoImage}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>Bạn có chắc muốn thoát khỏi hiện tại?</Text>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={styles.noButton} onPress={onRequestClose}>
                                <Text style={styles.text}>Không</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.yesButton} onPress={logoutPress}>
                                <Text style={[styles.text, {color: 'white'}]}>Có</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    );
};

LogoutBox.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    logoutPress: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
    },

    modal: {
        
    },

    imageContainer: {
        backgroundColor: "#ff2a30",
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalDetail: {
        backgroundColor: 'white',
        borderRadius: 10,
        top: 10,
        position: 'absolute'
    },

    logoImage: {
        width: 170,
        resizeMode: 'contain',
        flex: 1,
    },

    contentContainer: {
        padding: 27,
    },
    title: {
        fontSize: 22.5,
        color: "#212529",
        marginBottom: 18,
        textAlign: 'center'
    },
    text:{
        fontSize: 18,
        paddingVertical: 4.5,
        paddingHorizontal: 18,
        color: 'rgba(51, 51, 51, 0.5)',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
    },
    noButton:{
        borderWidth: 1,
        borderColor: 'rgba(51, 51, 51, 0.5)',
        backgroundColor: '#DDDDDD',
        borderRadius: 32,
    },
    yesButton: {
        backgroundColor: '#e02f49',
        borderColor: '#e02f49',
        borderRadius: 32,
        marginLeft: 30,
    }
});
