import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Header from '../task/Header';
import { Container, Content, Icon } from 'native-base';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import { uppercase } from '../utils/commons';
import { type_utils } from '../utils/constants';
import PropTypes from 'prop-types';
import { imageSource } from '../utils/pureFunction';
import { fetchChurchs } from '../utils/api';

const Info = ({ icon, image, title, subtitle, button, onPress, backgroundColor, }) => {
    return (
        <View style={{ padding: 9, backgroundColor }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {icon && (
                    <Icon type={'FontAwesome'} name={icon} style={{ color: 'rgb(229, 46, 45)' }} />
                )}
                {image && (
                    <Image source={image} style={{ width: 20, height: 25 }} />
                )}
                <Text style={{ color: '#333333', marginLeft: 10, fontSize: 16.2, fontWeight: '500' }}>{title}</Text>
            </View>
            <Text onPress={onPress}
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
    subtitle: PropTypes.string.isRequired,
    button: PropTypes.bool,
    onPress: PropTypes.func,
}

export default class ChurchListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            churchList: [],
            loading: false,
            error: false,
        };
    };

    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
        await this.getData();
    };

    getData = async (query = null) => {
        try {
            const data = await fetchChurchs(query)
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    renderItem = () => {
        // return (
        //     <View>
        //         <Image source={imageSource(church.thumbnail_url400x)} style={{ width, height: width }} />
        //     </View>
        // )

    };



    handleConcatChurch = () => {
        <Info
            icon={'map-marker'}
            title={'Địa chỉ'}
            subtitle={'5-20-5 Asakusabashi, Taito-ku, Tokyo 111-0053'}
            button
            backgroundColor={'rgba(51, 51, 51, 0.05)'}
        />
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
    }

    render() {
        const { churchList } = this.state;
        return (
            <Container>

                <Content
                    style={{ flex: 1, }}
                    contentContainerStyle={{ flex: 1, }}
                >
                    <Header />

                    {churchList.length === 0 && (
                        <View>
                            <Text>Chưa có bài viết nào</Text>
                        </View>
                    )}




                    {/* {churchList && (
                        <FlatList
                            data={churchList}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            onEndReached={this.handleConcatChurch}
                            onEndReachedThreshold={0.5}
                            ListHeaderComponent={this.renderTop}
                        />
                    )} */}
                </Content>
            </Container>
        );
    }
}
