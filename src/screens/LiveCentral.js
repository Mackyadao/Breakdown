import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import TitledHeader from '../components/headers/TitledHeader';
import HeaderTitleText from '../components/headers/HeaderTitleText';
import HeaderTitleIcon from '../components/headers/HeaderTitleIcon';
import LiveCentralTopNavbar from '../components/navbars/LiveCentralTopNavbar';
import LiveDashboard from '../components/liveCentral/LiveDashboard';

const LiveCentral = props => {
    const {navigation} = props;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TitledHeader>
                    <HeaderTitleText title="Live Central" />
                    <HeaderTitleIcon source={require('../images/live.png')} />
                </TitledHeader>

                <LiveCentralTopNavbar />
            </View>

            <LiveDashboard />

            {/* TODO: Use the MainBottomNavbar component here */}
            <View
                style={{
                    width: '100%',
                    height: 43,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={styles.NavBarTouchOpa}
                    onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../images/home.png')}
                        style={styles.NavBarIcons}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.NavBarTouchOpa}
                    onPress={() => navigation.navigate('NotificationPage')}>
                    <Image
                        source={require('../images/notificationBell.png')}
                        style={styles.NavBarIcons}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarTouchOpa}>
                    <Image
                        source={require('../images/plus2.png')}
                        style={styles.NavBarIcons}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarTouchOpa}>
                    <Image
                        source={require('../images/menu3.png')}
                        style={styles.NavBarIcons}
                    />
                </TouchableOpacity>
            </View>
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
    NavBarTouchOpa: {
        flex: 1,
        justifyContent: 'center',
    },
    NavBarIcons: {
        height: 30,
        width: 30,
        alignSelf: 'center',
    },
    ProfileBtn: {
        width: 40,
        height: 40,
    },
    ProfileBtnContainer: {
        marginLeft: 12,
    },
});

export default LiveCentral;
