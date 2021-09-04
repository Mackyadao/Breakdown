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
