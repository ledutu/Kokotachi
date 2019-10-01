import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../task/Header';
import DetailHeader from '../components/DetailHeader';
import ShareButton from '../components/ShareButton';
import Admin from '../components/Admin';
import Comment from '../components/Comment';
import RefPosting from '../components/RefPosting';
import Footer from '../task/Footer';
import DetailSectionText from '../components/DetailSectionText';

export default class ApartmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    goToTop = () => {
        this.scroll.scrollTo({x: 0, y: 0, animated: true})
    }
        

    static navigationOptions = {
        header: null,
    };

    render() {
        const data = this.props.navigation.getParam('data');
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flex: 1, }}>
                    <ScrollView showsVerticalScrollIndicator={false} ref={(c) => {this.scroll = c}}>
                        <View style={{ marginHorizontal: 15 }}>
                            <DetailHeader
                                button={data.button}
                                title={data.title}
                                timePosting={data.datePosting}
                            />
                            <View style={styles.infoContainer}>
                                <DetailSectionText
                                    sectionText="Thông tin căn hộ: "
                                    data={data.apartInfo}
                                />
                                <DetailSectionText
                                    sectionText="Khu vực: "
                                    data={data.area}
                                />
                                <DetailSectionText
                                    sectionText="Diện tích: "
                                    data={data.acreage}
                                />
                                <DetailSectionText
                                    sectionText="Ga gần nhất: "
                                    data={data.near}
                                />
                                <DetailSectionText
                                    sectionText="Chú ý: "
                                    data={data.note}
                                />
                                <DetailSectionText
                                    sectionText="Liên hệ: "
                                    data={data.contact}
                                />
                                
                                
                            </View>

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
                            <RefPosting goToTop={this.goToTop}/>
                        </View>
                        <Footer />
                    </ScrollView>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {

    },
})

