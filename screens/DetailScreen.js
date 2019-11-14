import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import DetailMenuHeader from '../components/detailMenuComponent/DetailMenuHeader';
import Header from '../task/Header';
import Footer from '../task/Footer';
import { fetchArticles } from '../utils/api';
import { Container, Content, Card, CardItem, Text, Body, View } from 'native-base';
import { width, type_utils, check } from '../utils/constants';
import { imageSource } from '../utils/pureFunction';
import { uppercase } from '../utils/commons';

var count = 0;
export default class DetailScreen extends Component {
    state = {
        loading: false,
        error: false,
        articles: [],
        page: 0
    }

    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
        await this.getData();
    };

    getData = async () => {
        this.setState({ loading: true, page: this.state.page + 1, }, async () => {
            try {
                const top = this.props.navigation.getParam('order');
                const artData = this.props.navigation.getParam('type');
                const { page, articles } = this.state;

                const classify = !top && artData ? { type: artData } : { order: top };

                const results = await fetchArticles({ ...classify, page });

                this.setState({
                    loading: false,
                    error: false,
                    articles: page === 1 ? results.data._data.articles.data :
                        articles.concat(results.data._data.articles.data)
                })
            }
            catch (e) {
                this.setState({
                    loading: false,
                    error: true,
                })
            }
        })
    }

    renderItem = ({ item }) => {
        const { articles } = this.state;
        const data = this.props.navigation.getParam("type");

        count++;

        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail", { data: item })} activeOpacity={0.9}>

                <Card>
                    <CardItem>
                        <Body style={{ justifyContent: 'space-around' }}>
                            <Image source={imageSource("/storage/" + item.thumbnail)} style={{ width: '100%', height: width, flex: 1 }} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.text}>{item.approved_at}</Text>
                            <View style={styles.interactWrapping}>
                                <Text style={[styles.text, { paddingRight: 10 }]}>{item.like_count} Likes</Text>
                                <Text style={styles.text}>{item.comment_count} Comments</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>

            </TouchableOpacity>
        )
    };

    handleConcatArticles = async () => {
        await this.getData();
    };

    renderTop = () => {
        const { articles } = this.state;
        const data = this.props.navigation.getParam("type");
        return (
            <DetailMenuHeader
                isTitle
                title={data ? uppercase(data) : 'Most viewed'}
                uri={data ? check(data).icon : type_utils.most_viewed.icon}
                postingNumber={articles.length}
            />
        )
    }


    render() {

        const { articles } = this.state;

        return (
            <Container>

                <Content
                    style={{ flex: 1, }}
                    contentContainerStyle={{ flex: 1, }}
                >
                    <Header />

                    {!articles && (
                        <View>
                            <Text>Chưa có bài viết nào</Text>
                        </View>
                    )}
                    {articles && (
                        <FlatList

                            data={articles}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            onEndReached={this.handleConcatArticles}
                            onEndReachedThreshold={0.5}
                            ListHeaderComponent={this.renderTop}
                        />
                    )}
                </Content>
            </Container>


        );
    }
};

const styles = StyleSheet.create({
    detailContainer: {

        flex: 1,
    },

    container: {
        flex: 1,
    },

    interactWrapping: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
    },

    title: {
        fontSize: 22.5,
        color: '#333333',
        marginVertical: 10
    },
    text: {
        color: 'rgba(51, 51, 51, 0.3)',
    }
});
