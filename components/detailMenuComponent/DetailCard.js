import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function DetailCard({
    uri,
    title,
    content,
    date,
    likeCounting,
    commentCounting,
    isContent,
    onPress,
    id,
}) {


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { onPress(id) }}
        >
            <Image source={{ uri }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{date}</Text>
            {isContent && (
                <Text style={styles.content}>{content}</Text>
            )}
            <View style={styles.contact}>
                <Text style={[styles.text, { marginRight: 10 }]}>{likeCounting} Lượt thích</Text>
                <Text style={styles.text}>{commentCounting} Bình luận</Text>
            </View>
        </TouchableOpacity>
    );
};

DetailCard.propTyes = {
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    date: PropTypes.string.isRequired,
    likeCounting: PropTypes.number.isRequired,
    commentCounting: PropTypes.number.isRequired,
    isContent: PropTypes.bool,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 27,
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'rgba(214, 214, 214, 0.8)',
        borderBottomColor: 'rgba(214, 214, 214, 0.8)'
    },

    image: {
        aspectRatio: 1,
    },

    title: {
        fontWeight: '500',
        fontSize: 22.5,
        color: '#333333',
        textTransform: 'uppercase',
        marginVertical: 9,
        marginBottom: 4.5
    },

    content: {
        fontSize: 16.2,
        color: '#333333',
    },

    text: {
        fontSize: 16.2,
        color: 'rgba(51, 51, 51, 0.3)'
    },

    contact: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }



})
