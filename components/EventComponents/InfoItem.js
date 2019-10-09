import React, { Component } from 'react';
import { View, Text, StyleSheet, ColorPropType } from 'react-native';
import OpenLinking from '../../utils/OpenLinking';
import PropTypes from 'prop-types';

export default function InfoItem({ titleName, detail, isTitle, color, isLink }) {

    propTypes = {
        titleName: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
        isTitle: PropTypes.bool,
        color: ColorPropType.isRequired,
        isLink: PropTypes.bool,
    }


    handleLinking = () => {
        OpenLinking(detail);
    }

    handleNothing = () =>
    {

    }

    return (
        <View style={styles.container}>
            <Text style={isTitle ? styles.largeName : styles.smallName}>{titleName}</Text>
            <Text
                style={[isTitle ? styles.largeDetail : styles.smallDetail, { color: color }]}
                onPress={isLink ? this.handleLinking : this.handleNothing}
            >
                {detail}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#dee2e6',
        padding: 13.5,
        flex: 1,
    },
    largeName: {
        paddingVertical: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        textTransform: "uppercase",
        flex: 0.7

    },
    largeDetail: {
        paddingVertical: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#17a2b8',
        flex: 0.3
    },
    smallName: {
        fontSize: 18,
        flex: 0.7,
        paddingRight: 10
    },
    smallDetail: {
        fontSize: 18,
        flex: 0.3
    }
})