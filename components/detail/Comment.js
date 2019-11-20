import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { getArticleComments } from '../../utils/api';
import { ListItem, Left, Thumbnail, Body } from 'native-base';

const TransparentCardItem = styled(CardItem)`
    background-color: transparent;
`;

const CommentItem = ({ user, item, editComment, deleteCommentConfirm }) => {
    const { author, comment } = item
    const isAdmin = user && user.roles.find(role => role.name === 'Admin')

    return (
        <ListItem noBorder>
            <Left>
                <Thumbnail source={avatarSource(author.avatar)} />
                <Body>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text>{author.name}</Text>
                        </View>

                        {user && (user.id === author.id || isAdmin) && (
                            <>
                                <TouchableOpacity small transparent onPress={() => editComment(item)}>
                                    <Text note style={{ marginTop: 2, marginLeft: 10, marginRight: 10 }}>Edit</Text>
                                </TouchableOpacity>

                                <TouchableOpacity small transparent onPress={() => deleteCommentConfirm(item.id)}>
                                    <Text note style={{ marginTop: 2 }}>Delete</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                    <Text note>{comment}</Text>
                </Body>
            </Left>
        </ListItem>
    )
}

export default class Comment extends Component {

    static propTypes = {
        commentNumber: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    };

    state = {
        comments: [],
        loading: false,
        error: false,
        commentPaginated: null,
        slug_article: null,
        editingComment: null,
        loadingMoreDisabled: false,
    }

    getComments = async (page = 1) => {
        this.setState({
            loading: true,
            loadingMoreDisabled: true,
        }, async () => {
            try {
                const { slug_article, comments } = this.state;
                const commentsRes = await getArticleComments(slug_article, page);
                const results = commentsRes.data._data.comments.data;

                console.log("Comment loaded");
                this.setState({
                    ...this.state,
                    commentPaginated: commentsRes.data._data.comments,
                    comments: page == 1 ? results : comments.concat(results),
                    loadMoreDisabled: false,
                    slug_article,
                });



            } catch (error) {
                console.log("ERROR", error)
            }
        })
    };

    async componentDidMount() {
        this.getComments();
    };

    renderCommentItem = ({ item }) => {
        return (
            <CommentItem
                item={item}
                user={user}
                deleteCommentConfirm={deleteCommentConfirm}
                editComment={editComment} />
        );
    }

    render() {
        const { commentNumber, image } = this.props;
        const { comments, commentPaginated } = this.state;
        console.log(comments);

        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 16, color: '#333333' }}>{commentNumber} Bình luận</Text>
                </View>

                <View style={styles.avtAndCmt}>
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nhập bình luận"
                        multiline={true}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Hủy bỏ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.commentButton}>
                        <Text style={styles.cmtText}>Bình luận</Text>
                    </TouchableOpacity>
                </View>

                {comments.length > 0 ? (
                    <Card transparent>
                        <FlatList
                            data={comments}
                            keyExtractor={(item) => item.id.toString()}
                            initialNumToRender={3}
                            renderItem={this.renderCommentItem} />

                        {commentPaginated.current_page < commentPaginated.last_page && (
                            <TransparentCardItem>
                                <Body style={styles.contentCenter}>
                                    <Button disabled={loadMoreDisabled} rounded bordered small onPress={() => this.getComments(commentPaginated.current_page + 1)}>
                                        <Text>Load more</Text>
                                    </Button>
                                </Body>
                            </TransparentCardItem>
                        )}
                    </Card>
                ) : (
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>
                            <PangolinText note>Bài này chưa có bình luận</PangolinText>
                        </View>
                    )
                }


            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        marginBottom: 48,
    },

    avtAndCmt: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 18,
        marginTop: 9,
    },
    image:
    {
        width: 48,
        height: 48,
        borderRadius: 50,
    },

    textInput: {
        backgroundColor: '#F7F7F7',
        borderRadius: 6,
        width: '100%',
        height: 80,
        padding: 16,
        fontSize: 14
    },

    cancelButton: {
        paddingVertical: 4.5,
        paddingHorizontal: 9,
        borderWidth: 1,
        borderColor: 'rgba(51, 51, 51, 0.5)',
        borderRadius: 30
    },

    commentButton: {
        paddingVertical: 4.5,
        paddingHorizontal: 9,
        borderRadius: 30,
        borderColor: '#e02f49',
        backgroundColor: '#e02f49',
        marginLeft: 10,
    },

    cancelText: {
        color: 'rgba(51, 51, 51, 0.5)',
        fontSize: 15.75
    },

    cmtText: {
        fontSize: 15.75,
        color: 'white'
    },

    contentCenter: {

    }

})