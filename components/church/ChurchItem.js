import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ChurchBox from './ChurchBox';
import PropTypes from 'prop-types';
import { imageSource } from '../../utils/pureFunction';
const { width } = Dimensions.get('window');

class ChurchItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    static propTypes = {
        address: PropTypes.string,
        english: PropTypes.string,
        vietnam: PropTypes.string,
        japan: PropTypes.string,
        normal: PropTypes.string,
        sunday: PropTypes.string,
        volunteerActivity: PropTypes.string,
        detail: PropTypes.string,
        source: PropTypes.string,
    }

    triggerModal = () => {
        this.setState({
            display: true
        })
    }

    close = () => {
        this.setState({
            display: false
        })
    };



    render() {

        const {
            data: {
                gallery,
                thumbnail_url400x,
                article,
                title,
                // address, english, vietnam,
                // japan, normal, sunday,
                // volunteerActivity, detail, source
            },
        } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={0.9}
                    onPress={this.triggerModal}
                >
                    <Image
                        source={imageSource(thumbnail_url400x)}
                        style={styles.image}
                    />
                    <View style={styles.shareAndDatePosting}>
                        <Text style={styles.textButton} numberOfLines={1}>{gallery.type}</Text>
                        <Text style={styles.datePosting}>{article.created_at}</Text>
                    </View>
                    <Text style={styles.titleStyle}>{title}</Text>
                </TouchableOpacity>

                {/* <ChurchBox
                    display={this.state.display}
                    close={this.close}
                    address={address}
                    english={english}
                    vietnam={vietnam}
                    japan={japan}
                    normal={normal}
                    sunday={sunday}
                    volunteerActivity={volunteerActivity}
                    detail={detail}
                    source={source}
                    title={title}
                /> */}
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

export default ChurchItem;