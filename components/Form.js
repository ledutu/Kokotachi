import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from "native-base";
import CustomPicker from './CustomPicker';
import PropTypes from 'prop-types';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Nam',
            arrDay: [],
            arrMonth: [],
            arrYear: [],
            selected: '1',
            text: '',
        };
    }


    static propTypes = {
        title: PropTypes.string.isRequired,
        star: PropTypes.bool,
        placeholder: PropTypes.string,
        isInput: PropTypes.bool,
        isGender: PropTypes.bool,
        isThreeDropDown: PropTypes.bool,
        isTwoDropDown: PropTypes.bool,
        isOneDropDown: PropTypes.bool,
        secureTextEntry: PropTypes.bool,
        province: PropTypes.string,
        city: PropTypes.string,
        section: PropTypes.string,
        list: PropTypes.array,
        list1: PropTypes.array,
        list2: PropTypes.array
    }

    onChangeText = text => {
        this.setState({
            text: text
        })
    }

    componentDidMount() {
        let arrDay = [];
        let arrMonth = [];
        let arrYear = [];
        for (let i = 1; i <= 31; i++) {
            arrDay = arrDay.concat(i + "")
        }

        for (let i = 1; i <= 12; i++) {
            arrMonth = arrMonth.concat(i + "")
        }

        for (let i = 1950; i <= 2019; i++) {
            arrYear = arrYear.concat(i + "")
        }
        this.setState({
            arrDay: arrDay,
            arrMonth: arrMonth,
            arrYear: arrYear,
        })
    };



    render() {
        const {
            title,
            star,
            placeholder,
            isInput,
            isGender,
            isThreeDropDown,
            secureTextEntry,
            isTwoDropDown,
            isOneDropDown,
            province,
            city,
            section,
            list,
            list1,
            list2,
        } = this.props;

        {
            return (
                <View style={{ marginBottom: 16 }}>
                    <Text style={styles.text}>{title} {star ? <Text style={{ color: 'red' }}>*</Text> : ""}</Text>
                    {isInput && (
                        <View>
                            <TextInput
                                placeholder={placeholder}
                                style={styles.textInput}
                                onChangeText={this.onChangeText}
                                value={this.state.text}
                                secureTextEntry={secureTextEntry}
                            />
                        </View>
                    )}

                    {isGender && (
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton.Group
                                    onValueChange={value => this.setState({ value })}
                                    value={this.state.value}
                                >
                                    <View style={styles.radioButton}>
                                        <RadioButton value="first" />
                                        <Text style={[styles.text, { paddingRight: 10 }]}>Nam</Text>
                                    </View>
                                    <View style={styles.radioButton}>
                                        <RadioButton value="second" />
                                        <Text>Nữ</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                    )}

                    {isThreeDropDown && (
                        <View style={styles.threeDropDownContainer}>
                            <CustomPicker
                                defaultList="Chọn ngày"
                                list={this.state.arrDay}
                                flex={0.333333}
                            />
                            <CustomPicker
                                defaultList="Chọn tháng"
                                list={this.state.arrMonth}
                                flex={0.333333}
                            />
                            <CustomPicker
                                defaultList="Chọn năm"
                                list={this.state.arrYear}
                                flex={0.333333}
                            />

                        </View>

                    )}

                    {isTwoDropDown && (
                        <View style={styles.threeDropDownContainer}>
                            <CustomPicker
                                defaultList={province}
                                list={list1}
                                flex={0.5}
                            />
                            <CustomPicker
                                defaultList={city}
                                list={list2}
                                flex={0.5}
                            />

                        </View>
                    )}

                    {isOneDropDown && (
                        <View style={styles.threeDropDownContainer}>
                            <CustomPicker
                                defaultList={section}
                                list={list}
                                flex={1}
                            />

                        </View>
                    )}

                </View>
            );

        }

    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#212529',
        paddingVertical: 7,
    },

    textInput: {
        paddingVertical: 6.75,
        paddingHorizontal: 13.5,
        fontSize: 17,
        color: '#495057',
        fontWeight: '400',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5
    },

    radioButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    threeDropDownContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


});
