import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LiveChannelList from './LiveChannelList';
import LiveChannelItem from './LiveChannelItem';

const LiveDashboard = () => {
    return (
        <ScrollView style={styles.container}>
            <LiveChannelList channel="Music">
                <LiveChannelItem
                    thumbnail={require('../../images/djgreyscale.png')}
                />

                <LiveChannelItem
                    thumbnail={require('../../images/blackkeys.png')}
                    viewPath="LiveViewPaid"
                />
            </LiveChannelList>

            <LiveChannelList channel="Photography">
                <LiveChannelItem
                    thumbnail={require('../../images/colorpop.png')}
                />

                <LiveChannelItem
                    thumbnail={require('../../images/touchup.png')}
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
