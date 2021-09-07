import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
    const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const handleScreenChange = event => {
            setScreenInfo(event.screen);
        };

        Dimensions.addEventListener('change', handleScreenChange);

        return () => {
            Dimensions.removeEventListener('change', handleScreenChange);
        };
    }, [screenInfo]);

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width,
    };
};

export default useOrientation;
