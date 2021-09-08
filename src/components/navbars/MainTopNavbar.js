import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import colors from '../../constants/colors';
import DefaultNavbarButton from '../buttons/DefaultNavbarButton';

const MainTopNavbar = props => {
    const {style, renderCircularImage, navigation} = props;

    return (
        <View style={[styles.container, style]}>
            <DefaultNavbarButton
                title="Chat Stream"
                iconSource={require('../../images/conversation1.png')}
                onPress={() => navigation.navigate('Home')}
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

            {renderCircularImage && renderCircularImage()}
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
        backgroundColor: colors.light,
    },
});

export default withNavigation(MainTopNavbar);
