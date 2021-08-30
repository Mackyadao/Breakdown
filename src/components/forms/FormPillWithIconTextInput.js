import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

import FormTextInput from './FormTextInput';

const FormPillWithIconTextInput = props => {
    const {style, containerStyle, iconSource, iconStyle, ...otherProps} = props;

    const renderIcon = () => {
        if (iconSource) {
            return (
                <Image style={[styles.icon, iconStyle]} source={iconSource} />
            );
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {renderIcon()}

            <FormTextInput style={[styles.textInput, style]} {...otherProps} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.neutralLighten3,
        borderRadius: 60,
    },
    icon: {
        height: 17,
        width: 17,
        marginLeft: 16,
        resizeMode: 'contain',
    },
    textInput: {
        flex: 1,
        height: 39,
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 16,
    },
});

export default FormPillWithIconTextInput;
