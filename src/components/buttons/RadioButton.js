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
        const {value} = this.state;

        return (
            <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                    this.selectOption(optionItem);
                }}>
                {value === optionItem.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
        );
    };

    renderOptionItemValue = (optionItem, onPress) => {
        if (optionItem.text) {
            return (
                <Pressable onPress={onPress}>
                    <Text style={styles.optionItem}>{optionItem.text}</Text>
                </Pressable>
            );
        } else if (optionItem.render) {
            return (
                <Pressable onPress={onPress} style={styles.optionItem}>
                    {optionItem.render()}
                </Pressable>
            );
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
        const {optionItemStyle, options} = this.props;

        return (
            <>
                {options.map(optionItem => {
                    return (
                        <View
                            key={optionItem.key}
                            style={[
                                styles.optionItemContainer,
                                optionItemStyle,
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
    optionItem: {
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
