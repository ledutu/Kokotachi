import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../task/Header';
import DetailHeader from '../components/detail/DetailHeader';
import ShareButton from '../components/detail/ShareButton';
import Admin from '../components/detail/Admin';
import Comment from '../components/detail/Comment';
import RefPosting from '../components/RefPosting';
import Footer from '../task/Footer';
import DetailSectionText from '../components/detail/DetailSectionText';


export default class JobScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        //get data from DoubleItemInRow and DouleInRow
        const data = this.props.navigation.getParam('data');
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flex: 1, }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginHorizontal: 15 }}>
                            <DetailHeader
                                button={data.button}
                                title={data.title}
                                timePosting={data.datePosting}
                            />
                            <View style={styles.infoContainer}>
                                <DetailSectionText
                                    sectionText="Chức vụ:"
                                    data={data.position}
                                />
                                <DetailSectionText
                                    sectionText="Nội dung công việc:"
                                    data={data.jobInfo}
                                />

                                <DetailSectionText
                                    sectionText="Điều kiện ứng tuyển:"
                                    data={data.condition}
                                />

                                <DetailSectionText
                                    sectionText="Loại công việc:"
                                    data={data.jobStyle}
                                />

                                <DetailSectionText
                                    sectionText="Thời gian làm việc:"
                                    data={data.jobTime}
                                />

                                <DetailSectionText
                                    sectionText="Lương theo giờ:"
                                    data={data.salaryPerHour}
                                />

                                <DetailSectionText
                                    sectionText="Địa điểm làm việc:"
                                    data={data.workAt}
                                />

                                <DetailSectionText
                                    sectionText="Nhà ga gần nhất:"
                                    data={data.near}
                                />

                                <DetailSectionText
                                    sectionText="Liên hệ:"
                                    data={data.contact}
                                />

                                <DetailSectionText
                                    sectionText="Ghi chú:"
                                    data={data.note}
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
                            <RefPosting/>
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
