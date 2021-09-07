import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import colors from '../../constants/colors';
import LandscapeSidePanelSectionHeader from './LandscapeSidePanelSectionHeader';
import PreLiveQuestionItem from './PreLiveQuestionItem';

const preLiveQuestions = [
    {
        id: 1,
        author: {
            username: 'iammusic',
            userAvatar: require('../../assets/images/preLiveQuestions/pre-live-question-user-avatar-1-3x.png'),
        },
        content: 'How did you get started in music?',
        addressed: false,
        thumbsUpReactCount: 150,
        heartReactCount: 16,
    },
    {
        id: 2,
        author: {
            username: 'mystyle101',
            userAvatar: require('../../assets/images/preLiveQuestions/pre-live-question-user-avatar-2-3x.png'),
        },
        content: "Advice for solving writer's block?",
        addressed: true,
        thumbsUpReactCount: 250,
        heartReactCount: 5,
    },
];

const PreLiveQuestions = props => {
    const {contentContainerStyle} = props;

    return (
        <View style={[styles.container, contentContainerStyle]}>
            <LandscapeSidePanelSectionHeader
                renderHeaderTitle={() => {
                    return (
                        <Text style={styles.headerText}>
                            <Text style={styles.boldText}>08</Text> Pre-live
                            Questions Remaining
                        </Text>
                    );
                }}
            />

            <FlatList
                contentContainerStyle={{paddingBottom: 21}}
                style={styles.preLiveQuestionList}
                data={preLiveQuestions}
                renderItem={({item: question}) => (
                    <PreLiveQuestionItem question={question} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
    },
    headerText: {
        fontSize: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    preLiveQuestionList: {
        paddingHorizontal: 10,
    },
});

export default PreLiveQuestions;
