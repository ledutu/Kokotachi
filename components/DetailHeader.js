import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class DetailHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            button, title, timePosting, textAlign
        } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.homeButton}>
                        <Text style={{fontSize: 18, color: 'rgba(51, 51, 51, 0.3)'}}>Trang chủ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.jobButton}>
                        <Text style={{fontSize: 18, color: 'white'}}>{button}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={[styles.titleText, {textAlign: textAlign}]}>{title}</Text>
                </View>

                <View style={styles.textViewDateTime}>
                    <Text style={styles.timeText}>{timePosting}</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    buttonStyle:
    {
        flexDirection: 'row',
        paddingVertical: 15
    },
    homeButton:
    {
        
        backgroundColor: '#ededed',
        marginRight: 15,
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderRadius: 20

    },
    jobButton:{
        backgroundColor: '#ff2a30',
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderRadius: 20
    },
    titleText:
    {
        fontSize: 40,
        fontWeight: '500',
    },
    timeText:
    {
        color: 'rgba(51, 51, 51, 0.3)',
        fontSize: 16,
    },
    textViewDateTime:
    {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    container:{
        marginTop: 30
    }
})
