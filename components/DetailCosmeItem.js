import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailCosmeItem = props => {

    const temp =
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <Text style={styles.text}>Hình ảnh chỉ mang tính chất minh họa</Text>
            <Text style={styles.text}>Nguồn: {props.source}</Text>
        </View>
    const view = <View></View>;

    return (
        <View>
            <View >
                <Text style={styles.text}>{props.content}</Text>
            </View>
            <View>{props.source === undefined? view: temp}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#212529',
        marginBottom: 5
    },
    image: {
        width: '100%',
        height: 353,
        marginVertical: 10
    },

    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DetailCosmeItem;
