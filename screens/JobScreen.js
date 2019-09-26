import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../task/Header';
import DetailNews from '../components/DetailNews';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        const data = this.props.navigation.getParam('data');
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView>
                    <DetailNews
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

                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={styles.favoriteButton}>
                            <MaterialIcons
                                name="favorite"
                                size={20}
                            />
                            <Text>Thích bài viết</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.facebookButton}>
                            <Ionicons
                                name="logo-facebook"
                                size={20}
                            />
                            <Text>Chia sẽ Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.twitterButton}>
                            <Ionicons
                                name="logo-twitter"
                                size={20}
                            />
                            <Text>Chia sẽ Twitter</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        paddingHorizontal: 15
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
    favoriteButton:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 4.5,
        paddingHorizontal: 7.65,
        fontSize: 13
    },
    facebookButton:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 4.5,
        paddingHorizontal: 7.65,
        fontSize: 13
    },
    twitterButton:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 4.5,
        paddingHorizontal: 7.65,
        fontSize: 13,
    }
})
