import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { imageSource } from '../utils/pureFunction';

const { width } = Dimensions.get('window');

class DoubleItemInRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    static propTypes = {
        info: PropTypes.object.isRequired,
    }

    goToAnotherScreen = () => {
        const { info, } = this.props;
        this.props.navigation.navigate('Detail', { data: info });

    }

    render() {

        const {
            data: {
                category,
                thumbnail,
                approved_at,
                title,
            },
            half,
        } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={[styles.container, half ? styles.ahalf : styles.full]}
                    activeOpacity={0.9}
                    onPress={this.goToAnotherScreen}
                >
                    <Image
                        source={imageSource("/storage/" + thumbnail)}
                        style={[styles.image, half ? { height: width / 2, } : { height: width, }]}
                    />
                    <View style={styles.shareAndDatePosting}>
                        <Text style={[styles.textButton, half ? { width: 75 } : null]} numberOfLines={1}>{category.title}</Text>
                        <Text style={[styles.datePosting, half ? { width: 80, } : null]}>{approved_at}</Text>
                    </View>
                    <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: 'space-around',
    },

    ahalf: {    
        width: width / 2,
        height: width / 2 + 200,
        flex: 1,
    },
    full: {
        width: "100%",
        height: width + 145,
        flex: 1,
    },

    image: {
        width: '100%',
        borderRadius: 10,

    },
    shareAndDatePosting:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textButton: {
        color: 'white',
        fontSize: 15,
        overflow: 'hidden',
        backgroundColor: "#ff2a30",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 16,
    },

    datePosting:
    {
        fontSize: 14,
        color: 'rgba(51, 51, 51, 0.3)',
    },
    titleStyle:
    {
        textTransform: 'uppercase',
        color: '#333333',
        fontSize: 17,
        fontWeight: 'bold',
    }


})

export default withNavigation(DoubleItemInRow);