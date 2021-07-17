import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const LiveChannelList = props => {
    const {channel, children} = props;

    return (
        <View style={styles.container}>
            <View style={styles.channelHeader}>
                <View style={styles.channelLabelContainer}>
                    <Text style={styles.channelLabel}>{channel}</Text>
                </View>
                <Image
                    source={require('../../assets/icons/filter-3x.png')}
                    style={styles.filterIcon}
                />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignSelf: 'center',
                }}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        marginBottom: 4,
    },
    channelHeader: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    channelLabelContainer: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: colors.dark,
        height: 31,
        minWidth: 146,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 18,
    },
    channelLabel: {
        fontFamily: 'Oswald-Regular',
        color: colors.light,
        fontSize: 24,
        marginTop: -6,
    },
    filterIcon: {
        width: 23,
        height: 23,
        position: 'absolute',
        right: 10,
        top: '20%',
    },
});

export default LiveChannelList;
