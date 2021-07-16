import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const MainBottomNavbar = props => {
    const {navigation} = props;
    return (
        <View
            style={{
                width: '100%',
                height: 43,
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
            <TouchableOpacity style={styles.NavBarTouchOpa}>
                <Image
                    source={require('../../images/homeselected.png')}
                    style={styles.NavBarIcons}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.NavBarTouchOpa}
                onPress={() => navigation.navigate('NotificationPage')}>
                <Image
                    source={require('../../images/notificationBell.png')}
                    style={styles.NavBarIcons}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.NavBarTouchOpa}>
                <Image
                    source={require('../../images/plus2.png')}
                    style={styles.NavBarIcons}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.NavBarTouchOpa}>
                <Image
                    source={require('../../images/menu3.png')}
                    style={styles.NavBarIcons}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    NavBarTouchOpa: {
        flex: 1,
        justifyContent: 'center',
    },
    NavBarIcons: {
        height: 30,
        width: 30,
        alignSelf: 'center',
    },
});

export default withNavigation(MainBottomNavbar);
