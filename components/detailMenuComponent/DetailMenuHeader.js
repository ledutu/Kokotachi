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
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
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
                        number={'2'}
                        onPress={() => { }}
                    />

                    <CountingButton
                        number={'3'}
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
        paddingBottom: 27
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 54
    },
    title: {
        fontSize: 31.5,
        color: '#333333',
        fontWeight: 'bold',
    },
    postingNumberWrapping: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    postingNumber: {
        color: 'rgba(51, 51, 51, 0.3)',
        fontSize: 15,
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 5
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
