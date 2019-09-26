import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../task/Header';
import ImageSlider from '../task/ImageSlider';
import Reader from '../task/Reader';
import { JobData, ChurchData, CosmeticData, EventData, ApartmentData, SocialData } from "../data/Data";
import Footer from '../task/Footer';
import FabButton from '../components/FabButton';
import DoubleRow from '../components/DoubleRow';

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
                    {/* <ImageSlider />
                    <Reader /> */}
                    <DoubleRow
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-apartment.png' }}
                        title="Căn hộ"
                        data={JobData}
                        screen="Job"
                    />

                    {/* <DoubleRow
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-apartment.png' }}
                        title="Căn hộ"
                        data={ApartmentData}
                    />

                    <DoubleRow
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-lifestyle.png' }}
                        title="Xã hội"
                        data={SocialData}
                    />

                    <DoubleRow
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-cosme.png' }}
                        title="Mỹ phẩm"
                        data={CosmeticData}
                    />

                    <DoubleRow
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-church.png' }}
                        title="Nhà thờ"
                        data={ChurchData}
                    />

                    <DoubleRow
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-event.png' }}
                        title="Sự kiện"
                        data={EventData}
                    />

                    <Footer /> */}

                </ScrollView>
                <FabButton />


            </View>
        );
    }
}