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
import MenuModal from '../components/detailMenuComponent/MenuModal';



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

    dismissRender = () => {
        this.setState({
            display: false,
        })
    };

    handleOpenMenu = () => {
        const { display } = this.state;
        if (display === true) {
            this.setState({ display: false })
        }

        else {
            this.setState({ display: true })
        }
    }

    renderMenu = () => {
        const { display } = this.state;
        if (display) {
            return (
                <View style={styles.fullScreen}>
                    <ScrollView>
                        {
                            LogoImages.map(item => {
                                return (
                                    <MenuModal
                                        key={item.id}
                                        title={item.title}
                                        uri={item.uri}
                                        onPress={this.handleOnPressMenu}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                </View>
            )
        };

        return null;

    };

    handleOnPressMenu = (title, uri) => {
        this.props.navigation.navigate('Detail', { data: { title, uri } });
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header onPress={this.handleOpenMenu} />

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
                {this.renderMenu()}
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