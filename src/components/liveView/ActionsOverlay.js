import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ActionsOverlayContext} from '../../context/types';

const ActionsOverlay = props => {
    const {children, ...otherProps} = props;

    return (
        <ActionsOverlayContext.Provider value={{...otherProps}}>
            <View style={styles.container}>{children}</View>
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
