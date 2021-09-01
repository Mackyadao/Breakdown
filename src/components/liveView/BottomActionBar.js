import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {ActionsOverlayContext} from '../../context/types';
import colors from '../../constants/colors';

const BottomActionBar = () => {
    const actionOverlayContext = useContext(ActionsOverlayContext);

    if (!actionOverlayContext) {
        throw new Error(
            'BottomActionBar should be called inside ActionsOverlay component',
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.bottomActionBarLeft}>
                <View style={styles.contentDetails}>
                    <View style={styles.contentCreator}>
                        <Text
                            style={[
                                styles.bottomActionBarText,
                                styles.boldText,
                            ]}>
                            @blackkeys
                        </Text>
                    </View>

                    <Text style={styles.bottomActionBarText}>
                        Learn some piano basics
                    </Text>
                </View>
            </View>

            <View style={styles.bottomActionBarRight}>
                <Image
                    source={require('../../assets/icons/ellipsis-menu-white-3x.png')}
                    style={styles.ellipsisMenu}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 45,
        padding: 15,
    },
    bottomActionBarLeft: {
        flex: 1,
    },
    bottomActionBarRight: {
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    bottomActionBarText: {
        color: colors.light,
        fontFamily: 'Roboto',
        fontSize: 18,
    },
    boldText: {
        fontWeight: '700',
    },
    contentDetails: {},
    contentCreator: {
        flexDirection: 'row',
    },
    ellipsisMenu: {
        marginHorizontal: 12,
        width: 8,
        resizeMode: 'contain',
        flex: 1,
    },
});

export default BottomActionBar;
