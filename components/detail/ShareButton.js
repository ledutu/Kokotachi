import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TouchableButton from './TouchableButton';

export default class ShareButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styles.icon}>

                    <TouchableButton
                        icon={MaterialIcons}
                        iconName="favorite"
                        size={18}
                        color="rgba(51, 51, 51, 0.7)"
                        title="Thích bài viết"
                        style = {styles.favoriteButton}
                        
                    />

                    <TouchableButton
                        icon={Ionicons}
                        iconName="logo-facebook"
                        size={18}
                        color="white"
                        title="Chia sẽ Facebook"
                        style = {styles.facebookButton}
                    />

                    <TouchableButton
                        icon={Ionicons}
                        iconName="logo-twitter"
                        size={18}
                        color="white"
                        title="Chia sẽ Twitter"
                        style = {styles.twitterButton}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginVertical: 18
    },
    favoriteButton: {
        backgroundColor: '#ededed',
        color: 'rgba(51, 51, 51, 0.7)'
    },
    facebookButton: {
        backgroundColor: '#3b5998',
        color: 'white'
    },
    twitterButton: {
        backgroundColor: '#1da1f2',
        color: 'white'
    },


})
