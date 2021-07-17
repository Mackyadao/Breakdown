import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const LiveChannelItem = props => {
    const {thumbnail, navigation, style, viewPath, ...otherProps} = props;

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={() => viewPath && navigation.navigate(viewPath)}
            {...otherProps}>
            <Image source={thumbnail} style={styles.thumbnail} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    thumbnail: {
        width: 171,
        height: 209,
    },
});

export default withNavigation(LiveChannelItem);
