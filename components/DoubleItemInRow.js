import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class DoubleItemInRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const {
            data: {
                image,
                title,
                datePosting,
                button
            }
        } = this.props;

        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.9}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
                <View style={styles.shareAndDatePosting}>
                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Text style={styles.textButton}>{button}</Text>
                    </TouchableOpacity>
                    <Text>{datePosting}</Text>
                </View>
                <Text style={styles.titleStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: 200,
        height: 400,
    },

    image: {
        height: 200,
        width:'100%',
        borderRadius: 10
    },
    shareAndDatePosting:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center'
    },
    touchableOpacity: {
        backgroundColor: "#ff2a30",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 40,
    },
    textButton: {
        color: 'white',
        fontSize: 15
    },

    datePosting:
    {
        fontSize: 15,
        color: 'rgba(51, 51, 51, 0.3)',
    },
    titleStyle:
    {
        textTransform: 'uppercase',
        color: '#333333',
        fontSize: 17,
        fontWeight: 'bold'
    }


})
