import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function CountingButton({ number, onPress, isChosen }) {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={isChosen ? styles.container : styles.containerNotChosen}
        >
            <Text style={styles.number}>{number}</Text>
        </TouchableOpacity>
    );
};

CountingButton.propTypes = {
    number: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5.4,
        paddingHorizontal: 10.8,
        backgroundColor: '#ff2a30',
        borderRadius: 6,
    },

    containerNotChosen: {
        flex: 1,
        paddingVertical: 5.4,
        paddingHorizontal: 10.8,
        backgroundColor: '#EFEFEF',
        borderRadius: 6,
    },

    number: {
        fontSize: 16.2,
        color: 'white',
    }
});
