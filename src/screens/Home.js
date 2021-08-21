import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import DefaultHeader from '../components/headers/DefaultHeader';
import MainTopNavbar from '../components/navbars/MainTopNavbar';
import MainBottomNavbar from '../components/navbars/MainBottomNavbar';
import HomeFeed from './HomeFeed';

const Home = () => {
    return (
        <View style={styles.container}>
            <DefaultHeader style={styles.screenHeader} />
            <MainTopNavbar />
            <HomeFeed />
            <MainBottomNavbar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
    screenHeader: {
        paddingTop: 25,
        paddingHorizontal: 20,
    },
});

export default Home;
