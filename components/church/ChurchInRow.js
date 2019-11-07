import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from '../SectionItem';
import DoubleItemInRow from '../DoubleItemInRow';
import ChurchItem from './ChurchItem';
import PropTypes from 'prop-types';

export default class ChurchInRow extends Component {

    static propTypes = {
        uri: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        onPress: PropTypes.func,
    }

    render() {
        const { data, onPress, uri, title, } = this.props;
        const centerData = Math.floor(this.props.data.length / 2);
        return (
            <View style={styles.container}>
                <SectionItem
                    uri={uri}
                    title={title}
                    button="Xem thêm"
                    onPress={() => onPress(title, uri)}
                />

                <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-around', }}>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            data.slice(0, centerData).map(item => {
                                return (
                                    <ChurchItem
                                        key={item.id}
                                        data={item}
                                    />
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            data.slice(centerData).map(item => {
                                return (
                                    <ChurchItem
                                        key={item.id}
                                        data={item}
                                    />
                                )
                            })
                        }
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 60,
    },

})