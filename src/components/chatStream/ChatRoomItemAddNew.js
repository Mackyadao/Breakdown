import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const ChatRoomItemAddNew = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circularContainer}>
                <Image
                    style={styles.plusIcon}
                    source={require('../../assets/icons/plus-icon-3x.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.light,
        minHeight: 166,
    },
    circularContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 78 / 2,
        height: 78,
        width: 78,
        borderColor: colors.neutralLighten4,
    },
    plusIcon: {
        width: 21,
        height: 21,
    },
});

export default ChatRoomItemAddNew;
