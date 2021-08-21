import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const DefaultNavbarButton = props => {
    const {containerStyle, title, iconSource, iconStyle, ...otherProps} = props;

    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            {...otherProps}>
            <Image source={iconSource} style={[styles.icon, iconStyle]} />
            <View>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderWidth: 1,
        padding: 3,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderColor: colors.neutralLighten2,
        borderRadius: 5,
    },
    icon: {
        width: 15,
        height: 15,
        margin: 2,
        marginRight: 4,
    },
    buttonText: {
        fontSize: 10,
        fontWeight: '700',
    },
});

export default DefaultNavbarButton;
