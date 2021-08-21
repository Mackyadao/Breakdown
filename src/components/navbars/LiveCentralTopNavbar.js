import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import TertiaryFlatButton from '../buttons/TertiaryFlatButton';

const LiveCentralTopNavbar = props => {
    const {navigation, activeScreen} = props;

    return (
        <View style={styles.container}>
            <TertiaryFlatButton
                title="Who's Live?"
                inverted={activeScreen !== 'LiveCentral' && true}
                onPress={() => navigation.navigate('LiveCentral')}
            />

            <TertiaryFlatButton
                title="Marketplace"
                inverted={activeScreen !== 'Marketplace' && true}
                onPress={() => navigation.navigate('Marketplace')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 66,
        width: '100%',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#ddd',
        padding: 20,
    },
});

export default withNavigation(LiveCentralTopNavbar);
