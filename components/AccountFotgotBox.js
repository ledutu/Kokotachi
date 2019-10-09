import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class AccountFotgotBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static propTypes = {
        display: PropTypes.string.isRequired,
        close: PropTypes.func.isRequired
    }

    render() {
        const {display, close} = this.props
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    isVisible={display}
                    animationOut="slideOutDown"
                    onBackButtonPress={close}
                    onBackdropPress={close}
                    style={styles.modal}
                    useNativeDriver={true}
                    scrollHorizontal={false}
                    children={true}
                >
                    <Text>Hello World</Text>
                </Modal>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
});
