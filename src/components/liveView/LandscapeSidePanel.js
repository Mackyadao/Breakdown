import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Comments from './Comments';
import colors from '../../constants/colors';
import PreLiveQuestions from './PreLiveQuestions';
import LandscapeSidePanelSectionHeader from './LandscapeSidePanelSectionHeader';

const LandscapeSidePanel = props => {
    const {contentContainerStyle, isPlaying} = props;

    if (!isPlaying) return null;

    return (
        <View style={[styles.container, contentContainerStyle]}>
            <PreLiveQuestions
                contentContainerStyle={styles.preLiveQuestionsContainer}
            />

            <Comments
                contentContainerStyle={styles.commentsContainer}
                commentListStyle={styles.commentList}
                commentTextColor={colors.dark}
                renderHeader={() => {
                    return (
                        <LandscapeSidePanelSectionHeader
                            style={styles.commentsHeader}
                            renderHeaderTitle={() => {
                                return (
                                    <Text style={styles.commentHeaderTitle}>
                                        Comments
                                    </Text>
                                );
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '45%',
        backgroundColor: colors.neutralLighten4,
    },
    preLiveQuestionsContainer: {
        flex: 1,
        marginBottom: 4,
    },
    commentsContainer: {
        height: '55%',
        position: 'relative',
    },
    commentsHeader: {
        backgroundColor: colors.light,
    },
    commentHeaderTitle: {
        fontSize: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    commentList: {
        maxHeight: 150,
        width: '100%',
        paddingTop: 8,
        paddingHorizontal: 12,
        backgroundColor: colors.light,
    },
});

export default LandscapeSidePanel;
