import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';

import colors from '../constants/colors';
import urls from '../constants/urls';
import {hasErrorField, hasEmptyField, validateField} from '../utils/formHelper';
import DefaultFlatButton from '../buttons/DefaultFlatButton';
import FormTextInput from '../components/forms/FormTextInput';
import FormInputErrorText from '../components/forms/FormInputErrorText';

const API_URL = urls.apiUrl;

const PayWithCard = props => {
    const {navigation} = props;
    const cardElevation = 4;
    const cardMaxElevation = 2;
    const cornerRadius = 5;
    const amount = 0.5 * 100;

    const formFieldsInitState = {
        email: '',
        name: '',
    };

    const [formValues, setFormValues] = useState(formFieldsInitState);
    const [errors, setErrors] = useState(formFieldsInitState);
    const [isCardDetailsCompleted, setIsCardDetailsCompleted] = useState(false);
    const [isFormValuesCompleted, setIsFormValuesCompleted] = useState(false);
    const {confirmPayment, loading} = useConfirmPayment();

    const disabledSubmitButton = () => {
        if (isCardDetailsCompleted && isFormValuesCompleted) {
            return false;
        } else {
            return true;
        }
    };

    const handleChangeText = (fieldValue, fieldName) => {
        setFormValues(values => {
            let updatedFormValues = {...values, [fieldName]: fieldValue};
            let fieldErrors = {...errors};

            let validatedFieldError = validateField(
                fieldName,
                fieldValue,
                values,
            );

            fieldErrors = {...fieldErrors, ...validatedFieldError};

            // update errors
            setErrors(() => fieldErrors);

            // check if there's an error and empty field
            if (
                !hasEmptyField(updatedFormValues) &&
                !hasErrorField(fieldErrors)
            ) {
                setIsFormValuesCompleted(true);
            } else {
                setIsFormValuesCompleted(false);
            }

            return updatedFormValues;
        });
    };

    const handlePayPress = async () => {
        // recheck for error and empty field
        if (!hasEmptyField(formValues) && !hasErrorField(errors)) {
            /**
             * TODO:
             * Show payment confirmation modal before proceeding the payment
             */
            proceedPayment();
        }
    };

    const proceedPayment = async () => {
        // create payment intent
        const response = await fetch(
            `${API_URL}/api/stripe/create-payment-intent`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodType: 'card',
                    currency: 'usd',
                    amount,
                }),
            },
        );

        const {client_secret: ClientSecret} = await response.json();

        // confirm payment
        const {error, paymentIntent} = await confirmPayment(ClientSecret, {
            type: 'Card',
            billingDetails: formValues,
        });

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else if (paymentIntent) {
            Alert.alert('Success', 'Payment successful!');
            navigation.navigate('LiveViewPaid', {premiumContentAccess: true});
        }
    };

    return (
        <View style={[styles.screen, styles.centeredView]}>
            <View style={styles.paymentForm}>
                <Text style={styles.formHeading}>Pay with card</Text>

                <Text style={styles.label}>Email</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <FormTextInput
                        name="email"
                        value={formValues.email}
                        onChangeText={handleChangeText}
                        style={styles.formInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </CardView>

                <FormInputErrorText
                    text={errors['email'] && `* ${errors['email']}`}
                />

                <Text style={styles.label}>Card information</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <CardField
                        postalCodeEnabled={true}
                        placeholder={{
                            number: '4242 4242 4242 4242',
                        }}
                        cardStyle={{
                            backgroundColor: colors.light,
                            textColor: colors.dark,
                            borderWidth: 1,
                            borderColor: colors.neutralLighten4,
                        }}
                        style={[
                            styles.formInput,
                            {
                                width: '100%',
                                height: 50,
                            },
                        ]}
                        onCardChange={cardDetails => {
                            setIsCardDetailsCompleted(cardDetails.complete);
                        }}
                    />
                </CardView>

                <Text style={styles.label}>Name on card</Text>

                <CardView
                    style={styles.cardView}
                    cardElevation={cardElevation}
                    cardMaxElevation={cardMaxElevation}
                    cornerRadius={cornerRadius}>
                    <FormTextInput
                        name="name"
                        value={formValues.name}
                        onChangeText={handleChangeText}
                        style={styles.formInput}
                        autoCapitalize="words"
                    />
                </CardView>

                <FormInputErrorText
                    text={errors['name'] && `* ${errors['name']}`}
                />

                <DefaultFlatButton
                    title={`Pay $${amount / 100}`}
                    onPress={() => handlePayPress()}
                    style={{marginTop: 34}}
                    isLoading={loading}
                    disabled={loading || disabledSubmitButton()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
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
        borderWidth: 1,
        borderColor: colors.neutralLighten4,
        paddingHorizontal: 10,
    },
    cardView: {
        marginVertical: 4,
    },
    label: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: '400',
        color: colors.neutral,
    },
    contentText: {
        fontSize: 16,
    },
});

export default PayWithCard;
