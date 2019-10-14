import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function MenuModal({ isContain,
    title,
    onPress,
    subTitle,
    numberOfSubMenu,
    uri
}) {

    if (isContain) {
        return (
            <View></View>
        )
    }
    return (
        <TouchableOpacity
            style={styles.titleWrapping}
            onPress={() => onPress(title, uri)}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

MenuModal.propTypes = {
    isContain: PropTypes.bool,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    onPress: PropTypes.func,
    uri: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    titleWrapping: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingVertical: 9,
        paddingHorizontal: 18,
    },
    text: {
        fontSize: 18,
        color: '#333333',
    }
});
