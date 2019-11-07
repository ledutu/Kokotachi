import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { imageSource } from '../utils/pureFunction';

class ReaderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
        screen: PropTypes.string,
        info: PropTypes.object,
    }

    goToAnotherScreen = () => {
        this.props.navigation.navigate(this.props.screen, { data: this.props.info });
    }

    render() {

        const {
            data: {
                category,
                thumbnail,
                approved_at,
                title,
            }
        } = this.props;

        return (
            <TouchableOpacity
                style={{ padding: 15 }}
                activeOpacity={0.9}
                onPress={this.goToAnotherScreen}>
                <Image
                    source={imageSource("/storage/" + thumbnail)}
                    style={styles.image}
                />
                <View style={styles.shareAndDatePosting}>
                    <Text style={styles.textButton} numberOfLines={1}>{category.title}</Text>
                    <Text>{approved_at}</Text>
                </View>
                <Text style={styles.titleStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 400,
        borderRadius: 10
    },
    shareAndDatePosting:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 15,
        backgroundColor: "#ff2a30",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 40,
    },

    datePosting:
    {
        fontSize: 15,
        color: 'rgba(51, 51, 51, 0.3)',
    },
    titleStyle:
    {
        textTransform: 'uppercase',
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold'
    }


})

export default withNavigation(ReaderItem);
