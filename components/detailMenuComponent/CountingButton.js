import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function CountingButton({ number, onPress, isChosen}) {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                isChosen? {backgroundColor: '#ff2a30'}: {backgroundColor: '#EFEFEF'}
            ]}
        >
            <Text
                style={[
                    styles.number,
                    isChosen ? { color: 'white' } : { color: 'rgba(51, 51, 51, 0.3)' }
                ]}
            >{number}</Text>
        </TouchableOpacity>
    );
};

CountingButton.propTypes = {
    number: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5.4,
        paddingHorizontal: 10.8,
        backgroundColor: '#ff2a30',
        borderRadius: 6,
        marginHorizontal: 5
    },
    number: {
        fontSize: 16.2,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
});
