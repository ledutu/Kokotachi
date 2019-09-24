import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './task/Header';
import ImageSlider from './task/ImageSlider';
import Reader from './task/Reader';
import Job from './task/Job';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView>
          <ImageSlider />
          <Reader/>
          <Job />
        </ScrollView>

      </View>
    );
  }
}
