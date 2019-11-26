import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity, Platform, Alert, Text } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import { View, Container, Content, Button, Icon, Left, Thumbnail, Body, Card, CardItem } from 'native-base'
import { useTranslation } from 'react-i18next'
import { format, parseISO } from 'date-fns';
import Config from 'react-native-config'
import AutoHeightWebView from '../utils/webview-autoheight'
import { PangolinText } from '../utils/commons'
import relToAbs from '../utils/rel-to-abs'
import { CancelToken } from '../utils/axios'
import styles from '../styles'
import { avatarSource } from '../utils/pureFunction'
import Comments from '../components/Comments'
import { getArticles_MayULike, likeArticle } from '../utils/api'
import DoubleRow from '../components/DoubleRow'
import { type_utils, genders, width } from '../utils/constants'
import { navigate } from '../utils/navigation'
import { fetchContentArticle } from '../utils/api'

const { APP_URL } = Config

const Title = styled(PangolinText)`
    font-size: 24;
    margin-top: 10;
    margin-bottom: 10;
`

const PostInfo = styled(View)`
    margin-bottom: 10
`

const ShareTwitterButton = styled(Button)`
    background-color: #56abf4
`

const ShareFBButton = styled(Button)`
    background-color: #4e68a2
`

const LikeButton = styled(Button)`
    background-color: #eeeeee;
`

export function MayYouLike({ except_article }) {
    const [state, setState] = useState({
        articles: [],
        except_article: null,
        cancelTokenSource: CancelToken.source()
    })

    const { articles, cancelTokenSource } = state

    if (except_article != state.except_article) {
        ; (async () => {
            try {
                const articlesRes = await getArticles_MayULike({ except_article, cancelToken: cancelTokenSource.token })
                setState({
                    ...state,
                    articles: articlesRes.data._data.articles.data,
                    except_article
                })
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request has been canceled")
                }
            }
        })()
    }

    useEffect(() => {
        return () => {
            cancelTokenSource.cancel("Cancel request on unmount")
        }
    }, [])

    return <DoubleRow title="May you like" data={articles} half />

}

let contentComponent = null

const mapStateToProps = state => ({
    user: state.user
})

