import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import Header from '../task/Header';
import ImageSlider from '../task/ImageSlider';
import Reader from '../task/Reader';
import { JobData, ChurchData, CosmeticData, EventData, ApartmentData, SocialData } from "../data/Data";
import Footer from '../task/Footer';
import FabButton from '../components/FabButton';
import DoubleRow from '../components/DoubleRow';
import LogoImages from '../utils/LogoImages';
import ChurchInRow from '../components/ChurchInRow';



export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
    }

    static navigationOptions = {
        header: null,
    };

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header />

                <ScrollView>
                    <ImageSlider />
                    <Reader />
                    <DoubleRow
                        icon={{ uri: LogoImages[0].uri }}
                        title="Công việc"
                        data={JobData}
                        screen="Job"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[1].uri }}
                        title="Căn hộ"
                        data={ApartmentData}
                        screen="Apartment"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[2].uri }}
                        title="Xã hội"
                        data={SocialData}
                        screen="Cosmetic"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[3].uri }}
                        title="Mỹ phẩm"
                        data={CosmeticData}
                        screen="Cosmetic"
                    />

                    <ChurchInRow
                        icon={{ uri: LogoImages[4].uri }}
                        title="Nhà thờ"
                        data={ChurchData}
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[5].uri }}
                        title="Sự kiện"
                        data={EventData}
                        screen="Event"
                    />

                    <Footer />

                </ScrollView>

                <FabButton />


            </View>
        );
    }
};

const styles = StyleSheet.create({
    fullScreen: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
        backgroundColor: 'white',
        top: 100,
        padding: 20
    },
    fullScreenText: {
    }
});