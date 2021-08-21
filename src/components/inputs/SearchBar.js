import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import FormTextInput from '../forms/FormTextInput';

const SearchBar = props => {
    const {containerStyle, textInputStyle, ...otherProps} = props;
    return (
        <View style={[styles.container, containerStyle]}>
            <Image
                style={styles.searchIcon}
                source={require('../../assets/icons/search-3x.png')}
            />

            <FormTextInput
                style={[styles.textInput, textInputStyle]}
                {...otherProps}
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        backgroundColor: colors.neutralLighten4,
    },
    searchIcon: {
        marginLeft: 10,
        marginRight: 8,
        height: 14,
        width: 14,
        resizeMode: 'contain',
    },
    textInput: {
        flex: 1,
        height: 32,
        fontSize: 12,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        paddingLeft: 0,
        backgroundColor: colors.neutralLighten4,
        fontWeight: '700',
        fontSize: 12,
    },
});

export default SearchBar;
