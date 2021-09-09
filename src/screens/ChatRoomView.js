import React, {useState} from 'react';
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
                userAvatar: require('../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ante ante. Cras mollis felis et dui venenatis rhoncus.',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content:
                        'Maecenas ac ante ante. Cras mollis felis et dui venenatis rhoncus.',
                    date: '2h',
                },
                {
                    id: 2,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content: 'Cras mollis felis et dui venenatis rhoncus.',
                    date: '2h',
                },
            ],
        },
        {
            id: 2,
            author: {
                username: 'mystyle01',
                userAvatar: require('../assets/images/live-comment-user-avatar-1-3x.png'),
            },
            content:
                'Ut enim arcu, malesuada quis venenatis eu, hendrerit ac lectus. Vivamus lobortis blandit ante, eget tristique orci maximus id.',
            date: '2h',
            replies: [
                {
                    id: 1,
                    author: {
                        username: 'mystyle01',
                        userAvatar: require('../assets/images/live-comment-user-avatar-1-3x.png'),
                    },
                    content:
                        'Vivamus lobortis blandit ante, eget tristique orci maximus id.',
                    date: '2h',
                },
            ],
        },
    ]);

    const chatRoom = navigation.getParam('chatRoom');

    const handleCommentInputChange = (fieldValue, fieldName) => {
        setNewCommentFormValues(values => {
            return {...values, [fieldName]: fieldValue};
        });
    };

    const handleCommentInputSubmit = () => {
        if (!newCommentFormValues.content.length > 0) {
            return;
        }

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

        setNewCommentFormValues(newCommentFormValuesInitState);
    };

    return (
        <ChatRoomContext.Provider value={{}}>
            <View style={styles.container}>
                <ChatRoomTopNavbar chatRoom={chatRoom} />
                <ChatRoomComments comments={comments} />
                <ChatRoomCommentInput
                    newComment={newCommentFormValues}
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
