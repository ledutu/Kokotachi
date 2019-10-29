import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Comment = props => {

    propTypes = {
        commentNumber: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }

    return (
        <View style = {styles.container}>
            <View>
                <Text style = {{fontSize: 16, color: '#333333'}}>{props.commentNumber} Bình luận</Text>
            </View>
            
            <View style={styles.avtAndCmt}>
                <Image
                    style={styles.image}
                    source = {{uri: props.image}}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder = "Nhập bình luận"
                    multiline={true}
                />
            </View>
            
            <View style = {styles.buttonGroup}>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Hủy bỏ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commentButton}>
                    <Text style = {styles.cmtText}>Bình luận</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        marginBottom: 48,
    },

    avtAndCmt: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 18,
        marginTop: 9,
    },
    image:
    {
        width: 48,
        height: 48,
        borderRadius: 50,
    },

    textInput:{
        backgroundColor: '#F7F7F7',
        borderRadius: 6,
        width:'100%',
        height: 80,
        padding: 16,
        fontSize: 14
    },

    cancelButton:{
        paddingVertical: 4.5,
        paddingHorizontal: 9,
        borderWidth: 1,
        borderColor: 'rgba(51, 51, 51, 0.5)',
        borderRadius: 30
    },

    commentButton:{
        paddingVertical: 4.5,
        paddingHorizontal: 9,
        borderRadius: 30,
        borderColor: '#e02f49',
        backgroundColor: '#e02f49',
        marginLeft: 10,
    },

    cancelText: {
        color: 'rgba(51, 51, 51, 0.5)',
        fontSize: 15.75
    },

    cmtText: {
        fontSize: 15.75,
        color: 'white'
    }
    
})

export default Comment;