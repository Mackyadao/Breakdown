import React, {useState} from 'react';
import {View} from 'react-native';

const MultiTapHandler = props => {
    const {children, style, onPress, onDoublePress} = props;
    const [pressType, setPressType] = useState(null);
    const [lastPress, setLastPress] = useState(null);

    const multiTapDelay = 400;

    const onStartShouldSetResponder = event => {
        const currentPress = event.nativeEvent.timestamp;

        if (event.nativeEvent.touches.length) {
            setLastPress(() => currentPress);

            if (currentPress - lastPress < multiTapDelay) {
                setPressType('double-tap');
            } else {
                setPressType('single-tap');
            }

            return true;
        }

        return false;
    };

    const onResponderRelease = () => {
        if (pressType === 'double-tap') {
            onDoublePress && onDoublePress();
        } else if (pressType === 'single-tap') {
            onPress && onPress();
        }
    };
    return (
        <View
            style={style}
            onStartShouldSetResponder={onStartShouldSetResponder}
            onResponderRelease={onResponderRelease}>
            {children}
        </View>
    );
};

export default MultiTapHandler;
