import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {ActionsOverlayContext} from '../../context/types';

const CenterActionBar = () => {
    const actionOverlayContext = useContext(ActionsOverlayContext);

    if (!actionOverlayContext) {
        throw new Error(
            'CenterActionBar should be called inside ActionsOverlay component',
        );
    }

    const {handlePlayPress} = actionOverlayContext;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePlayPress}>
                <Image
                    source={require('../../assets/icons/video-play-button-3x.png')}
                    style={styles.playButton}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
});

export default CenterActionBar;
