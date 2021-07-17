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
            <ScrollView style={{width: '100%', backgroundColor: '#ddd'}}>
                <View style={{backgroundColor: '#fff', marginBottom: 5}}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            flexWrap: 'wrap',
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Anton-Regular',
                                borderBottomRightRadius: 10,
                                borderTopRightRadius: 10,
                                backgroundColor: '#fff',
                                paddingLeft: 10,
                                paddingRight: 10,
                                color: '#fff',
                                backgroundColor: '#000',
                                fontSize: 24,
                                borderWidth: 3,
                                width: '55%',
                            }}>
                            Music
                        </Text>
                        <Image
                            source={require('../images/filter.png')}
                            style={{
                                width: 30,
                                height: 30,
                                position: 'absolute',
                                right: 0,
                                top: '20%',
                            }}
                        />
                    </View>

                    {/* TODO: Use the MainBottomNavbar component here */}
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignSelf: 'center',
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                            }}
                            onPress={() => navigation.navigate('LiveView')}>
                            <Image
                                source={require('../images/sunnysyd.png')}
                                style={{width: 171, height: 209}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                            }}>
                            <Image
                                source={require('../images/guitarhero.png')}
                                style={{width: 171, height: 209}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{backgroundColor: '#fff', marginBottom: 5}}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            flexWrap: 'wrap',
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Anton-Regular',
                                borderBottomRightRadius: 10,
                                borderTopRightRadius: 10,
                                backgroundColor: '#fff',
                                paddingLeft: 10,
                                paddingRight: 10,
                                color: '#fff',
                                backgroundColor: '#000',
                                fontSize: 24,
                                borderWidth: 3,
                                width: '55%',
                            }}>
                            Photography
                        </Text>
                        <Image
                            source={require('../images/filter.png')}
                            style={{
                                width: 30,
                                height: 30,
                                position: 'absolute',
                                right: 0,
                                top: '20%',
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignSelf: 'center',
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                            }}>
                            <Image
                                source={require('../images/snapshot.png')}
                                style={{width: 171, height: 209}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                            }}>
                            <Image
                                source={require('../images/aphotopro.png')}
                                style={{width: 171, height: 209}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
