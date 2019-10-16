import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function RefMostPosting({
    uri,
    title,
    date,
    onPress,
    id,
}) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(id)}
            activeOpacity={0.9}
        >
            <Image source={{ uri }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={3}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
};

RefMostPosting.propTypes = {
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 9,
        flex: 1,
        borderBottomColor: 'rgba(214, 214, 214, 0.8)',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'rgba(214, 214, 214, 0.8)',
    },
    image: {
        width: 80,
        height: 80,
    },
    title: {
        color: '#333333',
        fontSize: 16.2,
        textTransform: 'uppercase',
    },
    date: {
        color: 'rgba(51, 51, 51, 0.3)',
        fontSize: 16.2,
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1,
    }
});