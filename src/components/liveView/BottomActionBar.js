import React, {useContext} from 'react';

import {ActionsOverlayContext} from '../../context/types';
import useOrientation from '../../hooks/useOrientation';
import VideoDetails from './VideoDetails';
import Comments from './Comments';

const BottomActionBar = () => {
    const actionOverlayContext = useContext(ActionsOverlayContext);
    const orientation = useOrientation();

    if (!actionOverlayContext) {
        throw new Error(
            'BottomActionBar should be called inside ActionsOverlay component',
        );
    }

    const {isPlaying, commentsHidden} = actionOverlayContext;

    if (isPlaying) {
        if (!commentsHidden && orientation.isPortrait) {
            return <Comments />;
        } else {
            return null;
        }
    }

    return <VideoDetails />;
};

export default BottomActionBar;
