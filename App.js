import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './task/Header';
import ImageSlider from './task/ImageSlider';
import Reader from './task/Reader';
import { JobData, ChurchData, CosmeticData, EventData, ApartmentData, SocialData } from "./data/Data";
import DoubleRow from './components/DoubleRow';

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
          <ImageSlider/>
          <Reader/>

          {/* Job */}
          <DoubleRow 
            icon={require('./kokotachi_image/title-icon-job.png')}
            title="Công việc"
            data={JobData}
          />
          
          {/* Apartment */}
          <DoubleRow
            icon={{uri: 'https://kokotachi.com/images/assets/title-icon-apartment.png'}}
            title="Căn hộ"
            data={ApartmentData}
          />

          {/* Social */}
          <DoubleRow
            icon={{uri: 'https://kokotachi.com/images/assets/title-icon-lifestyle.png'}}
            title="Xã hội"
            data={SocialData}
          />

          {/* Cosmetic */}
          <DoubleRow
            icon={{uri: 'https://kokotachi.com/images/assets/title-icon-cosme.png'}}
            title="Mỹ phẩm"
            data={CosmeticData}
          />

          {/* Church */}
          <DoubleRow
            icon={{uri: 'https://kokotachi.com/images/assets/title-icon-church.png'}}
            title="Nhà thờ"
            data={ChurchData}
          />

          {/* Event */}
          <DoubleRow
            icon={{uri: 'https://kokotachi.com/images/assets/title-icon-event.png'}}
            title="Sự kiện"
            data={EventData}
          />
        </ScrollView>

      </View>
    );
  }
}
