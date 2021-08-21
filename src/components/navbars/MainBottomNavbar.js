import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const MainBottomNavbar = props => {
    const {navigation} = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navbarTouchOpa}>
                <Image
                    source={require('../../assets/icons/home-solid-3x.png')}
                    style={styles.navbarIcons}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navbarTouchOpa}
                onPress={() => navigation.navigate('NotificationPage')}>
                <Image
                    source={require('../../assets/icons/notification-3x.png')}
                    style={styles.navbarIcons}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navbarTouchOpa}>
                <Image
                    source={require('../../assets/icons/user-options-3x.png')}
                    style={styles.navbarIcons}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 43,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    navbarTouchOpa: {
        flex: 1,
        justifyContent: 'center',
    },
    navbarIcons: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});

export default withNavigation(MainBottomNavbar);
