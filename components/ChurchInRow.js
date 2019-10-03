import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from './SectionItem';
import DoubleItemInRow from './DoubleItemInRow';
import ChurchItem from './ChurchItem';


export default class ChurchInRow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const centerData = Math.floor(this.props.data.length / 2);
        return (
            <View style={styles.container}>
                <SectionItem
                    icon={this.props.icon}
                    title={this.props.title}
                    button="Xem thêm"
                />

                <View style={{ marginTop: 60, flexDirection: 'row',justifyContent: 'space-around',}}>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            this.props.data.slice(0, centerData).map(item => {
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
                            this.props.data.slice(centerData).map(item => {
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