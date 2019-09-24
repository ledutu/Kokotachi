import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from '../components/SectionItem';
import { JobData } from '../data/Data';
import DoubleItemInRow from '../components/DoubleItemInRow';

const centerData = Math.floor(JobData.length / 2);

export default class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <View style={styles.container}>
                <SectionItem
                    icon={require('../kokotachi_image/title-icon-job.png')}
                    title="Công việc"
                    button="Xem thêm"
                />

                <View style={{ marginTop: 60, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            JobData.slice(0, centerData).map(item => {
                                return (
                                    <DoubleItemInRow
                                        key={item.id}
                                        data={item}
                                    />
                                )
                            })
                        }
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            JobData.slice(centerData).map(item => {
                                return (
                                    <DoubleItemInRow
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