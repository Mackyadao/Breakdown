import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import ChatRoomCommentItem from './ChatRoomCommentItem';

const ChatRoomComments = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: {
                username: 'mystyle01',
                userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content: 'Test',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
                {
                    id: 2,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
            ],
        },
        {
            id: 2,
            author: {
                username: 'mystyle01',
                userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content: 'Test',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
                {
                    id: 2,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
            ],
        },
        {
            id: 3,
            author: {
                username: 'mystyle01',
                userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content: 'Test',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
                {
                    id: 2,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
            ],
        },
        {
            id: 4,
            author: {
                username: 'mystyle01',
                userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content: 'Test',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Test reply',
                    date: '2h',
                },
                {
                    id: 2,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content:
                        'Test loooooooooooooooooong replyyyyyyyyyyyyyyyyyyy',
                    date: '2h',
                },
            ],
        },
    ]);

    return (
        <FlatList
            style={styles.container}
            data={comments}
            keyExtractor={item => item.id}
            renderItem={({item: comment}) => {
                return <ChatRoomCommentItem comment={comment} />;
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: colors.light,
    },
});

export default ChatRoomComments;
