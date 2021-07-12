import React from 'react';
import {Text, StyleSheet} from 'react-native';

import fontSizes from '../../constants/fontSizes';
import colors from '../../constants/colors';

const FormInputErrorText = props => {
    const {text, renderErrorMessage, errorMessageStyle} = props;

    if (!text) return null;
    else if (renderErrorMessage) {
        return renderErrorMessage(props);
    }

    return <Text style={[styles.errorMessage, errorMessageStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: fontSizes.inputErrorMessage,
        color: colors.danger,
        marginBottom: 6,
    },
});

export default FormInputErrorText;
