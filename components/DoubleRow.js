import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from './SectionItem';
import DoubleItemInRow from './DoubleItemInRow';
import PropTypes from 'prop-types';

export default class DoubleRow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        screen: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
        onPress: PropTypes.func,
    };

    render() {
        const { screen, data, onPress, uri, title, } = this.props;
        const centerData = Math.floor(data.length / 2);

        return (
            <View style={styles.container}>
                <SectionItem
                    uri={{ uri }}
                    title={title}
                    button="Xem thêm"
                    onPress={() => onPress(title, uri)}
                />

                <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-around', }}>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            data.slice(0, centerData).map(item => {
                                return (
                                    <DoubleItemInRow
                                        key={item.id}
                                        data={item}
                                        screen={screen}
                                        info={item}
                                    />
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            data.slice(centerData).map(item => {
                                return (
                                    <DoubleItemInRow
                                        key={item.id}
                                        data={item}
                                        screen={screen}
                                        info={item}
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