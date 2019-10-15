import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialIcons';
import OpenLinking from '../utils/OpenLinking';
import PropTypes from 'prop-types';

export default class ChurchBox extends Component {

    handleLink = () => {
        OpenLinking(this.props.source)
    }

    static propTypes = { 
        address: PropTypes.string,
        english: PropTypes.string,
        vietnam: PropTypes.string,
        japan: PropTypes.string,
        normal: PropTypes.string,
        sunday: PropTypes.string,
        volunteerActivity: PropTypes.string,
        detail: PropTypes.string,
        source: PropTypes.string
    }

    render() {
        const {
            address, english, vietnam,
            japan, normal, sunday,
            volunteerActivity, detail, source,
        } = this.props;
        return (
            <View>
                <Modal isVisible={this.props.display}
                    animationOut="slideOutDown"
                    onBackButtonPress={this.props.close}
                    style={styles.modal}
                    useNativeDriver={true}
                    scrollHorizontal={false}
                    children={true}
                >
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.titleStyle}>
                            <Text style={styles.titleText}>{this.props.title}</Text>
                            <TouchableOpacity onPress={this.props.close}>
                                <Icon
                                    size={27}
                                    name="cancel"
                                    color="#212529"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infomation}>
                            <Text style={styles.sectionStyle}  >Địa chỉ</Text>
                            <Text style={styles.textStyle}>{address}</Text>

                            <Text style={styles.sectionStyle}  >Lễ bằng tiếng Anh</Text>
                            <Text style={styles.textStyle}>{english}</Text>

                            <Text style={styles.sectionStyle}  >Lễ bằng tiếng Việt</Text>
                            <Text style={styles.textStyle}>{vietnam}</Text>

                            <Text style={styles.sectionStyle}  >Lễ Chúa Nhật</Text>
                            <Text style={styles.textStyle}>{japan}</Text>

                            <Text style={styles.sectionStyle}  >Lễ ngày thường</Text>
                            <Text style={styles.textStyle}>{normal}</Text>

                            <Text style={styles.sectionStyle}  >Lớp học chủ nhật</Text>
                            <Text style={styles.textStyle}>{sunday}</Text>

                            <Text style={styles.sectionStyle}  >Hoạt động tình nguyện</Text>
                            <Text style={styles.textStyle}>{volunteerActivity}</Text>

                            <Text style={styles.sectionStyle}  >Mô tả</Text>
                            <Text style={styles.textStyle}>{detail}</Text>
                            <TouchableOpacity activeOpacity={0.9} onPress={this.handleLink}>
                                <Text style={styles.sectionStyle}  >Nguồn dữ liệu</Text>
                                <Text style={[styles.textStyle, styles.link]}>{source}</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </Modal>
            </View >
        )
    }
}

const styles = StyleSheet.create({

    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    titleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#e9ecef'
    },
    titleText: {
        fontSize: 22.5,
        color: '#212529',
    },
    infomation: {
        padding: 18
    },
    sectionStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212529',
        marginBottom: 9
    },
    textStyle: {
        fontSize: 18,
        color: '#212529',
        marginBottom: 18
    },
    link: {
        textDecorationLine: "underline",
        color: 'blue'
    }
})
