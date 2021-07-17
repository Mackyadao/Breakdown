import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeaderTitleText = props => {
    const {title, style} = props;

    return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Oswald-Bold',
        fontSize: 42,
        textAlign: 'center',
    },
});

export default HeaderTitleText;
