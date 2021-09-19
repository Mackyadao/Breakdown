import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import DefaultPillFlatButton from '../components/buttons/DefaultPillFlatButton';

import RadioButton from '../components/buttons/RadioButton';
import colors from '../constants/colors';

const Paypal = props => {
    return (
        <Pressable {...props} style={styles.optionItemValueContainer}>
            <Image
                source={require('../images/PaymentMethodPaypal.png')}
                style={{height: 32, resizeMode: 'contain'}}
            />
        </Pressable>
    );
};

const Cards = props => {
    const height = 32;
    const marginRight = 15;
    const resizeMode = 'contain';

    return (
        <Pressable {...props} style={styles.optionItemValueContainer}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                <Image
                    source={require('../images/PaymentMethodCardVisa.png')}
                    style={{height, marginRight, resizeMode}}
                />
                <Image
                    source={require('../images/PaymentMethodCardMastercard.png')}
                    style={{height, marginRight, resizeMode}}
                />
                <Image
                    source={require('../images/PaymentMethodCardAmericanExpress.png')}
                    style={{height, marginRight: 5, resizeMode}}
                />
                <Image
                    source={require('../images/PaymentMethodCardDiscover.png')}
                    style={{height, marginRight, resizeMode: 'cover'}}
                />
            </View>
        </Pressable>
    );
};

const GPay = props => {
    return (
        <Pressable {...props} style={styles.optionItemValueContainer}>
            <Image
                source={require('../images/PaymentMethodGPay.png')}
                style={{height: 32, resizeMode: 'contain'}}
            />
        </Pressable>
    );
};

const ApplePay = props => {
    return (
        <Pressable {...props} style={styles.optionItemValueContainer}>
            <Image
                source={require('../images/PaymentMethodApplePay.png')}
                style={{height: 32, resizeMode: 'contain'}}
            />
        </Pressable>
    );
};

const paymentTypeOptions = [
    {
        value: 'paypal',
        renderLabel: Paypal,
    },
    {
        value: 'card',
        renderLabel: Cards,
    },
    {
        value: 'g_pay',
        renderLabel: GPay,
    },
    {
        value: 'apple_pay',
        renderLabel: ApplePay,
    },
];

const PaymentMethod = props => {
    const {navigation} = props;

    return (
        <View style={styles.centeredView}>
            <View style={styles.wrapper}>
                <Text style={styles.heading}>Enter your method of payment</Text>
                <Text style={styles.contentText}>
                    Entering payment information grants you access to view
                    premium content, and leave monetary tips to support your
                    favorite Creators.
                </Text>

                <View style={styles.optionsContainer}>
                    <RadioButton options={paymentTypeOptions} value={'card'} />
                </View>

                <View style={styles.actionsContainer}>
                    <DefaultPillFlatButton
                        title="Save"
                        onPress={() => navigation.navigate('PayWithCard')}
                    />
                    <DefaultPillFlatButton
                        title="Skip for now"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
    },
    wrapper: {
        margin: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    contentText: {
        fontSize: 16,
    },
    optionsContainer: {
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 10,
    },
    optionItemValueContainer: {
        flex: 1,
        marginLeft: 20,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default PaymentMethod;
