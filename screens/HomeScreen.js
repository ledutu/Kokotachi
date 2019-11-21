import React, { useState, useEffect } from 'react';
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
import { connect } from 'react-redux';
import store from '../store';
import { setPrimary, setActicles, resetAll } from '../actions/home';

import Banners from '../task/Banners';
import { type_utils } from '../utils/constants';
import EventInRow from '../components/EventComponents/EventInRow';
import { Container, Content } from 'native-base';

const mapStateToProps = state => ({
    homeProps: {
        banners: state.banners,
        topViewArticles: state.topViewArticles,
        jobArticles: state.jobArticles,
        apartmentArticles: state.apartmentArticles,
        lifestyleArticles: state.lifestyleArticles,
        simArticles: state.simArticles,
        cosmeArticles: state.cosmeArticles,
        churchs: state.churchs,
        events: state.events,
    }
});



const HomeScreen = connect(mapStateToProps)(function ({ navigation, homeProps, dispatch }) {
    const [state, setState] = useState({
        loading: homeProps.banners.length == 0
    });

    const { loading } = state;

    const toTop = () => {
        if (contentComponent) {
            contentComponent._root.scrollToPosition(0, 0)
        }
    }

    const getBanner = async () => {
        try {
            const [
                bannersResponse,
                topViewArticlesRes,
            ] = await Promise.all([
                fetchBanners(),
                fetchArticles({ order: 'reputation', per_page: 3 }),
            ]);

            dispatch(setPrimary({
                banners: bannersResponse.data._data.mobile_banners,
                topViewArticles: topViewArticlesRes.data._data.articles.data,
            }))

            setState({ ...state, loading: false, });

        }
        catch (error) {
            console.log("Get getPrimaryData error", error)
        }
    };

    const refresh = () => {
        dispatch(resetAll())
        setState({ ...state, loading: true })
        getData()
    };

    const logoPressed = () => {
        toTop()
        refresh()
    }

    useEffect(() => {
        getData();

        const storeState = store.getState();
        let language = storeState.language

        // Get new articles when switch language
        store.subscribe(() => {
            const storeState = store.getState();
            if (storeState.language != language) {
                language = storeState.language;
                refresh();
            }
        })

        // Navigation events
        navigation.addListener('willFocus', payload => {
            if (payload.action.params && payload.action.params.toTop === true) {
                toTop()
            }
        })
    }, []);

    const getData = async () => {
        getBanner()
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
            ])

            dispatch(setActicles({
                jobArticles: jobArticlesRes.data._data.articles.data,
                apartmentArticles: apartmentArticlesRes.data._data.articles.data,
                lifestyleArticles: lifestyleArticlesRes.data._data.articles.data,
                simArticles: simArticlesRes.data._data.articles.data,
                cosmeArticles: cosmeArticlesRes.data._data.articles.data,
                churchs: churchRes.data,
                events: eventRes.data._data.events.data
            }))
        } catch (error) {
            console.log("===================ERROR================")
            console.log(error)
        }
    }

    return (
        <Container style={styles.container}>

            <Header />

            <Content ref={c => contentComponent = c}>
                <Banners banners={homeProps.banners} />

                <DoubleRow
                    uri={type_utils.most_viewed.icon}
                    title={type_utils.most_viewed.display}
                    data={homeProps.topViewArticles}
                    readMore={{ order: 'reputation' }}
                />

                <DoubleRow
                    uri={type_utils.job.icon}
                    title={type_utils.job.display}
                    data={homeProps.jobArticles}
                    half
                    readMore={{ type: 'job' }}
                />

                <DoubleRow
                    uri={type_utils.apartment.icon}
                    title={type_utils.apartment.display}
                    data={homeProps.apartmentArticles}
                    onPress={this.handleOnPress}
                    half
                    readMore={{ type: 'apartment' }}
                />

                <DoubleRow
                    uri={type_utils.lifestyle.icon}
                    title={type_utils.lifestyle.display}
                    data={homeProps.lifestyleArticles}
                    onPress={this.handleOnPress}
                    half
                    readMore={{ type: 'lifestyle' }}
                />

                <DoubleRow
                    uri={type_utils.cosme.icon}
                    title={type_utils.cosme.display}
                    data={homeProps.cosmeArticles}
                    onPress={this.handleOnPress}
                    half
                    readMore={{ type: 'cosme' }}
                />

                <ChurchInRow
                    uri={type_utils.church.icon}
                    title={type_utils.church.display}
                    data={homeProps.churchs}
                />

                <EventInRow
                    uri={type_utils.event.icon}
                    title={type_utils.event.display}
                    data={homeProps.events}
                    screen="Event"
                    onPress={this.handleOnPress}
                />

                <Footer />

            </Content>

            <FabButton />

        </Container>
    );
});

HomeScreen.navigationOptions = {
    header: null,
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



export default HomeScreen;