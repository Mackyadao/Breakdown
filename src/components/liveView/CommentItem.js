import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const CommentItem = props => {
    const {
        comment,
        focused,
        handleLongPress,
        handleCommentReplyPress,
        commentTextColor = colors.light,
    } = props;

    const renderCommentAuthor = () => {
        if (focused) {
            return (
                <Text style={[styles.commentAuthor, {color: commentTextColor}]}>
                    {`@${comment.author.username}`}
                </Text>
            );
        }
    };

    const renderCommentContent = () => {
        let commentContent = '';

        if (focused) {
            commentContent = comment.content;
        } else {
            // add comment author user name to the content
            commentContent = (
                <Text>
                    <Text
                        style={[
                            styles.commentAuthor,
                            {color: commentTextColor},
                        ]}>
                        {comment.author.username}
                        {'  '}
                    </Text>

                    <Text
                        style={[
                            styles.commentContent,
                            {color: commentTextColor},
                        ]}>
                        {comment.content}
                    </Text>
                </Text>
            );
        }

        return (
            <Text style={[styles.commentContent, {color: commentTextColor}]}>
                {commentContent}
            </Text>
        );
    };

    const renderCommentActions = () => {
        if (focused) {
            return (
                <View style={styles.commentActionsContainer}>
                    <Pressable
                        onPress={() => {
                            handleCommentReplyPress(comment.author.username);
                        }}>
                        <Text
                            style={[
                                styles.actionText,
                                {color: commentTextColor},
                            ]}>
                            Reply
                        </Text>
                    </Pressable>
                </View>
            );
        }
    };

    return (
        <Pressable
            onLongPress={() => {
                handleLongPress(comment.id);
            }}
            key={comment.id}
            style={styles.commentItem}>
            <View style={styles.userAvatarContainer}>
                <Image
                    style={styles.userAvatar}
                    source={comment.author.userAvatar}
                />
            </View>

            <View style={styles.commentContainer}>
                {renderCommentAuthor()}
                {renderCommentContent()}
                {renderCommentActions()}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    commentItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
    },
    userAvatarContainer: {},
    userAvatar: {
        height: 35,
        width: 35,
    },
    commentContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    commentAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
    },
    commentContent: {
        fontSize: 16,
        color: colors.light,
    },
    commentActionsContainer: {
        padding: 2,
    },
    actionText: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
    },
});

export default CommentItem;
