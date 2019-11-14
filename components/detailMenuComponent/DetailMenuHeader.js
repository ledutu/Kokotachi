import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function DetailMenuHeader({
    uri,
    title,
    postingNumber,
    isTitle,
}) {

    return (
        <View style={styles.container}>
            {isTitle && (
                <View style={styles.titleWrapper}>
                    <Image
                        source={uri}
                        style={styles.image}
                    />
                    <Text style={styles.title} numberOfLines={2}>Trang chủ > {title}</Text>
                </View>
            )}
            <View style={styles.postingNumberWrapping}>
                <Text style={styles.postingNumber}>{postingNumber} Bài viết</Text>
            </View>
        </View>
    );
};

DetailMenuHeader.propTypes = {
    uri: PropTypes.number,
    title: PropTypes.string,
    postingNumber: PropTypes.number,
    isTitle: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 27,
        marginHorizontal: 15,
        paddingBottom: 10,
    },
    titleWrapper: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        color: '#333333',
        fontWeight: 'bold',
    },
    postingNumber: {
        color: 'rgba(51, 51, 51, 0.3)',
        fontSize: 15,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
});
