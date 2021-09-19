import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';
import colors from '../../constants/colors';

export default class RadioButton extends Component {
    state = {
        value: this.props.defaultOption || '',
    };

    selectOption = optionItem => {
        this.setState({
            value: optionItem.key,
        });
    };

    renderOptionItemRadioCirle = optionItem => {
        const {radioCircleStyle} = this.props;
        const {value} = this.state;

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
                    this.selectOption(optionItem);
                }}>
                {value === optionItem.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
        );
    };

    renderOptionItemValue = (optionItem, onPress) => {
        const {optionItemValueContainerStyle} = this.props;

        if (optionItem.value) {
            return (
                <Pressable onPress={onPress}>
                    <Text
                        style={[
                            styles.optionItemValueContainer,
                            optionItemValueContainerStyle,
                        ]}>
                        {optionItem.value}
                    </Text>
                </Pressable>
            );
        } else if (optionItem.renderValue) {
            return optionItem.renderValue({
                onPress,
                style: styles.optionItemValueContainer,
            });
        }
    };

    renderOptionItem = optionItem => {
        const {orientation} = this.props;

        if (orientation === 'right') {
            return (
                <>
                    {this.renderOptionItemValue(optionItem, () =>
                        this.selectOption(optionItem),
                    )}

                    {this.renderOptionItemRadioCirle(optionItem)}
                </>
            );
        } else {
            return (
                <>
                    {this.renderOptionItemRadioCirle(optionItem)}

                    {this.renderOptionItemValue(optionItem, () =>
                        this.selectOption(optionItem),
                    )}
                </>
            );
        }
    };

    render() {
        const {optionItemContainerStyle, options} = this.props;

        return (
            <>
                {options.map(optionItem => {
                    return (
                        <View
                            key={optionItem.key}
                            style={[
                                styles.optionItemContainer,
                                optionItemContainerStyle,
                            ]}>
                            {this.renderOptionItem(optionItem)}
                        </View>
                    );
                })}
            </>
        );
    }
}

const styles = StyleSheet.create({
    optionItemContainer: {
        marginBottom: 32,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    optionItemValueContainer: {
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
