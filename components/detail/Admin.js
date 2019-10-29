import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const Admin = props => {

    propTypes = {
        image: PropTypes.string.isRequired,
        adminName: PropTypes.string.isRequired,
        adminGender: PropTypes.string.isRequired,
        joinDay: PropTypes.string,
        allPosting: PropTypes.string.isRequired,
    }

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.image }}
                />
            </View>
            <View style={styles.info}>
                <Text style = {styles.adminNameStyle}>{props.adminName}</Text>
                <View>
                    <Text style = {styles.genderAndDayPosting}>Giới tính: {props.adminGender}</Text>
                    <Text style = {styles.genderAndDayPosting}>Ngày tham gia: {props.joinDay}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.9}>
                    <Text style = {styles.allPostingStyle}>{props.allPosting}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        marginVertical: 54,
        backgroundColor: '#F7F7F7'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 18
    },

    image: {
        width: 120,
        height: 120,

    },

    adminNameStyle:{
        fontSize: 22.5,
        color: '#333333',
        fontWeight: '500'
    },

    genderAndDayPosting:{
        fontSize: 18,
        color: 'rgba(51, 51, 51, 0.7)'
    },
    allPostingStyle: {
        fontSize: 18,
        color: '#007bff'
    }
})

export default Admin;