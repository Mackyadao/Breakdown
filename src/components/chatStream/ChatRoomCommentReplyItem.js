import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CommentItemUserAvatar from './CommentItemUserAvatar';

const ChatRoomCommentReplyItem = props => {
    const {commentReply} = props;

    return (
        <View style={styles.container}>
            <CommentItemUserAvatar
                style={styles.userAvatar}
                source={commentReply.author.userAvatar}
            />

            <View style={styles.contentTextContainer}>
                <Text style={styles.contentText}>
                    <Text
                        style={
                            styles.username
                        }>{`${commentReply.author.username} `}</Text>
                    {commentReply.content}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    contentTextContainer: {
        marginTop: 5,
        marginLeft: 10,
        flex: 1,
    },
    contentText: {},
    username: {
        fontWeight: 'bold',
    },
    userAvatar: {
        width: 35,
        height: 35,
    },
});

export default ChatRoomCommentReplyItem;
