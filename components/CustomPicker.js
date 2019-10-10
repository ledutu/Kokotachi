import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from "native-base";
import PropTypes from 'prop-types';

export default class CustomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'key0'
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value,
        });

    }

    static propTypes = {
        list: PropTypes.array.isRequired,
        defaultList: PropTypes.string.isRequired,
        flex: PropTypes.number,
    }

    render() {
        const {list, defaultList, flex,} = this.props
        return (
            <View style={[styles.container, {margin: 5, flex: flex}]}>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label={defaultList} value="key0"/>
                    {
                        list.map(item => {
                            return (
                                <Picker.Item label={item} value={`key${item}`} key={item} />
                            )
                        })
                    }
                </Picker>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        color: '#495057',
        fontWeight: '400',
        borderWidth: 1,
        borderColor: '#ced4da',
        fontSize: 18,
        borderRadius: 5,
        height: 42.5,
        textAlign: 'center'
    }
})
