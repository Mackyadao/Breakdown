import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import colors from '../../constants/colors';

const ChatRoomTopNavbar = props => {
    const {navigation, chatRoom} = props;

    return (
        <View style={styles.container}>
            <View style={styles.actionButtonsContainer}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.goBackArrowContainer}>
                    <Image
                        style={styles.goBackArrow}
                        source={require('../../assets/icons/go-back-arrow-3x.png')}
                    />
                </Pressable>

                <Pressable style={styles.streamIconContainer}>
                    <Image
                        style={styles.streamIcon}
                        source={require('../../assets/icons/circular-play-icon-3x.png')}
                    />
                </Pressable>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.chatRoomName}>{chatRoom.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        minHeight: 120,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
    },
    goBackArrowContainer: {
        paddingTop: 5,
        paddingLeft: 10,
        marginRight: 'auto',
    },
    goBackArrow: {
        width: 34,
        height: 34,
        resizeMode: 'contain',
    },
    streamIconContainer: {
        marginLeft: 'auto',
        padding: 10,
    },
    streamIcon: {
        width: 34,
        height: 34,
        resizeMode: 'contain',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        flex: 1,
    },
    chatRoomName: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default withNavigation(ChatRoomTopNavbar);
