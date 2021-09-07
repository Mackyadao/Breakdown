import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import PreLiveQuestionActionItemContainer from './PreLiveQuestionActionItemContainer';

const PreLiveQuestionItem = props => {
    const {question} = props;

    return (
        <View style={styles.container}>
            <View style={styles.userAvatarContainer}>
                <Image
                    style={styles.userAvatar}
                    source={question.author.userAvatar}
                />
            </View>

            <View style={styles.questionContainer}>
                <Text
                    style={
                        styles.questionAuthor
                    }>{`@${question.author.username}`}</Text>

                <Text style={styles.questionContent}>{question.content}</Text>

                <View style={styles.questionActionsContainer}>
                    <PreLiveQuestionActionItemContainer
                        style={{
                            backgroundColor: question.addressed
                                ? colors.default
                                : colors.light,
                        }}>
                        <Text
                            style={{
                                color: question.addressed
                                    ? colors.light
                                    : colors.dark,
                            }}>
                            Addressed
                        </Text>
                    </PreLiveQuestionActionItemContainer>

                    <PreLiveQuestionActionItemContainer>
                        <Image
                            style={[
                                styles.actionIcon,
                                {width: 15.5, height: 16},
                            ]}
                            source={require('../../assets/icons/pre-live-question-action-thumbs-up-3x.png')}
                        />
                        <Text>{question.thumbsUpReactCount}</Text>
                    </PreLiveQuestionActionItemContainer>

                    <PreLiveQuestionActionItemContainer>
                        <Image
                            style={[
                                styles.actionIcon,
                                {width: 16, height: 13.26},
                            ]}
                            source={require('../../assets/icons/pre-live-question-action-heart-3x.png')}
                        />
                        <Text>{question.heartReactCount}</Text>
                    </PreLiveQuestionActionItemContainer>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    userAvatarContainer: {
        borderColor: 'green',
    },
    userAvatar: {
        height: 35,
        width: 35,
    },
    questionContainer: {
        marginHorizontal: 10,
    },
    questionAuthor: {
        fontSize: 18,
        color: colors.dark,
    },
    questionContent: {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.dark,
    },
    questionActionsContainer: {
        flexDirection: 'row',
        padding: 2,
    },
    actionIcon: {
        marginRight: 5,
        height: 14,
        width: 16,
        resizeMode: 'contain',
    },
    actionText: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light,
    },
});

export default PreLiveQuestionItem;
