import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RefItem from './RefItem';
import { ApartmentData, CosmeticData } from '../data/Data';

export default class RefPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.refText}>Có thể bạn quan tâm</Text>

                <View style={{marginTop: 10}}>
                    <RefItem
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-apartment.png' }}
                        title="Căn hộ"
                        data={ApartmentData}
                        screen="Apartment"
                        goToTop={this.props.goToTop}
                    />

                    <RefItem
                        icon={{ uri: 'https://kokotachi.com/images/assets/title-icon-apartment.png' }}
                        title="Mỹ phẩm"
                        data={CosmeticData}
                        screen="Apartment"
                        goToTop={this.props.goToTop}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 5,
        marginBottom: 75
    },
    refText: {
        fontSize: 18,
        color: '#333333',
        paddingTop: 27,
        borderTopWidth: 1,
        borderTopColor: 'rgba(214, 214, 214, 0.8)',
        borderStyle: "dotted"
    }
})
