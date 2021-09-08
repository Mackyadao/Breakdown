import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import ChatRooms from '../components/chatStream/ChatRooms';
import ChatGalleryTopNavbar from '../components/navbars/ChatGalleryTopNavbar';
import MainTopNavbar from '../components/navbars/MainTopNavbar';
import MainTopNavbarCircularImage from '../components/navbars/MainTopNavbarCircularImage';

const ChatGallery = props => {
    const {navigation} = props;
    const chatStream = navigation.getParam('chatStream');

    return (
        <View style={styles.container}>
            <ChatGalleryTopNavbar chatStream={chatStream} />
            <MainTopNavbar
                style={{marginBottom: 0}}
                renderCircularImage={() => {
                    return (
                        <MainTopNavbarCircularImage
                            source={chatStream.coverPhoto}
                        />
                    );
                }}
            />
            <ChatRooms chatRooms={chatStream.chatRooms} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default withNavigation(ChatGallery);
