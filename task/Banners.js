import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { imageSource } from '../utils/pureFunction';

export default function Banners({ banners }) {

    const bannerWidth = Dimensions.get('window').width;
    const bannerHeight = 375;

    const _styles = StyleSheet.create({
        swiper_image: {
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover'
        }
    })

    const renderPage = (banner, index) => {
        const url = imageSource(banner.url);
        return (
            <View key={index}>
                <Image style={{ width: bannerWidth, height: bannerHeight }} source={url} />
            </View>
        );
    };

    return (
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={bannerWidth}
        >
            {banners.map((banner, index) => renderPage(banner, index))}
        </Carousel>
    )
};
