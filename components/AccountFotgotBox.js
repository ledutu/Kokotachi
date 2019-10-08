import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

export default class AccountFotgotBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
