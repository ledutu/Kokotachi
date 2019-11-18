import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../task/Header';
import { Container, Content, Icon, Card, CardItem, Body, ListItem } from 'native-base';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import { uppercase, RedButton } from '../utils/commons';
import { type_utils, width } from '../utils/constants';
import PropTypes from 'prop-types';
import { imageSource } from '../utils/pureFunction';
import { fetchChurchs } from '../utils/api';
import OpenLinking from '../utils/OpenLinking';
import Modal from 'react-native-modal';

const Info = ({ icon, image, title, subtitle, button, onPress, backgroundColor, }) => {
    return (
        <View style={{ padding: 9, backgroundColor, width: '100%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {icon && (
                    <Icon type={'FontAwesome'} name={icon} style={{ color: 'rgb(229, 46, 45)', fontSize: 25 }} />
                )}
                {image && (
                    <Image source={image} style={{ width: 20, height: 25, backgroundColor: 'white' }} />
                )}
                <Text style={{ color: '#333333', marginLeft: 10, fontSize: 16.2, fontWeight: '500' }}>{title}</Text>
            </View>
            <Text
                onPress={onPress}
                style={
                    [
                        button ? { color: '#007bff' } : { color: 'rgba(51, 51, 51, 0.7)' },
                        { fontSize: 16.2 }
                    ]
                }
            >{subtitle}</Text>
        </View>
    )
};

Info.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    button: PropTypes.bool,
    onPress: PropTypes.func,
}

export default class ChurchListScreen extends Component {

