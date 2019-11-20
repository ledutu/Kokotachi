import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function MenuModal({ isContain,
    title,
    screen,
    type,
    onPress
}) {

    if (isContain) {
        return (
            <View></View>
        )
    }
    return (
        <TouchableOpacity
            style={styles.titleWrapping}
            onPress={() => onPress(screen, type)}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

MenuModal.propTypes = {
    isContain: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    type: PropTypes.string,
    screen: PropTypes.string,
};

const styles = StyleSheet.create({
    titleWrapping: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingVertical: 9,
        paddingHorizontal: 18,
        flex: 1
    },
    text: {
        fontSize: 18,
        color: '#333333',
    }
});
