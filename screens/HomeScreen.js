import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../task/Header';
import Footer from '../task/Footer';
import FabButton from '../components/FabButton';
import DoubleRow from '../components/DoubleRow';
import ChurchInRow from '../components/church/ChurchInRow';
import {
    fetchArticles,
    fetchBanners,
    fetchTopChurch,
    fetchEvents,
    fetchContentArticle
} from '../utils/api';

import Banners from '../task/Banners';
import { type_utils } from '../utils/constants';
import EventInRow from '../components/EventComponents/EventInRow';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            topViewArticlesRes: [],
            jobArticlesRes: [],
            apartmentArticlesRes: [],
            lifestyleArticlesRes: [],
            simArticlesRes: [],
            cosmeArticlesRes: [],
            churchRes: [],
            eventRes: [],
        };
    };

    async componentDidMount() {
        this.getBanner();

        try {
            const [
                jobArticlesRes,
                apartmentArticlesRes,
                lifestyleArticlesRes,
                simArticlesRes,
                cosmeArticlesRes,
                churchRes,
                eventRes
            ] = await Promise.all([
                fetchArticles({ type: 'job', per_page: 4 }),
                fetchArticles({ type: 'apartment', per_page: 4 }),
                fetchArticles({ type: 'lifestyle', per_page: 4 }),
                fetchArticles({ type: 'sim', per_page: 4 }),
                fetchArticles({ type: 'cosme', per_page: 4 }),
                fetchTopChurch(),
                fetchEvents({ per_page: 4 })
            ]);

            this.setState({
                jobArticlesRes: jobArticlesRes.data._data.articles.data,
                apartmentArticlesRes: apartmentArticlesRes.data._data.articles.data,
                lifestyleArticlesRes: lifestyleArticlesRes.data._data.articles.data,
                simArticlesRes: simArticlesRes.data._data.articles.data,
                cosmeArticlesRes: cosmeArticlesRes.data._data.articles.data,
                churchRes: churchRes.data,
                eventRes: eventRes.data._data.events.data,
            })
        }
        catch (e) {
            console.log(e);
        }
    };

    getBanner = async () => {
        try {
            const [
                bannersResponse,
                topViewArticlesRes,
            ] = await Promise.all([
                fetchBanners(),
                fetchArticles({ order: 'reputation', per_page: 3 }),
            ]);

            this.setState({
                banners: bannersResponse.data._data.mobile_banners,
                topViewArticlesRes: topViewArticlesRes.data._data.articles.data,
            });

        }
        catch (error) {
            console.log(error);
        }
    }

    static navigationOptions = {
        header: null,
    };

    handleOnPress = ({ type }) => {
        console.log(type);
    };

    render() {
        const {
            banners,
            topViewArticlesRes,
            jobArticlesRes,
            apartmentArticlesRes,
            lifestyleArticlesRes,
            cosmeArticlesRes,
            churchRes,
            eventRes,
        } = this.state;

        return (
            <View style={styles.container}>

                <Header />

                <ScrollView>
                    {/* <Banners banners={banners} /> */}

                    {/* <DoubleRow
                        uri={type_utils.most_viewed.icon}
                        title={type_utils.most_viewed.display}
                        data={topViewArticlesRes}
                        readMore={{ order: 'reputation' }}
                    />

                    <DoubleRow
                        uri={type_utils.job.icon}
                        title={type_utils.job.display}
                        data={jobArticlesRes}
                        half
                        readMore={{ type: 'job' }}
                    />

                    <DoubleRow
                        uri={type_utils.apartment.icon}
                        title={type_utils.apartment.display}
                        data={apartmentArticlesRes}
                        onPress={this.handleOnPress}
                        half
                        readMore={{ type: 'apartment' }}
                    />

                    <DoubleRow
                        uri={type_utils.lifestyle.icon}
                        title={type_utils.lifestyle.display}
                        data={lifestyleArticlesRes}
                        onPress={this.handleOnPress}
                        half
                        readMore={{ type: 'lifestyle' }}
                    />

                    <DoubleRow
                        uri={type_utils.cosme.icon}
                        title={type_utils.cosme.display}
                        data={cosmeArticlesRes}
                        onPress={this.handleOnPress}
                        half
                        readMore={{ type: 'cosme' }}
                    /> */}

                    <ChurchInRow
                        uri={type_utils.church.icon}
                        title={type_utils.church.display}
                        data={churchRes}
                    />

                    <EventInRow
                        uri={type_utils.event.icon}
                        title={type_utils.event.display}
                        data={eventRes}
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
        padding: 20,
    },
    fullScreenText: {
    },

    container: {
        flex: 1,
        // backgroundColor: 'black',
    }
});