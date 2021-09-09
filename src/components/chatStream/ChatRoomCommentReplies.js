import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ChatRoomCommentReplyItem from './ChatRoomCommentReplyItem';

const ChatRoomCommentReplies = props => {
    const {commentReplies} = props;

    return (
        <FlatList
            style={styles.container}
            data={commentReplies}
            keyExtractor={item => item.id}
            renderItem={({item: commentReply}) => {
                return <ChatRoomCommentReplyItem commentReply={commentReply} />;
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ChatRoomCommentReplies;
