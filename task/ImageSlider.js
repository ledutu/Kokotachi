import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://admin.kokotachi.com/storage/banner/5ccf943344e6f_kktc-banner01-sp.jpg',
                'https://admin.kokotachi.com/storage/banner/5ccf94448b513_kktc-banner02-sp.jpg',
                'https://admin.kokotachi.com/storage/banner/5ccf9456d467b_kktc-banner03-sp.jpg',
            ]
        };
    }

    render() {
        return (
            <View>
                <SliderBox
                    images={this.state.images}
                    dotColor="#ff2a30"
                    dotStyle={styles.dot}
                    sliderBoxHeight={400}
                    circleLoop
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dot:{
        width: 15,
        height: 15,
        borderRadius: 15,
    }
})
