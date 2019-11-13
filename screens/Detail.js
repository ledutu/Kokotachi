import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Header from '../task/Header';
import DetailHeader from '../components/detail/DetailHeader';
import ShareButton from '../components/detail/ShareButton';
import axios from 'axios'
import Comment from '../components/detail/Comment';
import RefPosting from '../components/RefPosting';
import Footer from '../task/Footer';
import { fetchContentArticle, getArticles_MayULike } from '../utils/api';
import relToAbs from '../utils/rel-to-abs';
import AutoHeightWebView from '../utils/webview-autoheight';
import { avatarSource } from '../utils/pureFunction';
import { Button, Left, Thumbnail, Body, Card, CardItem } from 'native-base'
import DoubleRow from '../components/DoubleRow';

const { width, height } = Dimensions.get('window');

const APP_URL = "https://admin.kokotachi.com";

let contentComponent = null;

export default class Detail extends Component {
    state = {
        html: '',
        refData: [],
        id: null,
    };

    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
        await this.getContentArticle();
    };



    async getContentArticle() {
        try {
            const data = this.props.navigation.getParam('data');
            const articleRes = await fetchContentArticle(data.id);
            const refData = await getArticles_MayULike({ per_page: 8 });

            const article = articleRes.data._data;

            this.setState({
                id: data.id,
                html: relToAbs(article.content, APP_URL),
                refData: refData.data._data.articles.data,
            });

        } catch (error) {
            console.log("ERROR", error)
        }
    };

    render() {
        const { html, refData } = this.state;
        const data = this.props.navigation.getParam('data');
        const { category, title, approved_at, author } = data;

        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flex: 1, }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        ref={c => contentComponent = c}
                        disableKBDismissScroll={true}
                    >
                        <View>

                            <View pointerEvents="none">
                                <View style={{ marginHorizontal: 15 }}>
                                    <DetailHeader
                                        button={category.title}
                                        title={title}
                                        timePosting={approved_at}
                                    />
                                </View>
                                <AutoHeightWebView
                                    originWhitelist={['*']}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    customStyle={`
                                        * {
                                            font-family: 'Pangolin';
                                        }
                                        p {
                                            font-size: 16px;
                                            magrin: 0px;
                                            padding: 0px;
                                            font-family: 'Pangolin';
                                        }
                                        p, h1, h2, h3, h4, h5, h6 {
                                            user-select: none;
                                            -webkit-user-select: none;
                                            padding-left: 10px;
                                            padding-right: 10px;
                                        }
                                        img {
                                            margin-left: -10px;
                                            max-width: ${width};
                                            height: auto;
                                            display: block;
                                        }
                                    `}
                                    source={{ html }} />
                            </View>

                            <ShareButton />

                            {data.author && (
                                <Card style={{ marginLeft: 10, marginRight: 10, marginBottom: 50, }}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={avatarSource(author.avatar)} />
                                            <Body>
                                                <Text style={{ fontSize: 20 }}>{author.name}</Text>
                                                <View>
                                                    {
                                                        <Text>Giới tính: {author.gender === 1 ? "Nữ" : "Nam"}</Text>
                                                    }

                                                    {author.roles.find(role => role.name !== 'Admin') && (
                                                        <Text note>Ngày tham gia: {author.created_at}</Text>
                                                    )}

                                                    <Button transparent small onPress={() => null}>
                                                        <Text style={{ paddingLeft: 0 }}>Xem tất cả bài viết</Text>
                                                    </Button>
                                                </View>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            )}


                            <Comment
                                image="https://kokotachi.com/images/avatar-no-image.jpg"
                                commentNumber={0}
                            />
                            <DoubleRow
                                title={'May you like'}
                                data={refData}
                                screen="Detail"
                                half
                            />
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
        marginTop: 50,
    },
})

