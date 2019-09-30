import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const TouchableButton = props => {
    return (
        <TouchableOpacity style={[props.style, styles.button]}>
            <props.icon
                name={props.iconName}
                size={props.size}
                color={props.color}
                style = {{paddingRight: 5,}}
            />
            <Text style={[props.style, styles.text]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 4.5,
        paddingHorizontal: 7.65,
        borderRadius: 20,
    },
    text:{
        fontSize: 12.6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TouchableButton;


