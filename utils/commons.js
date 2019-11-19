import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, Label, Icon, Picker, View } from 'native-base';

export const Row = styled(View)`
    margin-top: 10px;
`

export const uppercase = text => {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length)
};

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

