import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../task/Header';
import DetailHeader from '../components/detail/DetailHeader';
import ShareButton from '../components/detail/ShareButton';
import Admin from '../components/detail/Admin';
import Comment from '../components/detail/Comment';
import RefPosting from '../components/RefPosting';
import Footer from '../task/Footer';
import DetailCosmeItem from '../components/detail/DetailCosmeItem';

export default class ApartmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const data = this.props.navigation.getParam('data');
    var display = []
    for (let i = 0; i <= 2; i++) {
      display.push(
        <DetailCosmeItem key={i}
          content={data.content.split(':')[i]}
          image={data.images[i].uri}
          source={data.images[i].source}
        />
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <DetailHeader
              button={data.button}
              title={data.title}
              timePosting={data.datePosting}
            />

            {display}

            <DetailCosmeItem
              content={data.content.split(':')[3]}
            />

            <ShareButton />

            <Admin
              image="https://admin.kokotachi.com/storage/profile/2019/05/5cd0ef0f16320_IMG_20190504_185819_350.jpg"
              adminName="Phương Uyên"
              adminGender="Nữ"
              joinDay="23/04/2019"
              allPosting="Xem tất cả bài viết"
            />

            <Comment
              image="https://kokotachi.com/images/avatar-no-image.jpg"
              commentNumber={0}
            />
            <RefPosting />
          </View>
          <Footer />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flex: 1
  },
})

