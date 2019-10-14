import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import { LogoImages } from '../utils/LogoImages';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static navigationOptions = {
        header: null,
    }

    render() {
        const data = this.props.navigation.getParam('data', '')
        return (
            <View>
                <DetailMenuHeader
                    uri={data.uri}
                    title={data.title}
                    postingNumber={30}
                    periodNumber={'1 - 10'}
                />
            </View>
        );
    }
}
