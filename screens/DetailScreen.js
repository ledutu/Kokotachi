import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import Header from '../task/Header';
import DetailCard from '../components/detailMenuComponent/DetailCard';
import { JobData, ChurchData, CosmeticData, EventData, ApartmentData, SocialData } from "../data/Data";
import ChurchBox from '../components/ChurchBox';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
    };

    static navigationOptions = {
        header: null,
    };

    renderDetail = data => {
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

    handleOpenModel = id => {
        return (
            <ChurchBox
                address={ChurchData[0].address}
                english={ChurchData[0].english}
                vietnam={ChurchData[0].vietnam}
                japan={ChurchData[0].japan}
                normal={ChurchData[0].normal}
                sunday={ChurchData[0].sunday}
                volunteerActivity={ChurchData[0].volunteerActivity}
                detail={ChurchData[0].detail}
                source={ChurchData[0].source}
                title={ChurchData[0].title}
                display={this.state.display}
                close={this.handleCloseModel}
            />
        )
    }

    handleNavigation = id => {
        const data = this.props.navigation.getParam('data', '')
        if (data.title === "Nhà thờ") {
            this.setState({ display: true })
            console.log(this.state.display)
        }
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
                    this.setState({ display: true }, () => {
                        this.handleOpenModel(id)
                    })
                }
                break;
            case "Sự kiện":
                this.props.navigation.navigate('Event', { data: EventData[id] });
                break;
        }
    }

    render() {
        const data = this.props.navigation.getParam('data', '')
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.detailContainer}>
                    <DetailMenuHeader
                        uri={data.uri}
                        title={data.title}
                        postingNumber={30}
                        periodNumber={'1 - 10'}
                    />
                    {this.renderDetailCard()}
                </ScrollView>
                {this.handleOpenModel()}

            </View>
        );
    }
};

const styles = StyleSheet.create({
    detailContainer: {
        paddingHorizontal: 15,
        flex: 1,
    },

    container: {
        flex: 1,
    }
});
