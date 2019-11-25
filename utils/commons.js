import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, TouchableOpacity, Linking } from 'react-native'
import { Text, Button, Label, Icon, Picker, View, } from 'native-base';
import styles from '../styles';
import { navigate, pushNavigate } from './navigation';
import ScalableImage from 'react-native-scalable-image';

export const Row = styled(View)`
    margin-top: 10px;
`

export const uppercase = text => {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length)
};

export const PangolinText = styled(Text)`
    font-family: "Pangolin-Regular";
    padding-bottom: 2px;
`

export const PangolinLabel = styled(Label)`
    font-family: "Pangolin-Regular";
`

export const RedTitle = styled(PangolinText)`
    font-size: 22px;
    color: #e73227;
`

export const RedButton = styled(Button)`
    background-color: #ff2a30; 
    margin-top: 10;
    margin-bottom: 10;
`;

export const CustomPicker = props => (
    <View style={{ borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden', marginTop: 7 }}>
        <Picker mode="dropdown"
            regular={true}
            placeholderStyle={{ color: 'black', paddingLeft: 10, marginLeft: 0 }}
            placeholderIconColor="grey"
            textStyle={{ paddingLeft: 10 }}
            style={{ width: undefined }}
            itemStyle={{ paddingLeft: 10 }}
            {...props} />

    </View>
);

export const GrayText = styled(PangolinText)`
    color: #717171;
`

export const BlackText = styled(PangolinText)`
    color: #000;
`

export const WhiteText = styled(PangolinText)`
    color: white;
`

export const RedLink = styled(Text)`
    color: red;
`

export const AppIndicator = (
    <ActivityIndicator 
        size="large" 
        color={styles.header.backgroundColor} 
        style={{ marginTop: 30 }} />
)

export const Logo_BackToHome = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => pushNavigate('Home', { toTop: true })}>
            <ScalableImage
                source={require('../assets/images/logo.png')}
                width={100}
            />
        </TouchableOpacity>
    </View>
)

export const GrayView = styled(View)`
    background-color: #f6f7f8;
`;

export const ErrorText = styled(PangolinText)`
    color: #ff2a30;
`

