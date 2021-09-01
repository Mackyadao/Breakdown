import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {ActionsOverlayContext} from '../../context/types';

const TopActionBar = () => {
    const actionOverlayContext = useContext(ActionsOverlayContext);

    if (!actionOverlayContext) {
        throw new Error(
            'TopActionBar should be called inside ActionsOverlay component',
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.topActionBarLeft}>
                <Image
                    source={require('../../assets/icons/star-3x.png')}
                    style={styles.starIcon}
                />
            </View>

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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 15,
    },
    topActionBarLeft: {
        flex: 1,
    },
    topActionBarRight: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    starIcon: {
        width: 18,
        height: 18,
        resizeMode: 'cover',
    },
    recordingEllipse: {
        width: 14,
        height: 14,
        marginLeft: 10,
        marginRight: 5,
        alignSelf: 'center',
    },
});

export default TopActionBar;
