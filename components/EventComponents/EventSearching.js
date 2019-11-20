import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Icon, Picker } from 'native-base';
import DateTimePicker from "react-native-modal-datetime-picker";
import { RedButton, CustomPicker } from '../../utils/commons';
import { fetchEventTypes, fetchPrefectures } from '../../utils/api';

export default class EventSearching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: null,
            event_id: null,
            started_at: null,
            ended_at: null,
            prefecture_id: null,
            category_slug: null,
            isDateTimePickerVisible: false,
            objActiveTimePicker: 'started_at',
        };
    };


    staticData = {
        eventTypes: [],
        prefectures: [],
    };

    async componentDidMount() {
        await this.getEventTypes();
        await this.getPrefectures();
    }

    showDateTimePicker = objActiveTimePicker => {
        this.setState({
            ...this.state,
            objActiveTimePicker: objActiveTimePicker,
            isDateTimePickerVisible: true
        })
    };

    getEventTypes = async () => {
        try {
            const eventTypes = await fetchEventTypes();
            this.staticData.eventTypes = eventTypes.data._data.categories;
        }
        catch (e) {
            console.log(e)
        }
    };

    getPrefectures = async () => {
        try {
            const prefectures = await fetchPrefectures();
            this.staticData.prefectures = prefectures.data._data.prefectures;

        } catch (error) {
            console.log(error)
        }
    };

    hideDateTimePicker = () => {
        this.setState({
            ...this.state,
            isDateTimePickerVisible: false
        })
    };

    handleDatePicked = date => {
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

        const { search } = this.props;

        let query = {};

        for (const stateName in this.state) {
            if (this.state.hasOwnProperty(stateName)) {
                const value = this.state[stateName]
                if (value) {
                    query[stateName] = value;
                }
            }
        }

        console.log(query)

        search(page = 1, query);

    }

    render() {
        const { isVisible, close } = this.props;
        const {
            keyword,
            event_id,
            started_at,
            ended_at,
            prefecture_id,
            isDateTimePickerVisible,
            objActiveTimePicker,
            category_slug,
        } = this.state;

        const { prefectures, eventTypes } = this.staticData;

        return (
            <Modal
                isVisible={isVisible}
                animationOut="slideOutDown"
                onBackButtonPress={close}
                onBackdropPress={close}
                style={styles.modal}
                useNativeDriver={true}
                scrollHorizontal={false}
                children={true}
            >
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.eventFindingStyle}>Tìm kiếm sự kiện</Text>
                            <TouchableOpacity
                                onPress={close}>
                                <Icon name="close" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemForm}>
                            <Text style={styles.text}>Từ khóa</Text>
                            <TextInput style={styles.textInput} value={keyword} onChangeText={keyword => this.setState({ ...this.state, keyword })} />
                        </View>

                        <View style={styles.itemForm}>
                            <Text style={styles.text}>ID sự kiện</Text>
                            <TextInput style={styles.textInput} value={event_id} onChangeText={event_id => this.setState({ ...this.state, event_id })} />
                        </View>

                        <View style={styles.itemForm}>
                            <Text style={styles.text}>Ngày bắt đầu</Text>
                            <TouchableOpacity
                                style={styles.textInput}
                                onPress={() => this.showDateTimePicker('started_at')}>
                                <Text>{started_at ? started_at : ''}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemForm}>
                            <Text style={styles.text}>Ngày kết thúc</Text>
                            <TouchableOpacity
                                style={styles.textInput}
                                onPress={() => this.showDateTimePicker('ended_at')}>
                                <Text>{ended_at ? ended_at : ''}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginBottom: 10, marginTop: 20, }}>
                            <Text style={styles.text}>Tỉnh</Text>
                            <CustomPicker
                                placeholder={'Chọn tỉnh'}
                                selectedValue={prefecture_id}
                                onValueChange={prefecture_id => this.setState({ ...this.state, prefecture_id })}
                                placeholderStyle={{ color: "black", paddingLeft: 0 }}
                                textStyle={{ paddingLeft: 0, marginLeft: 0 }}
                            >
                                <Picker.Item key={-1} label={'Chọn tỉnh'} value="" />
                                {prefectures.map(prefecture => (
                                    <Picker.Item key={prefecture.id} label={prefecture.title} value={prefecture.id} />
                                ))}
                            </CustomPicker>
                        </View>

                        <View style={{ marginBottom: 10, }}>
                            <Text style={styles.text}>Loại sự kiện</Text>
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
                        </View>


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
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 20,
        bottom: -20,
        right: -20,
        left: -20,
        position: 'absolute'
    },
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

    eventFindingStyle: {
        color: '#e73227',
        marginBottom: 27,
        fontSize: 27,
        fontWeight: '500',
    },
    textInput: {
        color: '#495057',
        paddingVertical: 6.75,
        paddingHorizontal: 13.5,
        width: "100%",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 4,
    },

    text: {
        fontSize: 18,
        marginBottom: 9,
        color: '#212529',
    }
});
