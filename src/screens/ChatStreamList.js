import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ChatStreamItem from '../components/chatStream/ChatStreamItem';

import colors from '../constants/colors';

// dummy data
const chatStreams = [
    {
        id: 1,
        bucketTag: 'Behind the Scenes',
        topic: 'Wakanda Forever',
        owner: 'MarvelStudios',
        coverPhoto: require('../assets/images/chatStreams/cover-photo-wakanda-forever-3x.png'),
        category: {
            name: 'Movies',
            icon: require('../assets/icons/chat-stream-category-movies-3x.png'),
        },
        chatRooms: [],
    },
    {
        id: 2,
        bucketTag: 'Album Breakdown',
        topic: 'Get Lifted',
        owner: 'johnlegend',
        coverPhoto: require('../assets/images/chatStreams/cover-photo-get-lifted-3x.png'),
        category: {
            name: 'Music',
            icon: require('../assets/icons/chat-stream-category-music-3x.png'),
        },
        chatRooms: [],
    },
    {
        id: 3,
        bucketTag: 'Book Club',
        topic: 'The Missing Piece',
        owner: 'robhillsr',
        coverPhoto: require('../assets/images/chatStreams/cover-photo-the-missing-piece-3x.png'),
        category: {
            name: 'Books',
            icon: require('../assets/icons/chat-stream-category-books-3x.png'),
        },
        chatRooms: [
            {
                id: 1,
                name: 'My Inspiration',
                participantsCount: '25',
                chatCount: '400',
            },
            {
                id: 2,
                name: "What's your favorite chapter and why",
                participantsCount: '15',
                chatCount: '650',
            },
            {
                id: 3,
                name: 'How do you nurture a relationship?',
                participantsCount: '85',
                chatCount: '6K',
            },
            {
                id: 4,
                name: 'How to cultivate motivation daily',
                participantsCount: '65',
                chatCount: '2K',
            },
        ],
    },
    {
        id: 4,
        bucketTag: 'General',
        topic: 'Top Mariah Carey Albums',
        owner: 'emofmimi',
        coverPhoto: require('../assets/images/chatStreams/cover-photo-mariah-carey-3x.png'),
        category: {
            name: 'Music',
            icon: require('../assets/icons/chat-stream-category-music-3x.png'),
        },
        chatRooms: [
            {
                id: 1,
                name: 'Butterfly (1997)',
                participantsCount: '25',
                chatCount: '400',
            },
            {
                id: 2,
                name: 'Emotions (1991)',
                participantsCount: '15',
                chatCount: '650',
            },
            {
                id: 3,
                name: 'Daydream (1995)',
                participantsCount: '85',
                chatCount: '6K',
            },
            {
                id: 4,
                name: 'Mariah Carey (1990)',
                participantsCount: '65',
                chatCount: '2K',
            },
        ],
    },
    {
        id: 5,
        bucketTag: 'How to',
        topic: 'Best Photography Lighting',
        owner: 'jaxonphotogroup',
        coverPhoto: require('../assets/images/chatStreams/cover-photo-photography-lighting-3x.png'),
        category: {
            name: 'Photography',
            icon: require('../assets/icons/chat-stream-category-photography-3x.png'),
        },
        chatRooms: [
            {
                id: 1,
                name: 'Indoor Lighting Tactics',
                participantsCount: '25',
                chatCount: '400',
            },
            {
                id: 2,
                name: 'Outdoor Night Shoots',
                participantsCount: '15',
                chatCount: '650',
            },
            {
                id: 3,
                name: 'How to Shoot Without a Flash',
                participantsCount: '85',
                chatCount: '6K',
            },
        ],
    },
    {
        id: 6,
        bucketTag: 'Premier',
        topic: 'Top Gun - Maverick',
        owner: 'airforceones',
        coverPhoto: require('../assets/images/chatStreams/cover-photo-top-gun-3x.png'),
        category: {
            name: 'Movies',
            icon: require('../assets/icons/chat-stream-category-movies-3x.png'),
        },
        chatRooms: [],
    },
];

const ChatStreamList = () => {
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={{paddingBottom: 8}}
            data={chatStreams}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ChatStreamItem chatStream={item} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutralLighten4,
    },
});

export default ChatStreamList;