const Detail = connect(mapStateToProps)(function ({ user, navigation }) {

    const updateLike = navigation.getParam('updateLike');

    const data = navigation.getParam('data');

    const { author, slug, id } = data;

    const { t } = useTranslation();

    const [state, setState] = useState({
        slug: null,
        html: '',
        like_count: 0,
        i_liked: 0,
        pressingLike: false,
        cancelTokenSource: CancelToken.source()
    })
    let { html, pressingLike } = state

    const pressLike = async () => {
        if (!user) {
            setState({
                ...state,
                pressingLike: true
            })
            navigation.navigate('SignIn', { message: t('You need to login to continue') })
            return;
        }

        try {
            const reponse = await likeArticle({ id: data.id, user_id: user.id })
            const result = reponse.data._data
            const new_like_count = result.liked ? state.like_count + 1 : state.like_count - 1
            setState({
                ...state,
                pressingLike: false,
                i_liked: result.liked,
                like_count: new_like_count
            })

            // Update data in article-list
            if (updateLike) {
                updateLike({
                    i_liked: result.liked,
                    like_count: new_like_count
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const { cancelTokenSource } = state;

    async function getContentArticle() {

        try {
            const articleRes = await fetchContentArticle(id);
            const result = articleRes.data._data;

            setState({
                ...state,
                html: relToAbs(result.content, APP_URL),
            })

        } catch (error) {
            console.log("ERROR", error);
        }
    }

    // Update when switch to another article
    useEffect(() => {
        if (slug != state.slug) {
            setState({
                ...state,
                slug,
                html: '',
                i_liked: data.i_liked,
                like_count: data.like_count,
            })
        }

        if (state.slug) {
            if (contentComponent) {
                contentComponent._root.scrollToPosition(0, 0)
            }
        }

        getContentArticle()
    }, [slug])

    // Continue pressing like button after logged in.
    useEffect(() => {
        if (user && pressingLike) {
            pressLike()
        }
    }, [user])

    if (data.is_expired) {
        data.is_expired = 0
        setTimeout(() => {
            Alert.alert(
                t('This article has expired!'), '',
                [
                    {
                        text: t('Close'),
                        style: 'cancel',
                    }
                ]
            )
        }, 1000);

    }

    html = `<link href="https://fonts.googleapis.com/css?family=Pangolin&display=swap" rel="stylesheet" />` + html

    return (
        <Container style={{ flex: 1 }}>
            <Content ref={c => contentComponent = c} disableKBDismissScroll={true}>
                {/* The title */}
                <View padder style={{ marginBottom: 0, paddingBottom: 0 }}>
                    <Title style={{ margin: 0 }}>{data.title}</Title>
                </View>

                {/* Some informations: Approved date,... */}
                <PostInfo style={{ paddingLeft: 10, paddingBottom: 5 }}>
                    <PangolinText style={{ color: 'rgba(51, 51, 51, 0.3)' }}>{format(parseISO(data.approved_at), 'yyyy/MM/dd')}</PangolinText>
                </PostInfo>

                {/* Content, use WebView to render html, use AutoHeightWebView for auto height */}
                <View pointerEvents="none">
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

                {
                    !user && (
                        <View>
                            <PangolinText style={{ color: '#FF292F', fontSize: 16, marginLeft: 10, fontWeight: '500', textTransform: 'uppercase' }}>{t('Liên hệ')}:</PangolinText>

                            <View padder style={{ paddingTop: 0, marginTop: 0 }}>
                                <Text>
                                    <PangolinText>{t('Please create an account')}</PangolinText>
                                    <PangolinText onPress={() => navigation.push('Contact')} style={{ color: '#007bff' }}> {t('here')} </PangolinText>
                                    <PangolinText>{t('for kokotachi to support you better')}!</PangolinText>
                                </Text>
                            </View>
                        </View>
                    )
                }

                {/* Share buttons */}
                <View padder style={styles.flexRow}>
                    <LikeButton iconLeft rounded small style={{ marginRight: 10 }} onPress={pressLike}>
                        <Icon type="FontAwesome" name={state.i_liked ? 'heart' : 'heart-o'} style={{ color: '#7a7a7a', marginRight: -10 }} />
                        <PangolinText style={{ color: "#7a7a7a" }}>{state.like_count}</PangolinText>
                    </LikeButton>

                    <ShareFBButton rounded small style={{ marginRight: 10 }}>
                        <Icon type="FontAwesome" name="facebook" style={{ color: 'rgb(255, 255, 255)' }} />
                    </ShareFBButton>

                    <ShareTwitterButton rounded small>
                        <Icon type="FontAwesome" name="twitter" style={{ color: 'rgb(255, 255, 255)' }} />
                    </ShareTwitterButton>
                </View>

                {/* Introducing about the author */}
                {author && (
                    <Card style={{ marginLeft: 10, marginRight: 10 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={avatarSource(author.avatar)} />
                                <Body>
                                    <PangolinText style={{ fontSize: 20 }}>{author.name}</PangolinText>
                                    <View>
                                        {
                                            author.id != 2 && (
                                                <PangolinText note>{t('Gender')}: {t(genders[author.gender])}</PangolinText>
                                            )
                                        }

                                        {author.roles.find(role => role.name !== 'Admin') && (
                                            <PangolinText note>{t('Joined date')}: {format(parseISO(author.created_at), 'yyyy/MM/dd')}</PangolinText>
                                        )}

                                        <Button transparent small onPress={() => navigation.push('ArticleList', { author_id: author.id, title: t('View articles wrote by') + ' ' + author.name })}>
                                            <PangolinText style={{ paddingLeft: 0 }}>{t('View all articles')}</PangolinText>
                                        </Button>
                                    </View>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                )}


                {/* Comments */}
                <Comments slug_article={slug} user={user}/>

                {/* May you like */}
                <MayYouLike except_article={slug} />
            </Content>
        </Container>
    )
})

function HeaderTitle({ category, navigation }) {
    const { t } = useTranslation()
    const _styles = StyleSheet.create({
        typeDisplay: {
            fontSize: 16,
        },
        categoryTitle: {
            fontSize: 20,
        },
        titleImage: {
            height: 33,
            marginTop: 10
        }
    })
    return (
        <View style={[{ flexDirection: 'row' }]}>
            <Image source={type_utils[category.type].icon} resizeMode="contain" style={[Platform.OS === 'ios' && { marginBottom: 10 }, _styles.titleImage]} />

            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                {category.type != 'lifestyle' && (
                    <TouchableOpacity onPress={() => navigation.push('ArticleList', { type: category.type, title: t(type_utils[category.type].display) })}>
                        <PangolinText style={_styles.typeDisplay}>{t(type_utils[category.type].display)}</PangolinText>
                    </TouchableOpacity>
                )}

                {category.title && (
                    <TouchableOpacity onPress={() => navigation.push('ArticleList', { slug: category.slug, type: category.type, title: category.title })}>
                        <PangolinText style={_styles.categoryTitle}>{category.title}</PangolinText>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

Detail.navigationOptions = ({ navigation }) => {
    const { category } = navigation.getParam('data')
    return {
        headerTitle: <HeaderTitle category={category} navigation={navigation} />,
    }
};

export default Detail;