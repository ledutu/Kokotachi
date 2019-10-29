import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import Header from '../task/Header';
import DetailCard from '../components/detailMenuComponent/DetailCard';
import { JobData, ChurchData, CosmeticData, EventData, ApartmentData, SocialData } from "../data/Data";
import ChurchBox from '../components/church/ChurchBox';
import RefMostPosting from '../components/detailMenuComponent/RefMostPosting';
import Footer from '../task/Footer';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            selectedId: 0,
            postingNumber: 30,
            periodNumber: '1 - 10'
        };
    };

    static navigationOptions = {
        header: null,
    };

    renderDetail = data => {
        if (data === null) return;


        return (
            data.map(item => {
                return (
                    <DetailCard
                        key={item.id}
                        title={item.title}
                        uri={item.image}
                        date={item.datePosting}
                        likeCounting={item.likeCounting}
                        commentCounting={item.commentCounting}
                        id={item.id}
                        onPress={this.handleNavigation}
                    />
                )
            })
        )
    }

    //List of screen
    renderDetailCard() {
        const data = this.props.navigation.getParam('data', '')
        switch (data.title) {
            case "Công việc":
                return (
                    this.renderDetail(JobData)
                );
            case "Căn hộ":
                return (
                    this.renderDetail(ApartmentData)
                );
            case "Mỹ phẩm":
                return (
                    this.renderDetail(CosmeticData)
                );
            case "Xã hội":
                return (
                    this.renderDetail(SocialData)
                );
            case "Nhà thờ":
                return (
                    this.renderDetail(ChurchData)
                );
            case "Sự kiện":
                return (
                    this.renderDetail(EventData)
                );
            default:
                return (
                    alert('Thư mục này vẫn chưa có bài viết')
                )
        }


    };

    handleCloseModel = () => {
        this.setState({
            display: false
        })
    };

    //open model church
    handleOpenModel = id => {

        return (
            <ChurchBox
                address={ChurchData[id].address}
                english={ChurchData[id].english}
                vietnam={ChurchData[id].vietnam}
                japan={ChurchData[id].japan}
                normal={ChurchData[id].normal}
                sunday={ChurchData[id].sunday}
                volunteerActivity={ChurchData[id].volunteerActivity}
                detail={ChurchData[id].detail}
                source={ChurchData[id].source}
                title={ChurchData[id].title}
                display={this.state.display}
                close={this.handleCloseModel}
            />
        )
    }

    //navigation to another screen
    handleNavigation = id => {
        const data = this.props.navigation.getParam('data', '')
        switch (data.title) {
            case "Công việc":
                this.props.navigation.navigate('Job', { data: JobData[id] });
                break;
            case "Căn hộ":
                this.props.navigation.navigate('Apartment', { data: ApartmentData[id] });
                break;
            case "Mỹ phẩm":
                this.props.navigation.navigate('Cosmetic', { data: CosmeticData[id] });
                break;
            case "Xã hội":
                this.props.navigation.navigate('Cosmetic', { data: SocialData[id] });
                break;
            case "Nhà thờ":
                if (data.title === "Nhà thờ") {
                    this.setState({
                        display: true,
                        selectedId: id,
                    }, () => {
                        this.handleOpenModel(id)
                    })
                }
                break;
            case "Sự kiện":
                this.props.navigation.navigate('Event', { data: EventData[id] });
                break;
            default:
                break;
        }
    };

    //list reference of screen
    renderRef() {
        const data = this.props.navigation.getParam('data', '')
        switch (data.title) {
            case "Công việc":
                return (
                    this.renderRefDetail(JobData)
                );
            case "Căn hộ":
                return (
                    this.renderRefDetail(ApartmentData)
                );
            case "Mỹ phẩm":
                return (
                    this.renderRefDetail(CosmeticData)
                );
            case "Xã hội":
                return (
                    this.renderRefDetail(SocialData)
                );
            case "Nhà thờ":
                return (
                    this.renderRefDetail(ChurchData)
                );
            case "Sự kiện":
                return (
                    this.renderRefDetail(EventData)
                );
            default:
                return (
                    alert('Thư mục này vẫn chưa có bài viết')
                )
        }
    };

    renderRefDetail = data => {
        if (data === null) return;
        return (
            data.map(item => {
                return (
                    <RefMostPosting
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        uri={item.image}
                        onPress={this.handleNavigation}
                        date={item.datePosting}
                    />
                )
            })
        )
    }

    render() {
        const data = this.props.navigation.getParam('data', '');
        const { selectedId, periodNumber, postingNumber } = this.state;
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.detailContainer}>
                    <View style={{ paddingHorizontal: 15, }}>
                        <DetailMenuHeader
                            uri={data.uri}
                            title={data.title}
                            postingNumber={postingNumber}
                            periodNumber={periodNumber}
                            isTitle
                        />
                        {this.renderDetailCard()}
                        <DetailMenuHeader
                            postingNumber={postingNumber}
                            periodNumber={periodNumber}
                        />
                        <Text style={styles.text}>Bài viết đọc nhiều</Text>
                        <View style={{ marginBottom: 54 }}>
                            {this.renderRef()}
                        </View>
                    </View>
                    <Footer />
                </ScrollView>
                {this.handleOpenModel(selectedId)}

            </View>
        );
    }
};

const styles = StyleSheet.create({
    detailContainer: {

        flex: 1,
    },

    container: {
        flex: 1,
    },

    text: {
        color: '#e73227',
        marginBottom: 27,
        fontSize: 27,
    }
});
