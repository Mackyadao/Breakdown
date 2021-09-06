import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ActionsOverlayContext} from '../../context/types';
import TopActionBar from './TopActionBar';
import CenterActionBar from './CenterActionBar';
import BottomActionBar from './BottomActionBar';

const ActionsOverlay = props => {
    const {children, ...otherProps} = props;

    return (
        <ActionsOverlayContext.Provider value={{...otherProps}}>
            <View style={styles.container}>
                <TopActionBar />
                <CenterActionBar />
                <BottomActionBar />
            </View>
        </ActionsOverlayContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
    },
});

export default ActionsOverlay;
