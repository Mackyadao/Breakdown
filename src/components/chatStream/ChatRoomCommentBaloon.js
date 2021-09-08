import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const ChatRoomCommentBaloon = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.commentAuthor, styles.boldText]}>
                    @mystyle01
                </Text>
                <Text style={styles.commentDate}>2h</Text>
            </View>
            <Text style={styles.commentContent}>Test test test test test</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        minWidth: 252,
        backgroundColor: colors.neutralLighten5,
    },
    header: {
        flexDirection: 'row',
    },
    commentAuthor: {
        fontSize: 16,
    },
    commentDate: {
        marginLeft: 5,
        color: colors.neutral,
        fontSize: 16,
    },
    commentContent: {
        marginTop: 2,
        fontSize: 16,
        width: '100%',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default ChatRoomCommentBaloon;
