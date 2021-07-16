import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';
import colors from '../constants/colors';

export default class RadioButton extends Component {
    state = {
        value: this.props.defaultOption || '',
    };

    selectOption = optionItem => {
        this.setState({
            value: optionItem.key,
        });
    };

    renderOptionItem = (optionItem, selectOption) => {
        if (optionItem.text) {
            return (
                <Pressable onPress={selectOption}>
                    <Text style={styles.optionItem}>{optionItem.text}</Text>
                </Pressable>
            );
        } else if (optionItem.render) {
            return (
                <Pressable onPress={selectOption} style={styles.optionItem}>
                    {optionItem.render()}
                </Pressable>
            );
        }
    };

    render() {
        const {options} = this.props;
        const {value} = this.state;

        return (
            <View>
                {options.map(optionItem => {
                    return (
                        <View key={optionItem.key} style={styles.container}>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.selectOption(optionItem);
                                }}>
                                {value === optionItem.key && (
                                    <View style={styles.selectedRb} />
                                )}
                            </TouchableOpacity>

                            {this.renderOptionItem(optionItem, () =>
                                this.selectOption(optionItem),
                            )}
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    optionItem: {
        flex: 1,
        marginLeft: 20,
        fontSize: 20,
        color: '#000',
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
