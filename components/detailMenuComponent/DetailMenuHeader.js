import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import CountingButton from './CountingButton';

export default function DetailMenuHeader({
    uri,
    title,
    postingNumber,
    periodNumber
}) {

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Image source={{ uri }} />
                <Text style={styles.title}>Trang chủ > {title}</Text>
            </View>
            <View style={styles.postingNumberWrapping}>
                <Text style={styles.postingNumber}>{periodNumber} Trong {postingNumber} Bài viết</Text>
                <View style={styles.buttonGroup}>
                    <CountingButton
                        number={'<'}
                        onPress={() => { }}
                    />
                    <CountingButton
                        number={'1'}
                        isChosen
                        onPress={() => { }}
                    />
                    <CountingButton
                        number={'>'}
                        onPress={() => { }}
                    />
                </View>
            </View>
        </View>
    );
};

DetailMenuHeader.propTypes = {
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postingNumber: PropTypes.number.isRequired,
    periodNumber: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {

    },
    titleWrapper: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 31.5,
        color: '#333333',
        fontWeight: 'bold',
    },
    postingNumberWrapping: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postingNumber:{
        color: 'rgba(51, 51, 51, 0.3)',
        fontSize: 15,
    }
});
