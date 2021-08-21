import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import TitledHeader from '../components/headers/TitledHeader';
import HeaderTitleText from '../components/headers/HeaderTitleText';
import LiveCentralBottomNavbar from '../components/navbars/LiveCentralBottomNavbar';
import TopSearchMovies from '../components/whatsTrending/TopSearchMovies';
import TopSearchBooks from '../components/whatsTrending/TopSearchBooks';
import TopSearchMusic from '../components/whatsTrending/TopSearchMusic';
import TopSearchTvSeries from '../components/whatsTrending/TopSearchTvSeries';

const WhatsTrending = () => {
    return (
        <View style={styles.container}>
            <TitledHeader>
                <HeaderTitleText title="What's Trending" />
            </TitledHeader>

            <View
                style={{
                    width: '100%',
                    height: 51,
                    backgroundColor: '#000',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontFamily: 'Roboto-Bold',
                        color: '#fff',
                        marginLeft: 13,
                    }}>
                    Check out our partners
                </Text>

                <Image
                    source={require('../images/ptc.png')}
                    style={{width: 180, height: 40, marginLeft: 10}}
                />
            </View>

            <ScrollView style={{backgroundColor: '#fff', paddingBottom: 10}}>
                <Text
                    style={{
                        margin: 10,
                        fontFamily: 'Roboto-Bold',
                        fontSize: 18,
                    }}>
                    Top 10 Searched Movies
                </Text>

                <View style={{width: '100%', height: 151}}>
                    <TopSearchMovies />
                </View>

                <Text
                    style={{
                        margin: 10,
                        fontFamily: 'Roboto-Bold',
                        fontSize: 18,
                    }}>
                    Top 10 Searched TV Series
                </Text>

                <View style={{width: '100%', height: 151}}>
                    <TopSearchTvSeries />
                </View>

                <Text
                    style={{
                        margin: 10,
                        fontFamily: 'Roboto-Bold',
                        fontSize: 18,
                    }}>
                    Top 10 Searched Books
                </Text>

                <View style={{width: '100%', height: 151}}>
                    <TopSearchBooks />
                </View>

                <Text
                    style={{
                        margin: 10,
                        fontFamily: 'Roboto-Bold',
                        fontSize: 18,
                    }}>
                    Top 10 Searched Music
                </Text>

                <View style={{width: '100%', height: 151}}>
                    <TopSearchMusic />
                </View>

                <View style={{width: '100%', height: 220}}></View>
            </ScrollView>

            <LiveCentralBottomNavbar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
});

export default WhatsTrending;
