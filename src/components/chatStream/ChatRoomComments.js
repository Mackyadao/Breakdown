import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import ChatRoomCommentItem from './ChatRoomCommentItem';

const ChatRoomComments = () => {
    return (
        <View style={styles.container}>
            <ChatRoomCommentItem />
        </View>
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
