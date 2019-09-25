import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from '../components/SectionItem';
import ReaderItem from '../components/ReaderItem';
import {ReaderData} from '../data/Data';

export default class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <View style={styles.container}>
                <SectionItem
                    icon={{uri: 'https://kokotachi.com/images/assets/title-icon-01.png'}}
                    title="Nhiều người đọc"
                    button="Xem thêm"
                />
                <View style={{ marginTop: 60 }}>
                    {
                        ReaderData.map(item => {
                            return (
                                <ReaderItem
                                    key={item.id}
                                    
                                    data={item}
                                />
                            )
                        })
                    }
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