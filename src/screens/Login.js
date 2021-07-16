import React, {useState} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import FormPillTextInput from '../components/forms/FormPillTextInput';
import PrimaryPillFlatButton from '../components/buttons/PrimaryPillFlatButton';

const Login = props => {
    const {navigation} = props;
    const formFieldsInitState = {
        mobileNumberUsernameOrEmail: '',
        password: '',
    };

    const [formValues, setFormValues] = useState(formFieldsInitState);

    const handleChangeText = (fieldValue, fieldName) => {
        setFormValues(values => {
            return {...values, [fieldName]: fieldValue};
        });
    };

    const handleSubmit = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo/lockup/lockup-vertical-colored-3x.png')}
                />
            </View>

            <View style={styles.loginForm}>
                <FormPillTextInput
                    style={styles.pillTextInput}
                    name="mobileNumberUsernameOrEmail"
                    value={formValues.mobileNumberUsernameOrEmail}
                    onChangeText={handleChangeText}
                    placeholder="Mobile number, username, or email"
                    autoCapitalize="none"
                />

                <FormPillTextInput
                    style={[styles.pillTextInput, styles.pillTextInputSmall]}
                    name="password"
                    value={formValues.password}
                    onChangeText={handleChangeText}
                    placeholder="Password"
                    autoCapitalize="none"
                    textContentType="password"
                    secureTextEntry={true}
                />

                <View style={styles.forgotPasswordLinkContainer}>
                    <Pressable>
                        <Text style={styles.forgotPasswordLink}>
                            Forgot Password?
                        </Text>
                    </Pressable>
                </View>

                <PrimaryPillFlatButton
                    style={[styles.button, styles.buttonSmall]}
                    title="Login/Sign up"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
    },
    logoContainer: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    loginForm: {
        alignItems: 'center',
        width: '100%',
        padding: 40,
    },
    pillTextInput: {
        marginVertical: 12,
        width: '100%',
        fontSize: 16,
        textAlign: 'center',
    },
    pillTextInputSmall: {
        width: '80%',
    },
    forgotPasswordLinkContainer: {
        alignSelf: 'flex-end',
        color: colors.dark,
    },
    forgotPasswordLink: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    button: {
        marginTop: 40,
        marginBottom: 12,
        width: '100%',
    },
    buttonSmall: {
        width: '80%',
    },
});

export default Login;
