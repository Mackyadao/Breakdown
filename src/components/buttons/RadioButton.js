import React, {useState} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';

import colors from '../../constants/colors';

const RadioButton = props => {
    const {
        options,
        name,
        value,
        onChangeValue,
        orientation,
        radioCircleStyle,
        optionItemContainerStyle,
        optionItemLabelContainerStyle,
        labelProps,
    } = props;

    const [selectedValue, setSelectedValue] = useState(value || '');

    const selectOption = optionItem => {
        setSelectedValue(optionItem.value);

        onChangeValue && onChangeValue({name, value: optionItem.value});
    };

    const renderOptionItemRadioCirle = optionItem => {
        return (
            <TouchableOpacity
                /**
                 * Note: styles.radioCircle (its default style)
                 * should always be the last style in the array
                 * to avoid the overrides from radioCircleStyle
                 * prop that may break the default style of the
                 * radio circle
                 */
                style={[radioCircleStyle, styles.radioCircle]}
                onPress={() => {
                    selectOption(optionItem);
                }}>
                {selectedValue === optionItem.value && (
                    <View style={styles.selectedRb} />
                )}
            </TouchableOpacity>
        );
    };

    const renderOptionItemLabel = (optionItem, onPress) => {
        if (optionItem.label) {
            return (
                <Pressable onPress={onPress} {...labelProps}>
                    <Text
                        style={[
                            styles.optionItemLabelContainer,
                            optionItemLabelContainerStyle,
                        ]}>
                        {optionItem.label}
                    </Text>
                </Pressable>
            );
        } else if (optionItem.renderLabel) {
            return optionItem.renderLabel({
                onPress,
                style: styles.optionItemLabelContainer,
                ...labelProps,
            });
        }
    };

    const renderOptionItem = optionItem => {
        if (orientation === 'right') {
            return (
                <>
                    {renderOptionItemLabel(optionItem, () =>
                        selectOption(optionItem),
                    )}

                    {renderOptionItemRadioCirle(optionItem)}
                </>
            );
        } else {
            return (
                <>
                    {renderOptionItemRadioCirle(optionItem)}

                    {renderOptionItemLabel(optionItem, () =>
                        selectOption(optionItem),
                    )}
                </>
            );
        }
    };

    return (
        <>
            {options.map(optionItem => {
                return (
                    <View
                        key={optionItem.value}
                        style={[
                            styles.optionItemContainer,
                            optionItemContainerStyle,
                        ]}>
                        {renderOptionItem(optionItem)}
                    </View>
                );
            })}
        </>
    );
};

const styles = StyleSheet.create({
    optionItemContainer: {
        marginBottom: 32,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    optionItemLabelContainer: {
        flex: 1,
        marginLeft: 20,
        fontSize: 20,
        color: colors.dark,
        fontWeight: '700',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.dark,
        /**
         * set all kinds of padding values
         * (padding, paddingTop, paddingLeft, and so on)
         * to prevent the overrides from radioCircleStyle
         * prop of this component that may break the default
         * style of the radio circle
         */
        padding: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: colors.dark,
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

export default RadioButton;
