import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import ChatRoomItem from './ChatRoomItem';
import ChatRoomItemAddNew from './ChatRoomItemAddNew';

const ChatRooms = props => {
    const {chatRooms} = props;

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={{paddingBottom: 5}}
            data={[...chatRooms, {id: 0, plusImage: true}]}
            keyExtractor={item => item.id}
            renderItem={({item: chatRoom}) => {
                if (chatRoom.plusImage) {
                    return <ChatRoomItemAddNew />;
                } else {
                    return <ChatRoomItem chatRoom={chatRoom} />;
                }
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.neutralLighten4,
    },
});

export default ChatRooms;
