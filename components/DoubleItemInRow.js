import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class DoubleItemInRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    goToAnotherScreen = () => {
        this.props.onToTop;
        this.props.navigation.navigate(this.props.screen, {data: this.props.info});
    }

    render() {

        const {
            data: {
                image,
                title,
                datePosting,
                button
            },
        } = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.9}
                onPress={this.goToAnotherScreen}
            >
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
                <View style={styles.shareAndDatePosting}>
                    <Text style={styles.textButton} numberOfLines={1}>{button}</Text>
                    <Text style={styles.datePosting}>{datePosting}</Text>
                </View>
                <Text style={styles.titleStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: 200,
        height: 340,
        alignItems: 'center'
    },

    image: {
        height: 180,
        width: '100%',
        borderRadius: 10
    },
    shareAndDatePosting:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: 15,
        overflow: 'hidden',
        backgroundColor: "#ff2a30",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginRight: 20,
        borderRadius: 16,
        width: 75,
    },

    datePosting:
    {
        fontSize: 14,
        color: 'rgba(51, 51, 51, 0.3)',
        width: 80,
        textAlign: 'right'

    },
    titleStyle:
    {
        textTransform: 'uppercase',
        color: '#333333',
        fontSize: 17,
        fontWeight: 'bold'
    }


})

export default withNavigation(DoubleItemInRow);