import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {ActionsOverlayContext} from '../../context/types';
import TopActionBar from './TopActionBar';
import CenterActionBar from './CenterActionBar';
import BottomActionBar from './BottomActionBar';
import MultiTapHandler from '../handlers/MultiTapHandler';

const ActionsOverlay = props => {
    const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
    const [isCommentsHidden, setIsCommentsHidden] = useState(false);

    const toggleStatusBar = () => {
        setIsStatusBarHidden(!isStatusBarHidden);
    };

    const toggleComments = () => {
        setIsCommentsHidden(!isCommentsHidden);
    };

    return (
        <ActionsOverlayContext.Provider
            value={{
                statusBarHidden: isStatusBarHidden,
                commentsHidden: isCommentsHidden,
                ...props,
            }}>
            <MultiTapHandler
                style={styles.container}
                onPress={() => {
                    toggleStatusBar();
                    toggleComments();
                }}
                onDoublePress={props.handlePlayPress}>
                <TopActionBar />
                <CenterActionBar />
                <BottomActionBar />
            </MultiTapHandler>
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
