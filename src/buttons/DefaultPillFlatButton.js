import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../constants/colors';

const DefaultPillFlatButton = props => {
    const {
        style,
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
                            ? colors.primary
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
        borderWidth: 2,
        borderRadius: 60,
        borderColor: colors.dark,
        paddingVertical: 9,
        paddingHorizontal: 14,
        minWidth: 80,
        backgroundColor: colors.default,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.light,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'none',
    },
    buttonInverted: {
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 8,
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

export default DefaultPillFlatButton;
