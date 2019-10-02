import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DoubleItemInRow from './DoubleItemInRow';

export default class RefItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
