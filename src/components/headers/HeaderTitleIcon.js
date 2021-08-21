import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const HeaderTitleIcon = props => {
    const {source, style} = props;

    return (
        <View style={[styles.container, style]}>
            <Image
                source={source}
                style={{
                    height: 31,
                    width: 31,
                    resizeMode: 'contain',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        marginLeft: 5,
    },
});

export default HeaderTitleIcon;
