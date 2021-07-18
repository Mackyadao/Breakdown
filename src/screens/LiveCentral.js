import React from 'react';
import {View, StyleSheet} from 'react-native';

import TitledHeader from '../components/headers/TitledHeader';
import HeaderTitleText from '../components/headers/HeaderTitleText';
import HeaderTitleIcon from '../components/headers/HeaderTitleIcon';
import LiveCentralTopNavbar from '../components/navbars/LiveCentralTopNavbar';
import LiveDashboard from '../components/liveCentral/LiveDashboard';
import LiveCentralBottomNavbar from '../components/navbars/LiveCentralBottomNavbar';

const LiveCentral = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TitledHeader>
                    <HeaderTitleText title="Live Central" />
                    <HeaderTitleIcon source={require('../images/live.png')} />
                </TitledHeader>

                <LiveCentralTopNavbar activeScreen="LiveCentral" />
            </View>

            <LiveDashboard />

            <LiveCentralBottomNavbar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    headerContainer: {
        width: '100%',
        paddingTop: 5,
    },
});

export default LiveCentral;
