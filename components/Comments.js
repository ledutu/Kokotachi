import React, { useState } from 'react'
import { Keyboard, Alert, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { View, Card, CardItem, Thumbnail, Item, ListItem, Textarea, Button, Left, Body, Right, Input, Container, Header, Content, Icon } from 'native-base'
import styled from 'styled-components'
import { PangolinText, RedButton } from '../utils/commons'
import { useTranslation } from 'react-i18next'
import { avatarSource } from '../utils/pureFunction'
import { getArticleComments, comment, deleteComment, updateComment } from '../utils/api'
import styles from '../styles'
import Modal from 'react-native-modal'
import { navigate } from "../utils/navigation";

const TransparentCardItem = styled(CardItem)`
    background-color: transparent;
`

const mapStateToProps = (state) => ({
    user: state.user
})

const CommentInput = connect(mapStateToProps)(function ({ user, postComment, commentItem = null }) {
    const { t } = useTranslation()
    const textareaRef = React.createRef()
    const [state, setState] = useState({
        comment: commentItem ? commentItem.comment : '',
        sending: false,
        textAreaHeight: 100,
    })
    const { comment, sending, textAreaHeight } = state

    const onComment = async () => {
        if (comment) {
            setState({ ...state, sending: true })
            await postComment(comment)
            setState({
                ...state,
                sending: false,
                comment: ''
            })
            Keyboard.dismiss()
        }
    }

    return (
        <Card transparent>
            <ListItem noBorder style={{ paddingBottom: 0 }}>
                <Left>
                    <Thumbnail source={avatarSource(user && user.avatar)} />
                    <Body>
                        <Item regular style={{ borderRadius: 6, backgroundColor: '#fff' }}>
                            {user ? (
                                <Textarea
                                    ref={textareaRef}
                                    placeholder={t('Enter your comment')}
                                    placeholderTextColor="#ccc"
                                    value={comment}
                                    autoFocus={commentItem !== null}
                                    onContentSizeChange={e => setState({ ...state, textAreaHeight: e.nativeEvent.contentSize.height })}
                                    onChangeText={comment => setState({ ...state, comment })}
                                    style={{ minHeight: 50, height: textAreaHeight }} />
                            ) : (
                                    <Input
                                        placeholder={t('Enter your comment')}
                                        onTouchEnd={() => navigate('SignIn', { message: t('You need to login to continue') })}
                                        placeholderTextColor="#ccc" />
                                )}
                        </Item>
                    </Body>
                </Left>
            </ListItem>

            <ListItem noBorder style={{ paddingTop: 0 }}>
                <Left />
                <Right>
                    <RedButton disabled={sending} rounded small style={{ alignSelf: 'flex-end' }} onPress={onComment}>
                        <PangolinText style={{ paddingLeft: 20, paddingRight: 20 }}>{t('Send')}</PangolinText>
                    </RedButton>
                </Right>
            </ListItem>
        </Card>
    )
})

const CommentItem = ({ user, item, editComment, deleteCommentConfirm }) => {
    const { t } = useTranslation()
    const { author, comment } = item
    const isAdmin = user && user.roles.find(role => role.name === 'Admin')

    return (
        <ListItem noBorder>
            <Left>
                <Thumbnail source={avatarSource(author.avatar)} />
                <Body>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <PangolinText>{author.name}</PangolinText>
                        </View>

                        {user && (user.id === author.id || isAdmin) && (
                            <>
                                <TouchableOpacity small transparent onPress={() => editComment(item)}>
                                    <PangolinText note style={{ marginTop: 2, marginLeft: 10, marginRight: 10 }}>{t('Edit')}</PangolinText>
                                </TouchableOpacity>

                                <TouchableOpacity small transparent onPress={() => deleteCommentConfirm(item.id)}>
                                    <PangolinText note style={{ marginTop: 2 }}>{t('Delete')}</PangolinText>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                    <PangolinText note>{comment}</PangolinText>
                </Body>
            </Left>
        </ListItem>
    )
}

/**
 * @param {Object} props
 * @param {string} props.slug_article
 */
const Comments = connect(mapStateToProps)(function ({ user, slug_article }) {
    const { t } = useTranslation()

    const [state, setState] = useState({
        comments: [],
        commentPaginated: null,
        loadMoreDisabled: false,
        slug_article: null,
        editingComment: null
    })

    const { comments, commentPaginated, loadMoreDisabled, editingComment } = state

    async function getComments(page = 1) {
        setState({
            ...state,
            loadMoreDisabled: true
        })

        try {
            const commentsRes = await getArticleComments(slug_article, page)
            const _comments = commentsRes.data._data.comments.data

            console.log("Comments loaded")

            setState({
                ...state,
                commentPaginated: commentsRes.data._data.comments,
                comments: page == 1 ? _comments : comments.concat(_comments),
                loadMoreDisabled: false,
                slug_article
            })
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    const postComment = async text => {
        try {
            await comment({ comment: text, slug_article })
            getComments()
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    /**
     * Open edit comment modal.
     */
    const editComment = commentItem => setState({ ...state, editingComment: commentItem })

    /**
     * Close edit comment modal, also display the comment just edited.
     * @param {string} new_comment 
     */
    const closeEditCommentModal = (new_comment = null) => {
        const _comments = comments.map(item => {
            if (new_comment !== null && editingComment && item.id === editingComment.id) {
                item.comment = new_comment
            }
            return item
        })

        setState({
            ...state,
            comments: _comments,
            editingComment: null
        })
    }

    /**
     * Send delete request and filter deleted comment.
     */
    const doDeleteComment = async id => {
        try {
            await deleteComment(id)

            setState({
                ...state,
                comments: comments.filter(comment => comment.id != id)
            })
        } catch (error) {
            console.log("Could not delete comment", error)
        }

    }

    /**
     * Open dialog box confirm.
     */
    const deleteCommentConfirm = id => {
        Alert.alert(t('Delete comment'), t('Do you want to delete comment?'), [
            { text: t('Cancel') },
            { text: t('Delete'), onPress: () => doDeleteComment(id) }
        ])
    }

    const renderCommentItem = ({ item }) => (
        <CommentItem
            item={item}
            user={user}
            deleteCommentConfirm={deleteCommentConfirm}
            editComment={editComment} />
    )

    // Loading comments for the first time.
    if (!loadMoreDisabled && slug_article != state.slug_article) {
        getComments()
    }

    return (
        <View padder style={{ marginTop: -10, backgroundColor: "#fafafa" }}>
            <View style={{ marginTop: 10 }}>
                <PangolinText>{t('Comments')}</PangolinText>
            </View>

            <CommentInput postComment={postComment} />

            {comments.length > 0 ? (
                <Card transparent>
                    <FlatList
                        data={comments}
                        keyExtractor={(item) => item.id.toString()}
                        initialNumToRender={3}
                        renderItem={renderCommentItem} />

                    {commentPaginated.current_page < commentPaginated.last_page && (
                        <TransparentCardItem>
                            <Body style={styles.contentCenter}>
                                <Button disabled={loadMoreDisabled} rounded bordered small onPress={() => getComments(commentPaginated.current_page + 1)}>
                                    <PangolinText>{t('Load more')}</PangolinText>
                                </Button>
                            </Body>
                        </TransparentCardItem>
                    )}
                </Card>
            ) : (
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <PangolinText note>{t('This article has no comment yet')}</PangolinText>
                    </View>
                )
            }

            <EditCommentModal
                commentItem={editingComment}
                closeEditCommentModal={closeEditCommentModal} />
        </View>
    )
})

function EditCommentModal({ commentItem = null, closeEditCommentModal }) {
    const { t } = useTranslation()
    const _styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            // height: Dimensions.get('window').height - 22,
            width: Dimensions.get('window').width,
            marginLeft: -20,
            marginTop: -22,
            marginBottom: -22
        },
    })

    const doUpdateComment = async comment => {
        try {
            await updateComment(commentItem.id, comment)
            closeEditCommentModal(comment)
        }
        catch (error) {
            console.log("Could not update comment", error)
        }
    }

    return (
        <Modal
            animationIn="slideInRight"
            animationOut="slideOutRight"
            isVisible={commentItem !== null}
            onBackButtonPress={() => closeEditCommentModal()}
        >
            <Container style={_styles.container}>
                <Header androidStatusBarColor={styles.header.backgroundColor} style={{ backgroundColor: '#fff' }}>
                    <Left style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Button transparent androidRippleColor="red" onPress={() => closeEditCommentModal()}>
                                <Icon type="FontAwesome" name="arrow-left" style={{ color: '#333' }} />
                            </Button>

                            <PangolinText style={{ fontSize: 20, marginTop: 8 }}>{t('Edit comment')}</PangolinText>
                        </View>
                    </Left>
                </Header>

                <Content padder>
                    <CommentInput postComment={doUpdateComment} commentItem={commentItem} />
                </Content>
            </Container>
        </Modal>
    )
}

export default Comments