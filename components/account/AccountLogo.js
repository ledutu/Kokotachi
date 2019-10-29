import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function AccountLogo({ uri }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff2a30",
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 170,
        resizeMode: 'contain',
        flex: 1,
    },
});
