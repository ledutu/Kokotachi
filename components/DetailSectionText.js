import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailSectionText = props => {
    return (
        <View>
            <Text style={styles.sectionText}>{props.sectionText}</Text>
            <Text style={styles.content}>{props.data}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionText: {
        color: 'rgba(255, 42, 48, 0.7)',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingBottom: 18,
        fontWeight: '600'
    },

    content: {
        color: '#212529',
        fontSize: 18,
        paddingBottom: 18
    },
})

export default DetailSectionText;