import React from 'react';
import {View, StyleSheet} from 'react-native';

const HeaderTitleContainer = props => {
    const {children} = props;

    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 2,
        width: '90%',
    },
});

export default HeaderTitleContainer;
