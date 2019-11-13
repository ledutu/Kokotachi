import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../task/Header';
import DetailHeader from '../components/detail/DetailHeader';
import Footer from '../task/Footer';
import ImagePoster from '../components/EventComponents/ImagePoster';
import InfoEvent from '../components/EventComponents/InfoEvent';
import OpenLinking from '../utils/OpenLinking';
import { type_utils, width } from '../utils/constants';
import { imageSource } from '../utils/pureFunction';
import { format } from 'date-fns'
import AutoHeightWebView from '../utils/webview-autoheight';

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
        OpenLinking(data.event_url);
    }

    render() {
        const data = this.props.navigation.getParam('data');
        const ownerName = data.event_owners ? data.event_owners[0].name : '';
        console.log(data);

        return (
            <View style={styles.container}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.detailContainer}>
                        <DetailHeader
                            button={type_utils.event.display}
                            title={data.article.title}
                        />
                        <ImagePoster
                            source={imageSource(data.image_path)}
                            day={format(new Date(data.started_at), 'yyyy/MM/dd')}
                            start={format(new Date(data.started_at), 'HH:mm')}
                            end={format(new Date(data.ended_at), 'HH:mm')}
                            timeBegining={format(new Date(data.ended_at), 'HH:mm')}
                            accepted={data.accepted}
                            capacity={data.capacity}
                        />
                        <InfoEvent
                            nameCost={data.event_tickets[0].name}
                            totalCost={data.event_tickets[0].price}
                            paymentMethod={data.payment_types[0].name}
                            registerTime={data.entry_started_at? format(new Date(data.entry_started_at), 'HH:mm'): "From the date of posting job postings"}
                            registerStoppingTime={format(new Date(data.entry_ended_at), 'HH:mm')}
                            place={data.place}
                            address={data.address}
                            ageLimited={'Age Limit 20-50'}
                            url={data.url}
                            hoster={ownerName}
                            eventID={data.event_id}
                        />
                        <Text style={styles.detailTitleText}>Thông tin chi tiết</Text>
                        <Text style={styles.commitment}>Thông tin đăng trong bài viết lấy từ nguồn dữ liệu:
                            <Text
                                style={{ color: '#007bff' }}
                                onPress={this.handleLinking}
                            >
                                {data.event_url}
                            </Text> {'\n'}
                            Và có thể thay đổi theo từng thời điểm.
                        </Text>



                    </View>
                    <AutoHeightWebView
                            originWhitelist={['*']}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            customStyle={`
                                p {
                                    font-size: 18px;
                                }
                                p, h1, h2, h3, h4, h5, h6 {
                                    user-select: none;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                }
                                img {
                                    margin-left: -10px;
                                    max-width: ${width};
                                    height: auto;
                                    display: block;
                                }
                            `}
                            source={{ html: data.article.content }}
                        />
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
