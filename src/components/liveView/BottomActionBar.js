import React, {useContext} from 'react';

import {ActionsOverlayContext} from '../../context/types';

import VideoDetails from './VideoDetails';
import Comments from './Comments';

const BottomActionBar = () => {
    const actionOverlayContext = useContext(ActionsOverlayContext);

    if (!actionOverlayContext) {
        throw new Error(
            'BottomActionBar should be called inside ActionsOverlay component',
        );
    }

    const {isPlaying, commentsHidden} = actionOverlayContext;

    if (isPlaying) {
        if (!commentsHidden) {
            return <Comments />;
        } else {
            return null;
        }
    }

    return <VideoDetails />;
};

export default BottomActionBar;
