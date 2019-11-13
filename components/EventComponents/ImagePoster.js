import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import ScalableImage from 'react-native-scalable-image'



export default function ImagePoster({ source, day, start, end, timeBegining, accepted, capacity, width }) {

    propTypes = {
        source: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        timeBegining: PropTypes.string.isRequired,
        accepted: PropTypes.number,
        width: PropTypes.number,
        capacity: PropTypes.number
    }

    return (
        <View style={styles.container}>
            <View>
                <ScalableImage source={source} width={380} />
            </View>
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
                    <Text style={styles.timeText}>{start} ~ {end}</Text>
                    <Text style={styles.timeText}>Thời gian bắt đầu {timeBegining}</Text>
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
                    <Text style={styles.timeText}>{accepted} / {capacity}</Text>
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
        alignItems: 'flex-start',
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