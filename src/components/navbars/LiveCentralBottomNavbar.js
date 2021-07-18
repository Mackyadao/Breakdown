import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const LiveCentralBottomNavbar = props => {
    const {navigation} = props;

    return (
        <View
            style={{
                width: '100%',
                height: 43,
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
            <TouchableOpacity
                style={styles.navbarTouchOpa}
                onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../../assets/icons/home-3x.png')}
                    style={styles.navbarIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarTouchOpa}>
                <Image
                    source={require('../../assets/icons/search-3x.png')}
                    style={styles.navbarIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navbarTouchOpa}
                onPress={() => navigation.navigate('NotificationPage')}>
                <Image
                    source={require('../../assets/icons/notification-3x.png')}
                    style={styles.navbarIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navbarTouchOpa}>
                <Image
                    source={require('../../assets/icons/user-options-3x.png')}
                    style={styles.navbarIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbarTouchOpa: {
        flex: 1,
        justifyContent: 'center',
    },
    navbarIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});

export default withNavigation(LiveCentralBottomNavbar);
