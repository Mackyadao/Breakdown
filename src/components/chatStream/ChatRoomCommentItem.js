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

                        <CardView
                            style={styles.reactionsCountContainer}
                            cardElevation={cardElevation}
                            cardMaxElevation={cardMaxElevation}
                            cornerRadius={cornerRadius}>
                            <Image
                                style={styles.reactionsCountIcon}
                                source={require('../../assets/icons/reaction-insightful-3x.png')}
                            />

                            <Image
                                style={styles.reactionsCountIcon}
                                source={require('../../assets/icons/reaction-like-3x.png')}
                            />

                            <Image
                                style={[
                                    styles.reactionsCountIcon,
                                    {width: 16, height: 13.26},
                                ]}
                                source={require('../../assets/icons/reaction-love-3x.png')}
                            />

                            <Text style={styles.reactionsTotalCount}>16</Text>
                        </CardView>
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
