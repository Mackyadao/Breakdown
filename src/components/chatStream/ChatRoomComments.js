import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import ChatRoomCommentItem from './ChatRoomCommentItem';

const ChatRoomComments = props => {
    const {comments} = props;

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
