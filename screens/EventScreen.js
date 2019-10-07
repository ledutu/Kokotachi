import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../task/Header';
import { ScrollView } from 'react-native-gesture-handler';
import DetailHeader from '../components/DetailHeader';
import Footer from '../task/Footer';
import ImagePoster from '../components/EventComponents/ImagePoster';
import InfoEvent from '../components/EventComponents/InfoEvent';
import OpenLinking from '../utils/OpenLinking';

export default class EventScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        header: null
    }

    handleLinking = () => {
        const data = this.props.navigation.getParam('data');
        OpenLinking(data.url[1])
    }

    render() {
        const data = this.props.navigation.getParam('data');

        return (
            <View style={styles.container}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.detailContainer}>
                        <DetailHeader
                            button={data.button}
                            title={data.title}
                            timePosting={data.datePosting}
                        />
                        <ImagePoster
                            source={{ uri: data.image }}
                            day={data.day}
                            period={data.period}
                            begin={data.begin}
                            registerPeopleNumber={data.registerPeopleNumber}
                        />
                        <InfoEvent
                            nameCost={data.nameCost}
                            totalCost={data.cost}
                            paymentMethod={data.paymentMethod}
                            registerTime={data.registerTime}
                            registerStoppingTime={data.registerStoppingTime}
                            place={data.place}
                            address={data.address}
                            ageLimited={data.ageLimited}
                            url={data.url[0]}
                            hoster={data.hoster}
                            eventID={data.eventID}
                        />
                        <Text style={styles.detailTitleText}>Thông tin chi tiết</Text>
                        <Text style={styles.commitment}>Thông tin đăng trong bài viết lấy từ nguồn dữ liệu:
                            <Text
                                style={{ color: '#007bff' }}
                                onPress={this.handleLinking}
                            >
                                { data.url[1]}
                            </Text> {'\n'}
                            Và có thể thay đổi theo từng thời điểm.
                        </Text>
                        <Text style={styles.infoDetail}>{data.detail}</Text>
                    </View>
                    <Footer />
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commitment: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
        marginBottom: 10
    },
    detailContainer: {
        paddingHorizontal: 15
    },
    detailTitleText: {
        fontSize: 36,
        color: '#FFF',
        backgroundColor: '#888',
        padding: 10,
        textAlign: 'center',
        marginBottom: 10,
        textTransform: "uppercase",
        fontFamily: 'inherit',
        fontWeight: '500'
    },
    infoDetail: {
        fontSize: 18,
        color: '#212529',
        marginBottom: 70
    }
});
