import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { imageSource } from '../../utils/pureFunction';
const { width } = Dimensions.get('window');

class EventItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    static propTypes = {
        screen: PropTypes.string.isRequired,
        info: PropTypes.object.isRequired,
    }

    goToAnotherScreen = () => {
        this.props.navigation.navigate(this.props.screen, { data: this.props.info });
    }

    render() {

        const {
            data: {
                image_path,
                article: {
                    created_at,
                    title
                },
            },
        } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={0.9}
                >
                    <Image
                        source={imageSource(image_path)}
                        style={styles.image}
                    />
                    <View style={styles.shareAndDatePosting}>
                        <Text style={styles.textButton} numberOfLines={1}>Sự kiện</Text>
                        <Text style={styles.datePosting}>{created_at}</Text>
                    </View>
                    <Text style={styles.titleStyle}>{title}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: width/2,
        height: 340,
        alignItems: 'center'
    },

    image: {
        height: width/2,
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

export default withNavigation(EventItem);