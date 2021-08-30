import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
} from 'react-native';

import colors from '../constants/colors';
import DefaultPillFlatButton from '../components/buttons/DefaultPillFlatButton';

export default class CreatorVerification extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{backgroundColor: '#ffffff', height: '100%'}}>
                <Image
                    source={require('../assets/logo/iconicMark/iconicMark-colored-3x.png')}
                    style={{
                        width: 42,
                        height: 42,
                        marginTop: 25,
                        marginLeft: 25,
                        borderColor: '#000',
                        resizeMode: 'contain',
                    }}
                />

                <ScrollView
                    style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        alignSelf: 'center',
                        marginTop: 5,
                        borderRadius: 30,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Oswald-Bold',
                            fontSize: 35,
                            alignSelf: 'center',
                            color: colors.dark,
                            textAlign: 'center',
                        }}>
                        Request Creator verification
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            padding: 20,
                            alignSelf: 'center',
                            color: '#000',
                        }}>
                        <Text style={styles.boldText}>Tier 1</Text> Verified
                        Creators are represented by a red ring around their
                        avatar, and indicates that they are a Creator affiliated
                        with the Film, TV, or Book industries.
                        {'\n\n'}
                        <Text style={styles.boldText}>Tier 2</Text> Verified
                        Creator avatars will wear the red ring, and also be
                        represented by a golden “V“ alongside their usernames.
                        This status is reserved for those with sizeable social
                        media followings, or notable public figures or
                        celebrities in the arts & entertainment communities.
                        {'\n\n'}
                        This process ensures all Creator accounts are the
                        authentic presence of a Creator, notable public figure,
                        celebrity of the arts or entertainment industry, global
                        brand or entity it represents. Full app functionality
                        will also be unlocked.
                        {'\n\n'}
                        Submitting a request will guarantee consideration, but
                        will not guarantee verification.
                    </Text>
                    <TextInput
                        style={{
                            width: '100%',
                            borderTopWidth: 2,
                            borderBottomWidth: 1,
                            padding: 10,
                        }}
                        placeholder="Username"
                        keyboardType="default"
                    />
                    <TextInput
                        style={{
                            width: '100%',
                            borderBottomWidth: 1,
                            padding: 10,
                        }}
                        placeholder="Fullname"
                        keyboardType="default"
                    />
                    <TextInput
                        style={{
                            width: '100%',
                            borderBottomWidth: 2,
                            padding: 10,
                        }}
                        placeholder="Known As"
                        keyboardType="default"
                    />

                    <View
                        style={{
                            padding: 20,
                            marginTop: 30,
                            borderTopWidth: 2,
                            borderBottomWidth: 2,
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: colors.dark,
                            }}>
                            <Text
                                style={{
                                    color: '#4072BD',
                                    fontWeight: 'bold',
                                }}>
                                Choose file(s)
                            </Text>
                            {'\n\n'}
                            For tier 2 we require a government-issued photo ID
                            displaying your name and date of birth (e.g.
                            driver’s license, passport or national
                            identification card). Official business documents
                            (tax filing, recent utility bill, article of
                            incorporation) are also acceptable forms of
                            identification needed to view your request.
                            {'\n\n'}
                        </Text>

                        <Text
                            style={{
                                fontSize: 16,
                                color: colors.dark,
                                textAlign: 'justify',
                            }}>
                            Enter proof of work here or upload a files above.
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                            marginVertical: 20,
                        }}>
                        <DefaultPillFlatButton
                            title="Send"
                            onPress={() => navigate('Home')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: '700',
    },
});
