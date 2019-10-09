import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AutoHeightImage from 'react-native-auto-height-image';
import PropTypes from 'prop-types';



export default function ImagePoster({ source, day, period, begin, registerPeopleNumber }) {

    propTypes = {
        source: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        begin: PropTypes.string.isRequired,
        registerPeopleNumber: PropTypes.string.isRequired
    }

    return (
        <View style={styles.container}>
            <AutoHeightImage
                source={source}
                width={380} />
            <View style={styles.timeContainer}>
                <View style={styles.time}>
                    <Text style={styles.timeText}>Ngày & giờ</Text>
                    <Icon
                        name="md-time"
                        size={70}
                        color="white"
                    />
                </View>
                <View style={styles.timeInfo}>
                    <Text style={styles.timeText}>{day}</Text>
                    <Text style={styles.timeText}>{period}</Text>
                    <Text style={styles.timeText}>{begin}</Text>
                </View>
            </View>

            <View style={styles.registerContainer}>
                <View style={styles.register}>
                    <Text style={styles.timeText}>Đã đăng kí/sức chứa</Text>
                    <Icon
                        name="ios-people"
                        size={70}
                        color="white"
                    />
                </View>
                <View style={[styles.countingContainer, styles.timeInfo]}>
                    <Text style={styles.timeText}>{registerPeopleNumber} / 30 Người</Text>
                    <Text style={[styles.countingText, { color: '#EE4154' }]}>Đã đăng kí</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
    },
    timeContainer: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#111'
    },
    time: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    },
    timeInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 20
    },
    timeText: {
        fontSize: 18,
        color: '#FFF'
    },
    registerContainer: {
        flexDirection: 'row',
        backgroundColor: '#333',
        padding: 15,
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    register: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    },
    countingContainer: {
        flexDirection: 'column'
    }
});