import React, {useContext, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

import {ActionsOverlayContext} from '../../context/types';

const TopActionBar = props => {
    const {displayStatusBar} = props;
    const actionOverlayContext = useContext(ActionsOverlayContext);

    if (!actionOverlayContext) {
        throw new Error(
            'TopActionBar should be called inside ActionsOverlay component',
        );
    }

    const renderStatusBar = () => {
        if (displayStatusBar) {
            return (
                <View style={styles.statusBar}>
                    <View style={styles.statusBarItemCard}>
                        <Image
                            source={require('../../assets/icons/live-time-3x.png')}
                            style={styles.statusBarItemIcon}
                        />
                        <Text style={styles.statusBarItemText}>00:12</Text>
                    </View>

                    <View style={styles.statusBarItemCard}>
                        <Image
                            source={require('../../assets/icons/live-tip-3x.png')}
                            style={styles.statusBarItemIcon}
                        />
                        <Text style={styles.statusBarItemText}>$15</Text>
                    </View>

                    <View style={styles.statusBarItemCard}>
                        <Image
                            source={require('../../assets/icons/live-viewing-count-3x.png')}
                            style={styles.statusBarItemIcon}
                        />
                        <Text style={styles.statusBarItemText}>300</Text>
                    </View>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topActionBarLeft}>
                <Image
                    source={require('../../assets/icons/star-3x.png')}
                    style={styles.starIcon}
                />
            </View>

            {renderStatusBar()}

            <View style={styles.topActionBarRight}>
                <Image
                    source={require('../../assets/icons/recording-ellipse-3x.png')}
                    style={styles.recordingEllipse}
                />

                <Text
                    style={{
                        textAlign: 'right',
                        fontFamily: 'Montserrat-SemiBold',
                        color: '#fff',
                        fontSize: 18,
                    }}>
                    Live
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 15,
    },
    topActionBarLeft: {
        marginRight: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    topActionBarRight: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    starIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    recordingEllipse: {
        width: 14,
        height: 14,
        marginRight: 5,
        alignSelf: 'center',
    },
    statusBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    statusBarItemCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    statusBarItemIcon: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
    },
    statusBarItemText: {
        marginLeft: 7,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.light,
    },
});

export default TopActionBar;
