import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Icon,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

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
                            color: '#333',
                            textAlign: 'center',
                        }}>
                        Request Creator verification
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-SemiBold',
                            fontSize: 16,
                            padding: 20,
                            alignSelf: 'center',
                            color: '#000',
                            textAlign: 'justify',
                            marginTop: 20,
                        }}>
                        A Verified Creator account is represented by a golden
                        “V”, placed next to the username. This badge indicates
                        the account is the authentic presence of a creator,
                        notable public figure, celebrity of the arts, global
                        brand or entity it represents.
                        {'\n'}
                        {'\n'}Submitting a request will guarantee consideration,
                        but will not guarantee verification.
                    </Text>
                    <TextInput
                        style={{
                            width: '100%',
                            borderTopWidth: 2,
                            borderBottomWidth: 1,
                            marginTop: 10,
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
                            borderBottomWidth: 1,
                            padding: 10,
                        }}
                        placeholder="Known As"
                        keyboardType="default"
                    />
                    <TextInput
                        style={{
                            width: '100%',
                            borderBottomWidth: 2,
                            padding: 10,
                        }}
                        placeholder="Art Category"
                        keyboardType="default"
                    />
                    <Text
                        style={{
                            fontFamily: 'Montserrat-SemiBold',
                            fontSize: 16,
                            padding: 20,
                            alignSelf: 'center',
                            color: '#000',
                            textAlign: 'justify',
                            marginTop: 20,
                        }}>
                        Please attach a copy of your photo ID (feel free to
                        block out residential information), submit proof of
                        work, and a 5 second video stating your name, today’s
                        date, and that you are joining The Breakdown App.
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-Medium',
                            fontSize: 16,
                            padding: 20,
                            alignSelf: 'center',
                            color: '#000',
                            textAlign: 'justify',
                        }}>
                        <Text
                            style={{
                                color: '#4072BD',
                                fontFamily: 'Montserrat-SemiBold',
                            }}>
                            Choose file
                        </Text>
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        We require a government-issued photo ID displaying your
                        name and date of birth (e.g. driver’s license, passport
                        or national identification card). Official business
                        documents (tax filing, recent utility bill, article of
                        incorporation) are also acceptable forms of
                        identification needed to view your request.
                    </Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Text
                            onPress={() => navigate('Home')}
                            style={{
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopRightRadius: 30,
                                borderWidth: 2,
                                borderColor: '#aaa',
                                marginTop: 15,
                                flex: 1,
                                backgroundColor: '#4072BD',
                                padding: 15,
                                fontSize: 16,
                                marginHorizontal: 50,
                                marginBottom: 50,
                                color: '#FFFFFF',
                                textAlign: 'center',
                                fontFamily: 'Montserrat-SemiBold',
                            }}>
                            Send
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
