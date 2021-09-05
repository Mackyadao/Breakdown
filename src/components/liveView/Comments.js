import React, {useState, useRef} from 'react';
import {View, Image, Pressable, FlatList, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import FormTextInput from '../forms/FormTextInput';
import CommentItem from './CommentItem';

// dummy auth user
const authUser = {
    username: 'tbastudios',
    userAvatar: require('../../assets/images/live-comment-user-avatar-0-3x.png'),
};

const Comments = () => {
    const formValuesInitState = {
        author: authUser,
        content: '',
    };
    const [formValues, setFormValues] = useState(formValuesInitState);
    const [comments, setComments] = useState([
        {
            id: 1,
            author: {
                username: 'bobbydigital',
                userAvatar: require('../../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content:
                'I need to master this technique, but these types of shots never work out for me.',
        },
        {
            id: 2,
            author: {
                username: 'jaxonphotogroup',
                userAvatar: require('../../assets/images/live-comment-user-avatar-2-3x.png'),
            },
            content:
                '@bobbydigital It’s definitely an art. What type of ISO are you using?',
        },
        {
            id: 3,
            author: {
                username: 'readallday',
                userAvatar: require('../../assets/images/live-comment-user-avatar-3-3x.png'),
            },
            content: '@novelislife Same here!',
        },
    ]);

    const [focusedCommentId, setFocusedCommentId] = useState(null);
    const commentList = useRef(null);
    const newCommentInput = useRef(null);

    const handleLongPressedCommentItem = commentId => {
        setFocusedCommentId(commentId);
    };

    const handleCommentReplyPress = commentAuthorUsername => {
        setFormValues(values => {
            return {...values, content: `@${commentAuthorUsername} `};
        });

        setFocusedCommentId(null);
        newCommentInput.current.focus();
    };

    const handleChangeText = (fieldValue, fieldName) => {
        setFormValues(values => {
            return {...values, [fieldName]: fieldValue};
        });
    };

    const handleSubmit = () => {
        if (!formValues.content.length > 0) {
            return;
        }

        setComments(currentComments => {
            return [
                ...currentComments,
                {
                    // set comment id
                    id: currentComments[currentComments.length - 1].id + 1,
                    ...formValues,
                },
            ];
        });

        setFormValues(formValuesInitState);
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={commentList}
                contentContainerStyle={{paddingBottom: 21}}
                style={styles.commentList}
                data={comments}
                renderItem={({item: comment}) => (
                    <CommentItem
                        comment={comment}
                        focused={
                            focusedCommentId === comment.id &&
                            comment.author.username !== authUser.username
                                ? true
                                : false
                        }
                        handleLongPress={handleLongPressedCommentItem}
                        handleCommentReplyPress={handleCommentReplyPress}
                    />
                )}
            />

            <View style={styles.newCommentSection}>
                <View style={styles.newCommentInputContainer}>
                    <FormTextInput
                        ref={newCommentInput}
                        name="content"
                        style={styles.newCommentInput}
                        placeholder="Share your thoughts..."
                        onChangeText={handleChangeText}
                        value={formValues.content}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    commentList: {
        maxHeight: 300,
        width: '100%',
        paddingTop: 8,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.3)',
        shadowColor: colors.dark,
    },
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
        backgroundColor: colors.neutralLighten4,
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

export default Comments;
