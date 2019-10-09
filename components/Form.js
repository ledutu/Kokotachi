import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from "native-base";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Nam',
            selected: 'key0',
            arrDay: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
                '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    };

    render() {
        const {
            title,
            star,
            placeholder,
            isInput,
            isGender,
            isThreeDropDown
        } = this.props;

        {
            return (
                <View style={{ marginBottom: 16 }}>
                    <Text style={styles.text}>{title} {star ? <Text style={{ color: 'red' }}>*</Text> : ""}</Text>
                    {isInput && (
                        <TextInput
                            placeholder={placeholder}
                            style={styles.textInput}
                        />
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
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.dateContainer}>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                    style={{ fontSize: 30 }}
                                >
                                    <Picker.Item label="Chọn ngày" value="key0" style={{ fontSize: 25 }} />
                                    {
                                        this.state.arrDay.map(item => {
                                            return (
                                                <Picker.Item label={item} value={`key${item}`} key={item} />
                                            )
                                        })
                                    }
                                </Picker>
                            </View>
                            <View style={styles.dateContainer}>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                    style={{ fontSize: 30 }}
                                >
                                    <Picker.Item label="Chọn ngày" value="key0" style={{ fontSize: 25 }} />
                                    {
                                        this.state.arrDay.map(item => {
                                            return (
                                                <Picker.Item label={item} value={`key${item}`} key={item} />
                                            )
                                        })
                                    }
                                </Picker>
                            </View>
                            <View style={styles.dateContainer}>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="Chọn ngày" value="key0" style={{ fontSize: 25 }} />
                                    {
                                        this.state.arrDay.map(item => {
                                            return (
                                                <Picker.Item label={item} value={`key${item}`} key={item} />
                                            )
                                        })
                                    }
                                </Picker>
                            </View>

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
    dateContainer: {
        borderColor: 'red',
        borderWidth: 2,
    },


});
