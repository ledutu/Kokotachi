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

    handleOnPress = (title, uri) => {
        this.props.navigation.navigate('Detail', { data: { title, uri } });
    };

    render() {

        return (
            <View style={styles.container}>
                <Header changeOpacity={this.handleChangeOpacity} />

                <ScrollView>
                    <ImageSlider />
                    <Reader />
                    <DoubleRow
                        uri={LogoImages[0].uri}
                        title="Công việc"
                        data={JobData}
                        screen="Job"
                        onPress={this.handleOnPress}
                    />

                    <DoubleRow
                        uri={LogoImages[1].uri}
                        title="Căn hộ"
                        data={ApartmentData}
                        screen="Apartment"
                        onPress={this.handleOnPress}
                    />

                    <DoubleRow
                        uri={LogoImages[2].uri}
                        title="Xã hội"
                        data={SocialData}
                        screen="Cosmetic"
                        onPress={this.handleOnPress}
                    />

                    <DoubleRow
                        uri={LogoImages[3].uri}
                        title="Mỹ phẩm"
                        data={CosmeticData}
                        screen="Cosmetic"
                        onPress={this.handleOnPress}
                    />

                    <ChurchInRow
                        icon={{ uri: LogoImages[4].uri }}
                        title="Nhà thờ"
                        data={ChurchData}
                    />

                    <DoubleRow
                        uri={LogoImages[5].uri}
                        title="Sự kiện"
                        data={EventData}
                        screen="Event"
                        onPress={this.handleOnPress}
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
    },

    container: {
        flex: 1,
        // backgroundColor: 'black',
    }
});