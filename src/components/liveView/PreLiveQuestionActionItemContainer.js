import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';

import colors from '../../constants/colors';

const PreLiveQuestionActionItemContainer = props => {
    const {
        children,
        style = {backgroundColor: colors.light},
        cardElevation = 4,
        cardMaxElevation = 2,
        cornerRadius = 60,
    } = props;

    return (
        <CardView
            style={[styles.container, style]}
            cardElevation={cardElevation}
            cardMaxElevation={cardMaxElevation}
            cornerRadius={cornerRadius}>
            {children}
        </CardView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 60,
        paddingHorizontal: 8,
    },
});

export default PreLiveQuestionActionItemContainer;
