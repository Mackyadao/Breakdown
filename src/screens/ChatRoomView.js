import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import ChatRoomTopNavbar from '../components/navbars/ChatRoomTopNavbar';

import colors from '../constants/colors';
import ChatRoomComments from '../components/chatStream/ChatRoomComments';
import ChatRoomCommentInput from '../components/chatStream/ChatRoomCommentInput';
import {ChatRoomContext} from '../context/types';

// dummy auth user
const authUser = {
    username: 'tbastudios',
    userAvatar: require('../assets/images/live-comment-user-avatar-0-3x.png'),
};

const ChatRoomView = props => {
    const {navigation} = props;
    const [targetCommentToReply, setTargetCommentToReply] = useState();
    const newCommentFormValuesInitState = {
        author: authUser,
        content: '',
    };
    const [newCommentFormValues, setNewCommentFormValues] = useState(
        newCommentFormValuesInitState,
    );
    const [comments, setComments] = useState([
        {
            id: 1,
            author: {
                username: 'mystyle01',
                userAvatar: require('../assets/images/preLiveQuestions/pre-live-question-user-avatar-1-3x.png'),
            },
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ante ante. Cras mollis felis et dui venenatis rhoncus.',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'jaxonphotogroup',
                        userAvatar: require('../assets/images/live-comment-user-avatar-2-3x.png'),
                    },
                    content:
                        '@mystyle01 Maecenas ac ante ante. Cras mollis felis et dui venenatis rhoncus.',
                    date: '2h',
                },
            ],
        },
        {
            id: 2,
            author: {
                username: 'bobbydigital',
                userAvatar: require('../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content:
                'Ut enim arcu, malesuada quis venenatis eu, hendrerit ac lectus. Vivamus lobortis blandit ante, eget tristique orci maximus id.',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'jaxonphotogroup',
                        userAvatar: require('../assets/images/live-comment-user-avatar-2-3x.png'),
                    },
                    content:
                        '@bobbydigital Vivamus lobortis blandit ante, eget tristique orci maximus id.',
                    date: '2h',
                },
            ],
        },
    ]);

    const newCommentInput = useRef(null);
    const chatRoom = navigation.getParam('chatRoom');

    const addComment = () => {
        setComments(currentComments => {
            return [
                ...currentComments,
                {
                    // set comment id
                    id: currentComments[currentComments.length - 1].id + 1,
                    ...newCommentFormValues,
                },
            ];
        });
    };

    const addCommentReply = commentId => {
        const newCommentReply = newCommentFormValues;

        setComments(currentComments => {
            let lastCommentReply = null;

            const updatedComments = currentComments.map(currentComment => {
                if (currentComment.replies) {
                    lastCommentReply =
                        currentComment.replies[
                            currentComment.replies.length - 1
                        ];
                }

                const newCommentReplyId = lastCommentReply
                    ? lastCommentReply.id + 1
                    : 1;

                if (currentComment.id === commentId) {
                    currentComment.replies.push({
                        id: newCommentReplyId,
                        ...newCommentReply,
                    });
                }

                return currentComment;
            });

            return updatedComments;
        });
    };

    const handleCommentInputChange = (fieldValue, fieldName) => {
        setNewCommentFormValues(values => {
            return {...values, [fieldName]: fieldValue};
        });
    };

    const handleCommentInputSubmit = () => {
        if (!newCommentFormValues.content.length > 0) {
            return;
        }

        if (targetCommentToReply) {
            addCommentReply(targetCommentToReply);
        } else {
            addComment();
        }

        setNewCommentFormValues(newCommentFormValuesInitState);
        newCommentInput.current.blur();
        setTargetCommentToReply(null);
    };

    const handleReplyPress = targetCommentId => {
        setTargetCommentToReply(targetCommentId);

        let targetComment = null;

        for (let comment of comments) {
            if (comment.id === targetCommentId) {
                targetComment = comment;
            }
        }

        setNewCommentFormValues(currentFormValues => {
            const updatedFormValues = {...currentFormValues};
            updatedFormValues.content = `@${targetComment.author.username} `;

            return updatedFormValues;
        });

        newCommentInput.current.focus();
    };

    return (
        <ChatRoomContext.Provider
            value={{
                newComment: newCommentFormValues,
                handleReplyPress,
                addCommentReply,
            }}>
            <View style={styles.container}>
                <ChatRoomTopNavbar chatRoom={chatRoom} />
                <ChatRoomComments comments={comments} />
                <ChatRoomCommentInput
                    ref={newCommentInput}
                    handleChangeText={handleCommentInputChange}
                    handleSubmit={handleCommentInputSubmit}
                />
            </View>
        </ChatRoomContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutralLighten4,
    },
});

export default ChatRoomView;
