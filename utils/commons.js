import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, Label, Icon, Picker, View } from 'native-base';

export const Row = styled(View)`
    margin-top: 10px;
`

export const uppercase = text => {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length)
}