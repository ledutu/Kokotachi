import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function LogoutBox({ visible, onRequestClose }) {

    return (
        <View style={styles.container}>
            <Modal
                style={styles.modal}
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose}
                onDismiss={onRequestClose}
            >
                <View style={styles.modalDetail}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../kokotachi_image/logo.png')}
                            style={styles.logoImage}
                        />
                    </View>
                </View>

            </Modal>
        </View>
    );
};

LogoutBox.propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    modal: {
        flex: 1,
        justifyContent: 'center',
        
    },

    imageContainer: {
        backgroundColor: "#ff2a30",
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalDetail: {
        width: 382,
        height: 263,
        backgroundColor: 'white',
        top: 25,
        left: 15,
        right: 0,
    },

    logoImage: {
        width: 170,
        resizeMode: 'contain',
        flex: 1,
    },
});
