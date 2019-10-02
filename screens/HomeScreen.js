import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../task/Header';
import ImageSlider from '../task/ImageSlider';
import Reader from '../task/Reader';
import { JobData, ChurchData, CosmeticData, EventData, ApartmentData, SocialData } from "../data/Data";
import Footer from '../task/Footer';
import FabButton from '../components/FabButton';
import DoubleRow from '../components/DoubleRow';
import LogoImages from '../utils/LogoImages';

const title = ["Công việc", "Căn hộ", "Xã hội", "Mỹ phẩm", "Nhà thờ", "Sự kiện"];

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        icon={{ uri: LogoImages[0] }}
                        title="Công việc"
                        data={JobData}
                        screen="Job"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[1] }}
                        title="Căn hộ"
                        data={ApartmentData}
                        screen="Apartment"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[2] }}
                        title="Xã hội"
                        data={SocialData}
                        screen="Cosmetic"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[3] }}
                        title="Mỹ phẩm"
                        data={CosmeticData}
                        screen="Cosmetic"
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[4] }}
                        title="Nhà thờ"
                        data={ChurchData}
                    />

                    <DoubleRow
                        icon={{ uri: LogoImages[5] }}
                        title="Sự kiện"
                        data={EventData}
                    />

                    <Footer />

                </ScrollView>
                <FabButton />


            </View>
        );
    }
}