import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DoubleItemInRow from './DoubleItemInRow';
import PropTypes from 'prop-types';

export default class RefItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        screen: PropTypes.string.isRequired,
    }

    //props RefPosting
    render() {
        const centerData = Math.floor(this.props.data.length / 2);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                <View style={{ flexDirection: 'column' }}>
                    {
                        this.props.data.slice(0, centerData).map(item => {
                            return (
                                <DoubleItemInRow
                                    key={item.id}
                                    data={item}
                                    screen={this.props.screen}
                                    info={item}
                                />
                            )
                        })
                    }
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {
                        this.props.data.slice(centerData).map(item => {
                            return (
                                <DoubleItemInRow
                                    key={item.id}
                                    data={item}
                                    screen={this.props.screen}
                                    info={item}
                                />
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}
