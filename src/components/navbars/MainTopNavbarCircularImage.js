import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const MainTopNavbarCircularImage = props => {
    const {source} = props;

    if (!source) return null;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={source} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 26 / 2,
        borderColor: colors.neutral,
        position: 'absolute',
        top: '12.5%',
        right: 10,
    },
    image: {
        width: 26,
        height: 26,
        resizeMode: 'cover',
        borderRadius: 26 / 2,
    },
});

export default MainTopNavbarCircularImage;
