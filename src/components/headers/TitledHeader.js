import React from 'react';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import HeaderTitleContainer from './HeaderTitleContainer';

const TitledHeader = props => {
    const {children, style, navigation} = props;
    return (
        <View style={[styles.container, style]}>
            <Pressable
                style={styles.logoContainer}
                onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../../assets/logo/iconicMark/iconicMark-colored-3x.png')}
                    style={styles.logo}
                />
            </Pressable>

            <HeaderTitleContainer>{children}</HeaderTitleContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 46,
        paddingBottom: 16,
    },
    logoContainer: {
        position: 'absolute',
        top: 25,
        left: 25,
    },
    logo: {
        height: 42,
        width: 42,
    },
});

export default withNavigation(TitledHeader);
