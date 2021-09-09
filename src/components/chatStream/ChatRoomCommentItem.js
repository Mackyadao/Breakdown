import React, {useContext} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import ChatRoomCommentBaloon from './ChatRoomCommentBaloon';
import CardView from 'react-native-cardview';

import colors from '../../constants/colors';
import {ChatRoomContext} from '../../context/types';
import ChatRoomCommentReplies from './ChatRoomCommentReplies';
import CommentItemUserAvatar from './CommentItemUserAvatar';

const ChatRoomCommentItem = props => {
    const {comment} = props;
    const cardElevation = 4;
    const cardMaxElevation = 2;
    const cornerRadius = 60;

    const {handleReplyPress} = useContext(ChatRoomContext);

    const renderInsightfulReactIcon = () => {
        if (comment.insightfulReactCount) {
            return (
                <Image
                    style={styles.reactionsCountIcon}
                    source={require('../../assets/icons/reaction-insightful-3x.png')}
                />
            );
        }
    };

    const renderLikeReactIcon = () => {
        if (comment.likeReactCount) {
            return (
                <Image
                    style={styles.reactionsCountIcon}
                    source={require('../../assets/icons/reaction-like-3x.png')}
                />
            );
        }
    };

    const renderLoveReactIcon = () => {
        if (comment.loveReactCount) {
            return (
                <Image
                    style={[
                        styles.reactionsCountIcon,
                        {width: 16, height: 13.26},
                    ]}
                    source={require('../../assets/icons/reaction-love-3x.png')}
                />
            );
        }
    };

    const renderReactionsCount = () => {
        if (
            comment.insightfulReactCount ||
            comment.likeReactCount ||
            comment.likeReactCount
        ) {
            return (
                <CardView
                    style={styles.reactionsCountContainer}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    {renderInsightfulReactIcon()}
                    {renderLikeReactIcon()}
                    {renderLoveReactIcon()}
                    <Text style={styles.reactionsTotalCount}>
                        {`${
                            comment.insightfulReactCount +
                            comment.likeReactCount +
                            comment.loveReactCount
                        }`}
                    </Text>
                </CardView>
            );
        }
    };

    return (
        <View style={styles.container}>
            <CommentItemUserAvatar source={comment.author.userAvatar} />

            <View style={styles.commentContainer}>
                <ChatRoomCommentBaloon comment={comment} />

                <View style={styles.chatRoomCommentActionsContainer}>
                    <View style={styles.chatRoomCommentActionsLeft}>
                        <Pressable>
                            <Text style={styles.actionText}>React</Text>
                        </Pressable>

                        {renderReactionsCount()}
                    </View>

                    <View style={styles.chatRoomCommentActionsRight}>
                        <Pressable
                            onPress={() => {
                                handleReplyPress(comment.id);
                            }}>
                            <Text style={styles.actionText}>Reply</Text>
                        </Pressable>
                    </View>
                </View>

                <ChatRoomCommentReplies commentReplies={comment.replies} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        width: '100%',
    },
    commentContainer: {
        flex: 1,
        marginLeft: 5,
    },
    chatRoomCommentActionsContainer: {
        marginVertical: 6,
        flexDirection: 'row',
    },
    chatRoomCommentActionsLeft: {
        flex: 1,
        flexDirection: 'row',
    },
    chatRoomCommentActionsRight: {
        flex: 1,
        flexDirection: 'row',
    },
    actionText: {
        paddingVertical: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.neutralLighten2,
    },
    reactionsCountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 60,
        paddingHorizontal: 3,
    },
    reactionsCountIcon: {
        marginRight: 2,
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    reactionsTotalCount: {
        width: 18,
        height: 22,
    },
});

export default ChatRoomCommentItem;
