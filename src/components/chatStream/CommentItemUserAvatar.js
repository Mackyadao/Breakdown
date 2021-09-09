import React from 'react';
import {View, Image, Pressable, StyleSheet} from 'react-native';

const CommentItemUserAvatar = props => {
    const {style, source} = props;

    return (
        <View style={styles.userAvatarContainer}>
            <Pressable>
                <Image style={[styles.userAvatar, style]} source={source} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    userAvatarContainer: {},
    userAvatar: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
});

export default CommentItemUserAvatar;
