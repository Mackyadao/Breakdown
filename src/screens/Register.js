import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

import colors from '../constants/colors';
import FormPillWithIconTextInput from '../components/forms/FormPillWithIconTextInput';
import PrimaryPillFlatButton from '../components/buttons/PrimaryPillFlatButton';

const Register = props => {
    const {navigation} = props;

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <Image
                    source={require('../assets/logo/iconicMark/iconicMark-colored-3x.png')}
                    style={{
                        width: 42,
                        height: 42,
                        marginTop: 25,
                        marginLeft: 25,
                        resizeMode: 'contain',
                    }}
                />

                <View style={styles.uploadPicture}>
                    <View style={styles.uploadPictureIcon}>
                        <Image
                            source={require('../images/Vector.png')}
                            style={styles.userCircledIcon}
                        />

                        <Image
                            source={require('../images/Ellipse69.png')}
                            style={styles.plusIconContainer}
                        />
                        <Image
                            source={require('../images/+.png')}
                            style={styles.plusIcon}
                        />
                    </View>

                    <Text style={styles.uploadPictureText}>
                        Add your picture
                    </Text>
                </View>

                <View style={styles.registerForm}>
                    <Text style={styles.contentText}>
                        Tell us a little more about yourself,{'\n'}
                        so we can provide you with{'\n'}
                        customized content.
                    </Text>

                    <FormPillWithIconTextInput
                        containerStyle={styles.textInput}
                        name="name"
                        placeholder="Name"
                        iconSource={require('../assets/icons/user-solid-3x.png')}
                    />

                    <FormPillWithIconTextInput
                        containerStyle={styles.textInput}
                        name="username"
                        placeholder="Username"
                        autoCapitalize="none"
                        iconSource={require('../assets/icons/user-solid-3x.png')}
                    />

                    <FormPillWithIconTextInput
                        containerStyle={styles.textInput}
                        name="birthday"
                        placeholder="Birthday"
                        autoCapitalize="none"
                        iconSource={require('../assets/icons/calendar-solid-3x.png')}
                    />

                    <FormPillWithIconTextInput
                        containerStyle={styles.textInput}
                        name="mobileNumber"
                        placeholder="Mobile number"
                        keyboardType="number-pad"
                        iconSource={require('../assets/icons/mobile-phone-solid-3x.png')}
                    />

                    <FormPillWithIconTextInput
                        containerStyle={styles.textInput}
                        name="email"
                        placeholder="Email"
                        keyboardType="email-address"
                        iconSource={require('../assets/icons/email-solid-3x.png')}
                    />

                    <PrimaryPillFlatButton
                        title="Done"
                        onPress={() => navigation.navigate('ChooseMedium')}
                        style={styles.button}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        height: '100%',
    },
    uploadPictureIcon: {
        alignSelf: 'center',
    },
    uploadPictureText: {
        marginTop: 16,
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    userCircledIcon: {
        width: 113,
        height: 113,
    },
    plusIconContainer: {
        position: 'absolute',
        right: -5,
        bottom: -5,
    },
    plusIcon: {
        position: 'absolute',
        right: 7,
        bottom: 7,
    },
    contentText: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 35,
        marginBottom: 24,
        alignSelf: 'center',
        width: '100%',
    },
    registerForm: {
        width: '75%',
        alignSelf: 'center',
    },
    textInput: {
        marginVertical: 12,
    },
    button: {
        marginTop: 26,
        marginHorizontal: '10%',
    },
});

export default Register;
