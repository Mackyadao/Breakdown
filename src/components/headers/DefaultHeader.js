import React from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {withNavigation} from 'react-navigation';

import SearchBar from '../inputs/SearchBar';

const DefaultHeader = props => {
    const {style, navigation} = props;
    return (
        <View style={[styles.container, style]}>
            <Image
                source={require('../../assets/logo/iconicMark/iconicMark-colored-3x.png')}
                style={styles.logo}
            />

            <SearchBar
                containerStyle={styles.searchBarContainer}
                placeholder="Search or create a Chat Gallery"
                onFocus={() => navigation.navigate('SearchPage')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 42,
        width: 42,
        marginRight: 10,
    },
    searchBarContainer: {
        flex: 1,
        marginLeft: 10,
    },
});

export default withNavigation(DefaultHeader);