    state = {
        churchList: [],
        loading: false,
        error: false,
        searchFormOpen: false,
        english_ceremony: false,
        vietnamese_ceremony: false,
        saturday_ceremony: false,
        sunday_am: false,
        sunday_pm: false,
    };

    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
        await this.getData();
    };

    getData = async (query = null) => {
        try {
            const data = await fetchChurchs(query);
            this.setState({
                loading: false,
                error: false,
                churchList: data.data,
                searchFormOpen: false,
            })
        }
        catch (e) {
            console.log(e)
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Church', { data: item })} activeOpacity={0.8}>
                <Card style={{ paddingVertical: 27 }}>
                    <CardItem>
                        <Body style={{ justifyContent: 'space-around', }}>
                            <Image source={imageSource(item.thumbnail_url400x)} style={{ width: '100%', height: width, }} />
                            <Text style={styles.title}>{item.title}</Text>

                            {/* Address */}
                            <Info
                                icon={'map-marker'}
                                title={'Địa chỉ'}
                                subtitle={item.address}
                                button

                                onPress={() => this.props.navigation.navigate('Church', { data: item, map_only: true })}
                            />

                            {/* Misa By english */}
                            <Info
                                image={require('../assets/images/english-ico.png')}
                                title={'Lễ bằng tiếng Anh'}
                                subtitle={item.english_ceremony ? 'Có' : 'Không'}
                                backgroundColor={'rgba(51, 51, 51, 0.05)'}
                            />

                            {/* Misa By Vietnamese */}
                            <Info
                                icon={'vine'}
                                title={'Lễ bằng tiếng Việt'}
                                subtitle={item.vietnamese_ceremony ? 'Có' : 'Không'}
                            />

                            {/* Sunday Misa */}
                            <Info
                                image={require('../assets/images/cross-ico.png')}
                                title={'Lễ Chúa Nhật'}
                                subtitle={item.sunday_ceremony}
                                backgroundColor={'rgba(51, 51, 51, 0.05)'}

                            />

                            {/* Weekday Misa */}
                            <Info
                                image={require('../assets/images/cross-ico.png')}
                                title={'Lễ ngày thường'}
                                subtitle={item.normal_day_ceremony}
                            />

                            {/* Website */}
                            {item.website && (
                                <Info
                                    icon={'globe'}
                                    title={'Website'}
                                    subtitle={item.website}
                                    onPress={() => OpenLinking(item.website)}
                                    button
                                    backgroundColor={'rgba(51, 51, 51, 0.05)'}
                                />
                            )}


                            {/* Source */}
                            <Info
                                icon={'table'}
                                title={'Nguồn dữ liệu'}
                                subtitle={'http://tokyo.catholic.jp'}
                                onPress={() => OpenLinking('http://tokyo.catholic.jp')}
                                button
                            />

                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>

        )

    };

    renderTop = () => {
        const { churchList } = this.state;
        return (
            <DetailMenuHeader
                isTitle
                title={uppercase(type_utils.church.display)}
                uri={type_utils.church.icon}
                postingNumber={churchList.length}
            />
        )
    };

    openSearchForm = () => {
        this.setState({
            searchFormOpen: true,
        })
    };

    handleCloseModal = () => {
        this.setState({
            searchFormOpen: false,
        })
    };

    toggleChecked = name => {

        this.setState({
            ...this.state,
            [name]: !this.state[name]
        });

    };

    doSearch = () => {
        this.setState({
            searchFormOpen: false,
        });

        let query = {};

        for (const stateName in this.state) {
            if (this.state.hasOwnProperty(stateName)) {
                const value = this.state[stateName]
                if (value) {
                    query[stateName] = 1
                }
            }
        };

        this.getData(query);
    };




    render() {
        const {
            churchList,
            searchFormOpen,
            english_ceremony,
            vietnamese_ceremony,
            saturday_ceremony,
            sunday_am,
            sunday_pm,
        } = this.state;

        return (
            <Container>

                <Content
                    style={{ flex: 1, }}
                    contentContainerStyle={{ flex: 1, }}
                >
                    <Header />

                    {churchList.length === 0 && (
                        <View style={styles.noArticles}>
                            <Text style={{ fontSize: 20 }}>Chưa có bài viết nào</Text>
                        </View>
                    )}

                    {churchList && (
                        <FlatList
                            data={churchList}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ListHeaderComponent={churchList.length > 0 ? this.renderTop : null}
                        />
                    )}

                    <RedButton rounded style={styles.searchButton} onPress={this.openSearchForm}>
                        <Icon type="FontAwesome" name="search" />
                    </RedButton>

                    <Modal
                        isVisible={searchFormOpen}
                        animationOut="slideOutDown"
                        onBackButtonPress={this.handleCloseModal}
                        onBackdropPress={this.handleCloseModal}
                        style={styles.modal}
                        useNativeDriver={true}
                        scrollHorizontal={false}
                        children={true}
                    >
                        <View style={styles.modalContainer}>
                            <ScrollView>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.redTitle}>Tìm kiếm nhà thờ</Text>
                                    <TouchableOpacity
                                        onPress={this.handleCloseModal}>
                                        <Icon name="close" />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 20, paddingBottom: 2 }}>Ngôn ngữ</Text>
                                </View>

                                <ListItem noIndent noBorder onPress={() => this.toggleChecked('english_ceremony')} style={styles.row}>
                                    <Icon style={styles.checkbox} type="FontAwesome" name={english_ceremony ? 'check-square-o' : 'square-o'} />
                                    <Text>Lễ bằng tiếng Anh</Text>
                                </ListItem>

                                <ListItem noIndent noBorder onPress={() => this.toggleChecked('vietnamese_ceremony')} style={styles.row}>
                                    <Icon style={styles.checkbox} type="FontAwesome" name={vietnamese_ceremony ? 'check-square-o' : 'square-o'} />
                                    <Text>Lễ bằng tiếng Việt</Text>
                                </ListItem>

                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 20, paddingBottom: 2 }}>Giờ lễ</Text>
                                </View>

                                <ListItem noIndent noBorder onPress={() => this.toggleChecked('saturday_ceremony')} style={styles.row}>
                                    <Icon style={styles.checkbox} type="FontAwesome" name={saturday_ceremony ? 'check-square-o' : 'square-o'} />
                                    <Text>Lễ thứ bảy</Text>
                                </ListItem>

                                <ListItem noIndent noBorder onPress={() => this.toggleChecked('sunday_am')} style={styles.row}>
                                    <Icon style={styles.checkbox} type="FontAwesome" name={sunday_am ? 'check-square-o' : 'square-o'} />
                                    <Text>Lễ chúa nhật buổi sáng</Text>
                                </ListItem>

                                <ListItem noIndent noBorder onPress={() => this.toggleChecked('sunday_pm')} style={styles.row}>
                                    <Icon style={styles.checkbox} type="FontAwesome" name={sunday_pm ? 'check-square-o' : 'square-o'} />
                                    <Text>Lễ chúa nhật buổi chiều</Text>
                                </ListItem>

                                <View style={styles.flexRowCenter}>

                                    <RedButton rounded onPress={this.doSearch} style={styles.button}>
                                        <Text style={styles.searchText}>Tìm kiếm</Text>
                                    </RedButton>

                                </View>
                            </ScrollView>
                        </View>
                    </Modal>

                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        color: "#333333",
        fontSize: 22.5,
        marginVertical: 10,
        fontWeight: '500',
    },

    noArticles: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
    },

    modalContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 20,
        bottom: -20,
        right: -20,
        left: -20,
        position: 'absolute',
    },

    row: {
        flexDirection: 'row',
    },

    checkbox: {
        marginRight: 10,
    },

    redTitle: {
        fontSize: 22,
        color: '#e73227',
    },

    searchText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    flexRowCenter: {
        justifyContent: 'center',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }

});
