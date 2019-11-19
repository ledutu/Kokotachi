import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import SectionItem from '../SectionItem';
import { withNavigation } from 'react-navigation';

class EventInRow extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        screen: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        uri: PropTypes.number.isRequired,
        onPress: PropTypes.func,
    };

    render() {
        const { screen, data, onPress, uri, title, } = this.props;
        const centerData = Math.floor(data.length / 2);

        return (
            <View style={styles.container}>
                <SectionItem
                    uri={uri}
                    title={title}
                    button="Xem thêm"
                    onPress={() => this.props.navigation.navigate('EventList', { title: 'Event' })}
                />

                <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-around', }}>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            data.slice(0, centerData).map(item => {
                                return (
                                    <EventItem
                                        key={item.id}
                                        data={item}
                                        screen={screen}
                                        info={item}
                                        onPress={
                                            () => {
                                                this.props.navigation.navigate(
                                                    'EventList',
                                                    {
                                                        title: item.title,
                                                        type: item.type,
                                                        slug: item.slug,
                                                    }
                                                )
                                            }
                                        }
                                    />
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            data.slice(centerData).map(item => {
                                return (
                                    <EventItem
                                        key={item.id}
                                        data={item}
                                        screen={screen}
                                        info={item}
                                        onPress={
                                            () => {
                                                this.props.navigation.navigate(
                                                    'EventList',
                                                    {
                                                        title: item.title,
                                                        type: item.type,
                                                        slug: item.slug,
                                                    }
                                                )
                                            }
                                        }
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

});

export default withNavigation(EventInRow);