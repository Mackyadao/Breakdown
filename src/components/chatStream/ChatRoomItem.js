import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const ChatRoomItem = props => {
    const {chatRoom, navigation} = props;

    return (
        <Pressable
            onPress={() => {
                navigation.navigate('ChatRoomView');
            }}
            style={styles.container}>
            <View style={styles.header}>
                <View style={styles.ellipsisMenuContainer}>
                    <Image
                        style={styles.ellipsisMenu}
                        source={require('../../assets/icons/ellipsis-menu-black-3x.png')}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.contentTitle}>{chatRoom.name}</Text>
            </View>
            <View style={styles.bottomActionsContainer}>
                <View style={styles.roomParticipantsCountContainer}>
                    <Image
                        style={styles.bottomActionIcon}
                        source={require('../../assets/icons/door-gray-3x.png')}
                    />

                    <View style={styles.roomParticipantsCountTextContainer}>
                        <Text style={styles.roomParticipantsCountText}>
                            {chatRoom.participantsCount}
                        </Text>
                    </View>
                </View>

                <View>
                    <Image
                        style={styles.bottomActionIcon}
                        source={require('../../assets/icons/circular-play-icon-3x.png')}
                    />
                </View>

                <View style={styles.chatCountContainer}>
                    <Image
                        style={styles.bottomActionIcon}
                        source={require('../../assets/icons/convo-count-outlined-3x.png')}
                    />

                    <View style={styles.chatCountTextContainer}>
                        <Text style={styles.chatCountText}>
                            {chatRoom.chatCount}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.light,
        minHeight: 166,
    },
    header: {
        flexDirection: 'row',
    },
    ellipsisMenuContainer: {
        paddingLeft: 10,
        marginLeft: 'auto',
    },
    ellipsisMenu: {
        height: 22,
        width: 6,
        resizeMode: 'contain',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    bottomActionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomActionIcon: {
        marginVertical: 3,
        marginHorizontal: 5,
        width: 31,
        height: 31,
        resizeMode: 'contain',
    },
    roomParticipantsCountContainer: {
        borderColor: 'red',
    },
    roomParticipantsCountTextContainer: {
        position: 'absolute',
        bottom: 0,
        right: -10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24 / 2,
        padding: 2,
        minWidth: 24,
        height: 24,
        backgroundColor: colors.dark,
    },
    roomParticipantsCountText: {
        fontSize: 14,
        color: colors.light,
    },
    chatCountContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatCountTextContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    chatCountText: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default withNavigation(ChatRoomItem);
