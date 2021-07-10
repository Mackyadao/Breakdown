import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';
import axios from 'axios';
// import {Stripe} from 'stripe';

import colors from '../constants/colors';
import DefaultFlatButton from '../buttons/DefaultFlatButton';

const PayWithCard = props => {
    const {navigation} = props;
    const [publishableKey, setPublishableKey] = useState('');
    const [stripe, setStripe] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const cardElevation = 4;
    const cardMaxElevation = 2;
    const cornerRadius = 5;
    const amount = 0.5;

    // useEffect(() => {
    //     fetchPublishableKey();
    //     setStripe(new Stripe(publishableKey));
    // }, []);

    // fetchPublishableKey = async () => {
    //     const res = await axios.get(
    //         'https://breakdown.eleyjambaro.website/api/stripe/config',
    //     );

    //     setPublishableKey(res.data.publishableKey);
    // };

    // createPaymentIntent = async () => {
    //     const res = await axios.post(
    //         'https://breakdown.eleyjambaro.website/api/stripe/create-payment-intent',
    //         {amount},
    //     );

    //     setClientSecret(res.data.client_secret);
    // };

    // submitPayment = async () => {
    //     const result = stripe.confirmCardPayment(clientSecret);
    //     const paymentIntent = result.paymentIntent;
    // };

    return (
        <View style={styles.centeredView}>
            <View style={styles.paymentForm}>
                <Text style={styles.formHeading}>Pay with card</Text>

                <Text style={styles.label}>Email</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <TextInput
                        style={styles.formInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </CardView>

                <Text style={styles.label}>Card information</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContet: 'center',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: colors.neutralLighten4,
                        }}>
                        <TextInput
                            style={[
                                styles.formInput,
                                {
                                    flex: 1,
                                },
                            ]}
                            keyboardType="number-pad"
                            placeholder="1234 1234 1234 1234"
                        />

                        <View style={styles.cardIconsContainer}>
                            <Image
                                style={styles.cardIconsItem}
                                source={require('../images/CardFormVisa2.png')}
                            />
                            <Image
                                style={styles.cardIconsItem}
                                source={require('../images/CardFormMastercard1.png')}
                            />
                            <Image
                                style={styles.cardIconsItem}
                                source={require('../images/CardFormAmericanExpress2.png')}
                            />
                            <Image
                                style={[
                                    styles.cardIconsItem,
                                    {resizeMode: 'cover'},
                                ]}
                                source={require('../images/CardFormDiscover1.png')}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            borderTopWidth: 1,
                            borderColor: colors.neutralLighten4,
                        }}>
                        <TextInput
                            style={[
                                styles.formInput,
                                {
                                    flex: 1,
                                    borderRightWidth: 2,
                                    marginRight: -1,
                                },
                            ]}
                            keyboardType="number-pad"
                            placeholder="MM / YY"
                        />

                        <TextInput
                            style={[
                                styles.formInput,
                                {
                                    flex: 1,
                                    borderLeftWidth: 2,
                                    marginLeft: -1,
                                },
                            ]}
                            keyboardType="number-pad"
                            placeholder="CVV/CVC Code"
                        />
                    </View>
                </CardView>

                <Text style={styles.label}>Name on card</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <TextInput
                        style={styles.formInput}
                        autoCapitalize="words"
                    />
                </CardView>

                <Text style={styles.label}>Country or region</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <TextInput style={styles.formInput} />
                </CardView>

                <DefaultFlatButton
                    title={`Pay $0.50`}
                    onPress={() => navigation.navigate('LiveViewPaid')}
                    style={{marginTop: 30}}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentForm: {
        padding: 20,
        width: '100%',
    },
    formHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    formInput: {
        borderColor: colors.neutralLighten4,
        paddingHorizontal: 10,
    },
    cardView: {
        marginVertical: 4,
    },
    cardIconsContainer: {
        flexDirection: 'row',
        marginHorizontal: 6,
    },
    cardIconsItem: {
        height: 17,
        width: 30,
        marginHorizontal: 3,
        resizeMode: 'contain',
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '400',
        color: colors.neutral,
    },
    contentText: {
        fontSize: 16,
    },
});

export default PayWithCard;
