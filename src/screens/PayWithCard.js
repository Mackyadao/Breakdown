import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import CardView from 'react-native-cardview';
import {Picker} from '@react-native-picker/picker';
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';

import colors from '../constants/colors';
import urls from '../constants/urls';
import {hasErrorField, hasEmptyField, validateField} from '../utils/formHelper';
import DefaultFlatButton from '../components/buttons/DefaultFlatButton';
import FormTextInput from '../components/forms/FormTextInput';
import FormInputErrorText from '../components/forms/FormInputErrorText';

const API_URL = urls.apiUrl;

const PayWithCard = props => {
    const {navigation} = props;
    const cardElevation = 2;
    const cardMaxElevation = 2;
    const cornerRadius = 5;

    const formFieldsInitState = {
        name: '',
        email: '',
        address_postal_code: '',
    };

    const [formValues, setFormValues] = useState(formFieldsInitState);
    const [errors, setErrors] = useState(formFieldsInitState);
    const [isCardDetailsCompleted, setIsCardDetailsCompleted] = useState(false);
    const [isFormValuesCompleted, setIsFormValuesCompleted] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('US');
    const [countries, setCountries] = useState(null);
    const [isInvoiceLoading, setIsInvoiceLoading] = useState(false);
    const [invoice, setInvoice] = useState(null);
    const [invoiceItems, setInvoiceItems] = useState(null);
    const [paymentIntentClientSecret, setPaymentIntentClientSecret] =
        useState(null);
    const [showInvoice, setShowInvoice] = useState(false);
    const [showCardInfoField, setShowCardInfoField] = useState(false);
    const {confirmPayment, loading: isConfirmPaymentLoading} =
        useConfirmPayment();

    useEffect(async () => {
        const countries = await getCountries();

        setCountries(countries);
    }, []);

    const disabledPayButton = () => {
        return isCardDetailsCompleted ? false : true;
    };

    const disabledNextButton = () => {
        return isFormValuesCompleted ? false : true;
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
                !hasErrorField(fieldErrors) &&
                selectedCountry
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

    const getPremiumContentAccessInvoice = async () => {
        setIsInvoiceLoading(true);

        let response = null;

        try {
            response = await fetch(
                `${API_URL}/api/v1/premium-contents/test-id/gain-access`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formValues,
                        address_country: selectedCountry,
                    }),
                },
            );

            response = await response.json();
        } catch (_err) {
            setIsInvoiceLoading(false);
            return;
        }

        const {invoice, invoiceItems, paymentIntentClientSecret} = response;

        setIsInvoiceLoading(false);
        setInvoice(invoice);
        setInvoiceItems(invoiceItems);
        setPaymentIntentClientSecret(paymentIntentClientSecret);
        setShowInvoice(true);
        setShowCardInfoField(true);
    };

    const proceedPayment = async () => {
        // confirm payment
        const {error, paymentIntent} = await confirmPayment(
            paymentIntentClientSecret,
            {
                type: 'Card',
                // billingDetails: formValues,
            },
        );

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else if (paymentIntent) {
            Alert.alert('Success', 'Payment successful!');
            navigation.navigate('LiveViewPaid', {premiumContentAccess: true});
        }
    };

    const getCountries = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const countries = await response.json();

        return countries;
    };

    const renderCountryPickerItems = () => {
        let countryPickerItems = null;

        if (countries && countries.length > 0) {
            countryPickerItems = countries.map(country => {
                return (
                    <Picker.Item
                        key={country.alpha2Code}
                        label={country.name}
                        value={country.alpha2Code}
                    />
                );
            });
        }

        return countryPickerItems;
    };

    const renderContactInfoForm = () => {
        if (!showInvoice) {
            return (
                <ScrollView contentContainerStyle={styles.centeredContent}>
                    <View style={styles.contentWrap}>
                        <Text style={styles.formHeading}>
                            Contact Information
                        </Text>
                        <Text style={styles.label}>Name</Text>
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

                        <Text style={styles.label}>Country or region</Text>
                        <CardView
                            style={styles.cardView}
                            cardElevation={cardElevation}
                            cardMaxElevation={cardMaxElevation}
                            cornerRadius={cornerRadius}>
                            <View
                                style={[
                                    styles.formInput,
                                    styles.formInputCountryOrRegion,
                                ]}>
                                <Picker
                                    selectedValue={selectedCountry}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedCountry(itemValue)
                                    }>
                                    {renderCountryPickerItems()}
                                </Picker>
                            </View>
                            <FormTextInput
                                name="address_postal_code"
                                value={formValues.address_postal_code}
                                onChangeText={handleChangeText}
                                style={[
                                    styles.formInput,
                                    styles.formInputPostalCode,
                                ]}
                                autoCapitalize="none"
                                placeholder="ZIP code"
                            />
                        </CardView>

                        <DefaultFlatButton
                            title={'Next'}
                            onPress={() => getPremiumContentAccessInvoice()}
                            style={{marginTop: 34}}
                            isLoading={isInvoiceLoading}
                            disabled={isInvoiceLoading || disabledNextButton()}
                        />
                    </View>
                </ScrollView>
            );
        }
    };

    const renderTaxRate = invoiceItem => {
        if (invoiceItem && invoiceItem.tax_amounts.length > 0) {
            return invoiceItem.tax_amounts
                .filter(tax => tax.amount > 0)
                .map(tax => {
                    return (
                        <View
                            key={tax.tax_rate.id}
                            style={styles.invoiceDetailsRow}>
                            <Text
                                style={[
                                    styles.detailTitle,
                                    styles.detailHighlighted,
                                ]}>{`${tax.tax_rate.display_name} - ${tax.tax_rate.jurisdiction} (${tax.tax_rate.percentage}%)`}</Text>
                            <Text
                                style={[
                                    styles.detailValue,
                                    styles.detailHighlighted,
                                ]}>
                                {`$${(tax.amount / 100).toFixed(2)}`}
                            </Text>
                        </View>
                    );
                });
        }
    };

    const renderInvoiceDetails = () => {
        if (!showInvoice) return null;

        const invoiceItem = invoiceItems[0];

        return (
            <ScrollView contentContainerStyle={styles.invoiceDetailsContainer}>
                <View style={styles.invoiceHeader}>
                    <Image
                        source={require('../assets/logo/iconicMark/iconicMark-colored-3x.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.invoiceHeading}>
                        Premium Content Access
                    </Text>
                    <View style={styles.invoiceHeaderContent}>
                        <Text style={styles.invoiceHeaderTextContent}>
                            <Text style={styles.boldText}>Title:{'  '}</Text>
                            Learn some piano basics
                        </Text>
                        <Text style={styles.invoiceHeaderTextContent}>
                            <Text style={styles.boldText}>Category:{'  '}</Text>
                            Music
                        </Text>
                        <Text style={styles.invoiceHeaderTextContent}>
                            <Text style={styles.boldText}>Creator:{'  '}</Text>
                            @blackkeys
                        </Text>
                    </View>
                </View>
                <View style={styles.invoiceDetails}>
                    <View style={styles.invoiceDetailsRow}>
                        <Text style={styles.detailTitle}>Amount</Text>
                        <Text style={styles.detailValue}>
                            {`$${(invoiceItem.amount / 100).toFixed(2)}`}
                        </Text>
                    </View>

                    {renderTaxRate(invoiceItem)}

                    <View style={styles.divider}></View>
                    <View style={styles.invoiceDetailsRow}>
                        <Text style={[styles.detailTitle, styles.invoiceTotal]}>
                            Total
                        </Text>
                        <Text style={[styles.detailValue, styles.invoiceTotal]}>
                            {`$${(invoice.total / 100).toFixed(2)}`}
                        </Text>
                    </View>
                </View>

                {renderCardInformationField()}
            </ScrollView>
        );
    };

    const renderCardInformationField = () => {
        if (showCardInfoField) {
            return (
                <View style={styles.form}>
                    <Text style={styles.formHeading}>{`Pay $${(
                        invoice.total / 100
                    ).toFixed(2)} using`}</Text>
                    <Text style={styles.label}>Card information</Text>
                    <CardView
                        style={styles.cardView}
                        cardElevation={cardElevation}
                        cardMaxElevation={cardMaxElevation}
                        cornerRadius={cornerRadius}>
                        <CardField
                            postalCodeEnabled={false}
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

                    <DefaultFlatButton
                        title={`Pay $${(invoice.amount_due / 100).toFixed(2)}`}
                        onPress={() => handlePayPress()}
                        style={{marginTop: 34}}
                        isLoading={isConfirmPaymentLoading}
                        disabled={
                            isConfirmPaymentLoading || disabledPayButton()
                        }
                    />
                </View>
            );
        }
    };

    return (
        <KeyboardAvoidingView style={styles.screen}>
            {renderContactInfoForm()}
            {renderInvoiceDetails()}
        </KeyboardAvoidingView>
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
    contentWrap: {
        padding: 20,
        width: '100%',
    },
    centeredContent: {
        justifyContent: 'center',
        height: '100%',
    },
    form: {
        borderTopWidth: 10,
        borderColor: colors.neutralLighten5,
        padding: 20,
        paddingBottom: 30,
        height: '100%',
        backgroundColor: colors.light,
    },
    formHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.dark,
    },
    formInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.neutralLighten4,
        paddingHorizontal: 10,
    },
    formInputCountryOrRegion: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 0,
    },
    formInputPostalCode: {
        marginTop: -1,
        padding: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
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
    boldText: {
        fontWeight: 'bold',
    },
    logo: {
        marginTop: 30,
        marginBottom: 20,
        height: 60,
        width: 60,
    },
    invoiceHeader: {
        backgroundColor: colors.neutralLighten5,
        minHeight: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    invoiceHeaderContent: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    invoiceHeaderTextContent: {
        margin: 5,
    },
    invoiceHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    invoiceDetailsContainer: {},
    invoiceDetails: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.light,
        width: '100%',
    },
    invoiceDetailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    detailTitle: {
        color: colors.neutral,
        fontWeight: 'bold',
    },
    detailTitle: {
        color: colors.neutral,
        fontWeight: 'bold',
    },
    detailValue: {
        color: colors.neutral,
        fontWeight: 'bold',
    },
    detailHighlighted: {
        color: colors.secondary,
    },
    divider: {
        marginVertical: 10,
        backgroundColor: colors.neutral,
        height: 1,
        width: '100%',
    },
    invoiceTotal: {
        color: colors.dark,
    },
});

export default PayWithCard;
