import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class SectionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        // uri: PropTypes.number,
        title: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
    };

    handleOnPress = () => {
        const { title, uri, onPress } = this.props;
        onPress(title, uri);
    }


    render() {
        const { uri, title, button } = this.props
        return (
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 15 }}>
                    <View style={styles.header}>
                        <View style={styles.wrapIconAndText}>
                            {uri && (
                                <Image
                                    source={uri}
                                    style={styles.icon}
                                />
                            )}

                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={this.handleOnPress}>
                            <Text style={styles.more}>{button}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        backgroundColor: 'rgba(237, 237, 237, 0.5)',
        height: 200,
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    wrapIconAndText:
    {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        marginRight: 10
    },
    title:
    {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold"
    },
    more:
    {
        fontSize: 16,
        color: "rgba(51, 51, 51, 0.5)",
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: 'rgba(51, 51, 51, 0.5)',
        borderRadius: 20
    }


});

export default withNavigation(SectionItem);
