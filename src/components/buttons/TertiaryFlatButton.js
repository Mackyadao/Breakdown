import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../constants/colors';

const TertiaryFlatButton = props => {
    const {
        style,
        buttonStyle,
        title,
        icon,
        iconColor: customColor,
        iconSize = 24,
        onPress,
        inverted = false,
        disabled,
        isLoading,
    } = props;

    let iconColor = colors.light;

    if (inverted) {
        iconColor = customColor ? customColor : colors.dark;
    } else if (disabled) {
        iconColor = colors.neutral;
    }

    const renderIcon = () => {
        if (icon) {
            return (
                <View style={styles.iconContainer}>
                    <AntDesign name={icon} size={iconSize} color={iconColor} />
                </View>
            );
        }
    };

    const renderButtonValue = () => {
        if (isLoading) {
            return (
                <ActivityIndicator
                    color={
                        inverted
                            ? colors.tertiaryAccent1
                            : disabled
                            ? colors.neutral
                            : colors.light
                    }
                    style={styles.indicator}
                />
            );
        }

        return (
            <Text
                style={[
                    styles.buttonText,
                    inverted && styles.buttonTextInverted,
                    disabled && styles.buttonTextDisabled,
                ]}>
                {title}
            </Text>
        );
    };

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={style}>
            <View
                style={[
                    styles.button,
                    buttonStyle,
                    inverted && styles.buttonInverted,
                    disabled && styles.buttonDisabled,
                ]}>
                {renderIcon()}
                {renderButtonValue()}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 38,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.dark,
        paddingHorizontal: 8,
        backgroundColor: colors.tertiaryAccent1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.light,
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform: 'none',
        fontFamily: 'Oswald-Bold',
    },
    buttonInverted: {
        borderColor: colors.dark,
        backgroundColor: 'transparent',
    },
    buttonTextInverted: {
        color: colors.dark,
    },
    buttonDisabled: {
        borderColor: colors.neutralLighten4,
        backgroundColor: colors.neutralLighten4,
    },
    buttonTextDisabled: {
        color: colors.neutralLighten2,
    },
    indicator: {
        alignSelf: 'center',
    },
    iconContainer: {
        marginRight: 10,
    },
});

export default TertiaryFlatButton;
