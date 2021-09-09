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
                <Text style={styles.contentText}>{commentReply.content}</Text>
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
        marginTop: 10,
        marginLeft: 10,
    },
    contentText: {},
    userAvatar: {
        width: 35,
        height: 35,
    },
});

export default ChatRoomCommentReplyItem;
