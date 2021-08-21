import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

import FormTextInput from './FormTextInput';

const FormPillTextInput = props => {
    const {style, ...otherProps} = props;

    return <FormTextInput style={[styles.textInput, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
    textInput: {
        height: 64,
        borderWidth: 1,
        borderColor: colors.neutralLighten3,
        borderRadius: 60,
        paddingHorizontal: 19,
        paddingVertical: 19,
    },
});

export default FormPillTextInput;
