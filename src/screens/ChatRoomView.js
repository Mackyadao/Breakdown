import React from 'react';
import {View, StyleSheet} from 'react-native';
import ChatRoomTopNavbar from '../components/navbars/ChatRoomTopNavbar';

import colors from '../constants/colors';
import ChatRoomComments from '../components/chatStream/ChatRoomComments';

const ChatRoomView = props => {
    const {navigation} = props;
    const chatRoom = navigation.getParam('chatRoom');

    return (
        <View style={styles.container}>
            <ChatRoomTopNavbar chatRoom={chatRoom} />
            <ChatRoomComments />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutralLighten4,
    },
});

export default ChatRoomView;
