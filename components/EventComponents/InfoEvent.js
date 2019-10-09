import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoItem from './InfoItem';
import PropTypes from 'prop-types';

export default function InfoEvent({
    nameCost,
    totalCost,
    paymentMethod,
    registerTime,
    registerStoppingTime,
    place,
    address,
    ageLimited,
    url,
    hoster,
    eventID
}) {

    propTypes = {
        nameCost: PropTypes.string.isRequired,
        totalCost: PropTypes.string.isRequired,
        paymentMethod: PropTypes.string,
        registerTime: PropTypes.string,
        registerStoppingTime: PropTypes.string,
        place: PropTypes.string,
        address: PropTypes.string,
        ageLimited: PropTypes.string,
        url: PropTypes.string,
        hoster: PropTypes.string,
        eventID: PropTypes.string
    };

    return (
        <View style={styles.container}>
            <View style={styles.costContainer}>
                <Icon
                    name="md-cash"
                    size={20}
                    color='#212529'
                />
                <Text style={styles.cost}>Giá vé</Text>
            </View>
            <View>
                <InfoItem
                    isTitle
                    titleName={nameCost}
                    detail={totalCost}
                />
                <InfoItem
                    isTitle={false}
                    titleName="Phương thức thanh toán"
                    detail={paymentMethod}
                />
                <InfoItem
                    isTitle={false}
                    titleName="Thời gian nhận đăng ký"
                    detail={registerTime}
                />
                <InfoItem
                    isTitle={false}
                    titleName="Thời gian ngưng nhận đăng ký"
                    detail={registerStoppingTime}
                />
                <InfoItem
                    isTitle={false}
                    titleName="Địa điểm"
                    detail={place}
                />
                <InfoItem
                    isTitle={false}
                    titleName="Địa chỉ"
                    detail={address}
                />
                <InfoItem
                    isTitle={false}
                    titleName="Giới hạn độ tuổi"
                    detail={ageLimited}
                />
                <InfoItem
                    isTitle={false}
                    titleName="URL"
                    detail={url}
                    color="#EE4154"
                    isLink
                />
                <InfoItem
                    isTitle={false}
                    titleName="Ban tổ chức"
                    detail={hoster}
                    color="#EE4154"
                />
                <InfoItem
                    isTitle={false}
                    titleName="ID sự kiện"
                    detail={eventID}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 75
    },
    cost: {
        color: '#212529',
        fontSize: 15,
        paddingLeft: 5
    },
    costContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#dee2e6',
        flexDirection: 'row',
    }
});

