import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../task/Header';
import DetailHeader from '../components/DetailHeader';
import ShareButton from '../components/ShareButton';
import Admin from '../components/Admin';
import Comment from '../components/Comment';


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
                <View style = {{flex:1, marginHorizontal: 15}}>
                    <ScrollView>
                        <DetailHeader
                            button={data.button}
                            title={data.title}
                            timePosting={data.datePosting}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.sectionText}>Chức vụ:</Text>
                            <Text style={styles.content}>{data.position}</Text>

                            <Text style={styles.sectionText}>Nội dung công việc:</Text>
                            <Text style={styles.content}>{data.jobInfo}</Text>

                            <Text style={styles.sectionText}>Điều kiện ứng tuyển:</Text>
                            <Text style={styles.content}>{data.condition}</Text>

                            <Text style={styles.sectionText}>Loại công việc:</Text>
                            <Text style={styles.content}>{data.jobStyle}</Text>

                            <Text style={styles.sectionText}>Thời gian làm việc:</Text>
                            <Text style={styles.content}>{data.jobTime}</Text>

                            <Text style={styles.sectionText}>Lương theo giờ:</Text>
                            <Text style={styles.content}>{data.salaryPerHour}¥</Text>

                            <Text style={styles.sectionText}>Địa điểm làm việc:</Text>
                            <Text style={styles.content}>{data.workAt}</Text>

                            <Text style={styles.sectionText}>Nhà ga gần nhất:</Text>
                            <Text style={styles.content}>{data.near}</Text>

                            <Text style={styles.sectionText}>Liên hệ:</Text>
                            <Text style={styles.content}>{data.contact}</Text>
                        </View>

                        <ShareButton />

                        <Admin
                            image = "https://admin.kokotachi.com/storage/profile/2019/05/5cd0ef0f16320_IMG_20190504_185819_350.jpg"
                            adminName = "Phương Uyên"
                            adminGender = "Nữ"
                            joinDay = "23/04/2019"
                            allPosting = "Xem tất cả bài viết"
                        />

                        <Comment
                            image = "https://kokotachi.com/images/avatar-no-image.jpg"
                            commentNumber = {0}
                        />

                    </ScrollView>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        
    },

    sectionText: {
        color: 'rgba(255, 42, 48, 0.7)',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingBottom: 18,
        fontWeight: '600'
    },

    content: {
        color: '#212529',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingBottom: 18
    },
})
