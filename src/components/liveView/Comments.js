import React, {useState} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import FormTextInput from '../forms/FormTextInput';

const Comments = () => {
    const formValuesInitState = {
        author: {
            username: 'tbastudios',
            userAvatar: require('../../assets/images/live-comment-user-avatar-0-3x.png'),
        },
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

    const commentListItems = comments.map(comment => {
        return (
            <View key={comment.id} style={styles.commentItem}>
                <View style={styles.userAvatarContainer}>
                    <Image
                        style={styles.userAvatar}
                        source={comment.author.userAvatar}
                    />
                </View>

                <View style={styles.commentContainer}>
                    <Text style={styles.commentAuthor}>
                        {comment.author.username}
                    </Text>

                    <Text style={styles.commentContent}>{comment.content}</Text>
                    <View style={styles.commentActionsContainer}>
                        <Pressable>
                            <Text style={styles.actionText}>Reply</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    });

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
            <View style={styles.commentList}>{commentListItems}</View>

            <View style={styles.newCommentSection}>
                <View style={styles.newCommentInputContainer}>
                    <FormTextInput
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
        width: '100%',
        paddingTop: 12,
        paddingHorizontal: 12,
        paddingBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        shadowColor: colors.dark,
    },
    commentItem: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
    },
    userAvatarContainer: {},
    userAvatar: {
        height: 35,
        width: 35,
    },
    commentContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    commentAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
    },
    commentContent: {
        fontSize: 16,
        color: colors.light,
    },
    commentActionsContainer: {
        padding: 2,
    },
    actionText: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
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
