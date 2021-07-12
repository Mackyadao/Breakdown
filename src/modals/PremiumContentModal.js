import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import DefaultFlatButton from '../buttons/DefaultFlatButton';

const username = '@blackkeys';
const amount = '$0.50';

const PremiumContentModal = props => {
    const {navigation, toggleModal} = props;
    return (
        <View style={styles.modal}>
            <Text style={styles.heading}>Premium Content</Text>

            <Text style={styles.contentText}>
                Gain instant access to premium content from{' '}
                <Text style={styles.bold}>{username}</Text> with your{' '}
                <Text style={styles.bold}>{amount}</Text> contribution!
            </Text>

            <View style={styles.buttonContainer}>
                <DefaultFlatButton
                    title="Access"
                    onPress={() => {
                        navigation.navigate('PaymentMethod');
                        toggleModal();
                    }}
                />
            </View>

            <Text style={styles.contentText}>
                Become a <Text style={styles.bold}>{username}</Text> subscriber
                for unlimited admission.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 15,
    },
    contentText: {
        fontSize: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignSelf: 'center',
        paddingVertical: 20,
    },
});

export default withNavigation(PremiumContentModal);
