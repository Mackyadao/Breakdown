import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LiveChannelList from './LiveChannelList';
import LiveChannelItem from './LiveChannelItem';

const LiveDashboard = () => {
    return (
        <ScrollView style={styles.container}>
            <LiveChannelList channel="Music">
                <LiveChannelItem
                    thumbnail={require('../../images/sunnysyd.png')}
                    viewPath="LiveView"
                />

                <LiveChannelItem
                    thumbnail={require('../../images/guitarhero.png')}
                />
            </LiveChannelList>

            <LiveChannelList channel="Photography">
                <LiveChannelItem
                    thumbnail={require('../../images/snapshot.png')}
                />

                <LiveChannelItem
                    thumbnail={require('../../images/aphotopro.png')}
                />
            </LiveChannelList>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ddd',
    },
});

export default LiveDashboard;
