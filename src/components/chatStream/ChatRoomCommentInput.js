import React from 'react';
import {View, Image, Pressable, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import FormTextInput from '../forms/FormTextInput';

const ChatRoomCommentInput = props => {
    const {newComment, handleChangeText, handleSubmit} = props;

    return (
        <View style={styles.newCommentSection}>
            <View style={styles.newCommentInputContainer}>
                <FormTextInput
                    // ref={newCommentInput}
                    name="content"
                    style={styles.newCommentInput}
                    placeholder="Share your thoughts..."
                    onChangeText={handleChangeText}
                    value={newComment.content}
                />
                <Pressable
                    onPress={handleSubmit}
                    style={styles.newCommentSendIconContainer}>
                    <Image
                        style={styles.newCommentSendIcon}
                        source={require('../../assets/icons/send-message-solid-gray-3x.png')}
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    newCommentSection: {
        paddingHorizontal: 14,
        paddingVertical: 5,
        backgroundColor: colors.light,
    },
    newCommentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
        backgroundColor: colors.neutralLighten5,
    },
    newCommentInput: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        fontWeight: 'bold',
    },
    newCommentSendIconContainer: {
        padding: 6,
        paddingLeft: 20,
    },
    newCommentSendIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
});

export default ChatRoomCommentInput;
