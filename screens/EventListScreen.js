import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import Header from '../task/Header';
import { Container, Content, Icon, Card, CardItem, Body, ListItem, Button, Picker } from 'native-base';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import { uppercase, RedButton, CustomPicker } from '../utils/commons';
import { type_utils, width } from '../utils/constants';
import PropTypes from 'prop-types';
import { imageSource } from '../utils/pureFunction';
import { fetchEvents } from '../utils/api';
import OpenLinking from '../utils/OpenLinking';
import Modal from 'react-native-modal';
import Footer from '../task/Footer';
import ScalableImage from 'react-native-scalable-image';
import { format, parseISO } from 'date-fns';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class EventListScreen extends Component {
    state = {
        eventList: [],
        loading: false,
        error: false,
        isShowFormSearch: false,
        searchFormOpening: false,
        noQuery: true,
        paginated: 0,
        loadMoreDisabled: false,
        last: false,
        searchFormOpen: false,
        keyword: null,
        event_id: null,
        started_at: null,
        ended_at: null,
        category_slug: null,
        isDateTimePickerVisible: false,
        objActiveTimePicker: 'started_at'
    };

    static navigationOptions = {
        header: null,
    };

    contentComponent = null;

    renderTop = () => {
        const { eventList } = this.state;
        return (
            <DetailMenuHeader
                isTitle
                title={uppercase(type_utils.event.display)}
                uri={type_utils.event.icon}
                postingNumber={eventList.length}
            />
        )
    };

    getEvent = async (page = this.state.paginated, query = null) => {
        const { paginated } = this.state;
        this.setState({ paginated: paginated + 1, loadMoreDisabled: true, loading: true }, async () => {
            const { navigation } = this.props;

            const category_slug = navigation.getParam('slug');
            const title = navigation.getParam('title');
            const { eventList } = this.state;

            try {
                const responses = await fetchEvents({ category_slug, page }, query);
                console.log(responses);
                const events = responses.data._data.events.data

                this.setState({
                    loading: false,
                    error: false,
                    last: responses.data._data.events.data.length === 0 ? true : false,
                    eventList: page === 1 ? events :
                        [...eventList, ...events],
                    isShowFormSearch: responses.data._data.isShowFormSearch,
                    noQuery: query ? false : true,
                    loadMoreDisabled: false,
                });

                if (contentComponent && page == 1) {
                    setTimeout(() => {
                        contentComponent._root.scrollToPosition(0, 0)
                    })
                };

            } catch (error) {
                console.log(error)
                this.setState({
                    error: true,
                    loading: false,
                    loadMoreDisabled: false,
                })
            }
        })
    };

    renderNext = async () => {
        await this.getEvent();
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Event', { data: item })} activeOpacity={0.8}>
                <Card style={{ paddingVertical: 27 }}>
                    <CardItem>
                        <Body>
                            <ScalableImage source={imageSource(item.image_path)} width={(width - 35)} />
                            <Text style={styles.title}>{item.article.title}</Text>

                            {item.categories &&
                                <View style={{ flexDirection: 'row', paddingVertical: 3.6 }}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={[{ alignSelf: 'flex-start' }, styles.eventType]}>Loại sự kiện</Text>
                                    </View>

                                    <View style={{ color: 'rgba(51, 51, 51, 0.3)', flex: 5 }}>
                                        {item.categories.map((one) => {
                                            let { title, slug, type } = one;

                                            return (
                                                <TouchableOpacity
                                                    key={one.id}
                                                    style={{ marginBottom: 10 }}
                                                    onPress={() => {
                                                        pushNavigate('EventList', { title, type, slug })
                                                    }}>
                                                    <Text key={one.id} style={{ textDecorationLine: 'underline' }}>{title}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </View>
                            }

                            <View style={{ flexDirection: 'row', paddingVertical: 3.6 }}>
                                <Text style={[{ marginRight: 10, flex: 3 }, styles.eventType]}>Ngày bắt đầu</Text>
                                <Text style={{ color: 'rgba(51, 51, 51, 0.3)', flex: 5 }}>{format(parseISO(item.started_at), 'dd/MM/yyyy')}</Text>
                            </View>
                            {item.prefecture && (
                                <View style={{ flexDirection: 'row', paddingVertical: 3.6 }}>
                                    <Text style={[{ marginRight: 10, flex: 3 }, styles.eventType]}>Tỉnh</Text>
                                    <Text style={{ color: 'rgba(51, 51, 51, 0.3)', flex: 5 }}>{item.prefecture.prefecture_name_english}</Text>
                                </View>
                            )}

                            <View style={{ paddingTop: 0, paddingVertical: 9 }}>
                                <Text note style={styles.eventType}>{item.summary}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    };

    renderFooter = () => {
        const { loadMoreDisabled, loading, error, last } = this.state;
        return (
            <View>
                {loading && <ActivityIndicator style={styles.center} />}

                {error && (
                    <View style={styles.center}>
                        <Text>Error</Text>
                    </View>
                )}

                {last && (
                    <View style={[styles.center, { marginVertical: 10 }]}>
                        <Text>Bạn đã ở cuối bài viết</Text>
                    </View>
                )}

                {!loading && !error && !last && (
                    <View style={[{ width: '100%', marginVertical: 10, }, styles.center]}>
                        <Button disabled={loadMoreDisabled} rounded bordered small onPress={this.renderNext} style={{ width: '100%' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>Xem thêm</Text>
                        </Button>
                    </View>
                )}

                <Footer />
            </View>
        )
    }

    async componentDidMount() {
        await this.getEvent();
    };

    openSearchForm = () => {
        this.setState({
            searchFormOpening: true,
        })
    };

    handleCloseModal = () => {
        this.setState({
            searchFormOpening: false,
        })
    };

    showDateTimePicker = objActiveTimePicker => {
        this.setState({
            ...this.state,
            objActiveTimePicker: objActiveTimePicker,
            isDateTimePickerVisible: true
        })
    };

    hideDateTimePicker = () => {
        this.setState({
            ...this.state,
            isDateTimePickerVisible: false
        })
    };

    handleDatePicked = (date) => {
        let dateFormated = new Date(date).toISOString().slice(0, 10).replace('T', ' ');
        let key = this.state.objActiveTimePicker;

        let newState = {
            ...this.state,
            isDateTimePickerVisible: false,
        };

        if (key == 'started_at') {
            newState.started_at = dateFormated;
        } else {
            newState.ended_at = dateFormated;
        }

        this.setState(newState);
    };

    doSearch = () => {
        let query = {}
        for (const state_name in this.state) {
            if (this.state.hasOwnProperty(state_name)) {
                const value = this.state[state_name]
                if (value) {
                    query[state_name] = value
                }
            }
        }
        this.getEvent(page = 1, query);


    }

    render() {
        const { eventList, isShowFormSearch, searchFormOpening, started_at, ended_at, category_slug, isDateTimePickerVisible } = this.state;
        // console.log(eventList);

        return (
            <Container>
                <Content
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flex: 1, }}
                    ref={c => contentComponent = c}
                >
                    <Header />

                    {eventList.length === 0 && (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>Chưa có bài viết nào được lưu</Text>
                        </View>
                    )}

                    {eventList && (
                        <FlatList
                            data={eventList}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ListHeaderComponent={eventList.length > 0 ? this.renderTop : null}
                            ListFooterComponent={eventList.length > 0 ? this.renderFooter : null}
                        />
                    )}


                    {/* Open Search form */}
                    {isShowFormSearch && (
                        <>
                            <RedButton rounded style={styles.searchButton} onPress={this.openSearchForm}>
                                <Icon type="FontAwesome" name="search" />
                            </RedButton>

                            <Modal
                                isVisible={searchFormOpening}
                                animationOut="slideOutDown"
                                onBackButtonPress={this.handleCloseModal}
                                onBackdropPress={this.handleCloseModal}
                                style={styles.modal}
                                useNativeDriver={true}
                                scrollHorizontal={false}
                                children={true}
                            >
                                <View style={styles.container}>
                                    <ScrollView>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>Tìm kiếm sự kiện</Text>
                                            <TouchableOpacity
                                                onPress={this.handleCloseModal}>
                                                <Icon name="close" />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.itemForm}>
                                            <Text>Từ khóa</Text>
                                            <TextInput style={styles.textInput} value={this.state.keyword} onChangeText={keyword => this.setState({ ...this.state, keyword })} />
                                        </View>

                                        <View style={styles.itemForm}>
                                            <Text>ID sự kiện</Text>
                                            <TextInput style={styles.textInput} value={this.state.event_id} onChangeText={event_id => this.setState({ ...this.state, event_id })} />
                                        </View>

                                        <View style={styles.itemForm}>
                                            <Text>Ngày bắt đầu</Text>
                                            <TouchableOpacity
                                                style={styles.textInput}
                                                onPress={() => this.showDateTimePicker('started_at')}>
                                                <Text>{started_at ? started_at : ''}</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.itemForm}>
                                            <Text>Ngày kết thúc</Text>
                                            <TouchableOpacity
                                                style={styles.textInput}
                                                onPress={() => this.showDateTimePicker('ended_at')}>
                                                <Text>{ended_at ? ended_at : ''}</Text>
                                            </TouchableOpacity>
                                        </View>

                                        {/* <View style={{ marginBottom: 10, marginTop: 20, alignItems: 'flex-start' }}>
                                            <CustomPicker
                                                placeholder={'Chọn tỉnh'}
                                                selectedValue={category_slug}
                                                onValueChange={category_slug => this.setState({ ...this.state, category_slug })}
                                                placeholderStyle={{ color: "black", paddingLeft: 0 }}
                                                textStyle={{ paddingLeft: 0, marginLeft: 0 }}
                                            >
                                                <Picker.Item key={1} label={'Choose prefecture'} value="" />
                                                {prefectures.map(prefecture => (
                                                    <Picker.Item key={prefecture.id} label={prefecture.title} value={prefecture.id} />
                                                ))}
                                            </CustomPicker>
                                        </View>

                                        Type event
                                        <View style={{ marginBottom: 10, alignItems: 'flex-start' }}>
                                            <CustomPicker
                                                placeholder={'Choose type event'}
                                                selectedValue={category_slug}
                                                onValueChange={category_slug => this.setState({ ...this.state, category_slug })}
                                                placeholderStyle={{ color: "black", paddingLeft: 0 }}
                                                textStyle={{ paddingLeft: 0, marginLeft: 0 }}
                                            >
                                                <Picker.Item key={-1} label={'Choose type event'} value="" />
                                                {eventTypes.map(item => (
                                                    <Picker.Item key={item.slug} label={item.title} value={item.slug} />
                                                ))}
                                            </CustomPicker>
                                        </View> */}


                                        <View style={styles.flexRowCenter}>
                                            <RedButton rounded onPress={this.doSearch}>
                                                <Text style={{ color: '#ffffff', textAlign: 'center', width: '100%' }}>Search</Text>
                                            </RedButton>

                                        </View>

                                        <DateTimePicker
                                            isVisible={isDateTimePickerVisible}
                                            onConfirm={this.handleDatePicked}
                                            onCancel={this.hideDateTimePicker}
                                        />
                                    </ScrollView>
                                </View>
                            </Modal>
                        </>
                    )}


                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22.5,
        fontWeight: '500',
        marginVertical: 18,
        color: '#333333',
    },

    eventType: {
        fontSize: 16.2,
        color: '#333333',
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
    },

    container: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 20,
        bottom: -20,
        right: -20,
        left: -20,
        position: 'absolute'
    },


});


