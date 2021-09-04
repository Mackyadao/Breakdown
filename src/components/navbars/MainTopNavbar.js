import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import DefaultNavbarButton from '../buttons/DefaultNavbarButton';

const MainTopNavbar = props => {
    const {style, navigation} = props;

    return (
        <View style={[styles.container, style]}>
            <DefaultNavbarButton
                title="Chat Stream"
                iconSource={require('../../images/conversation1.png')}
            />

            <DefaultNavbarButton
                title="Live Central"
                iconSource={require('../../images/live.png')}
                iconStyle={{width: 15, height: 15, margin: 2}}
                onPress={() => navigation.navigate('LiveCentral')}
            />

            <DefaultNavbarButton
                title="What's Trending"
                iconSource={require('../../images/Trending.png')}
                iconStyle={{width: 9.1, height: 13.26, margin: 2}}
                onPress={() => navigation.navigate('WhatsTrending')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 26,
        marginBottom: 5,
        paddingVertical: 3,
        width: '100%',
    },
});

export default withNavigation(MainTopNavbar);
