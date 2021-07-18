import {co} from 'co';
import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Icon,
    TouchableOpacity,
} from 'react-native';

import colors from '../constants/colors';

export default class RTidentification1 extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{backgroundColor: colors.light, height: '100%'}}>
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

                <View
                    style={{
                        width: '80%',
                        backgroundColor: colors.neutralLighten3,
                        alignSelf: 'center',
                        marginTop: 100,
                        padding: 20,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Oswald-Bold',
                            fontSize: 35,
                            alignSelf: 'center',
                            color: colors.dark,
                            textAlign: 'center',
                        }}>
                        Are you a Creator{'\n'}of the arts?
                    </Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Text
                            onPress={() => navigate('MakeItOfficial')}
                            style={{
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopRightRadius: 30,
                                borderWidth: 2,
                                borderColor: '#aaa',
                                marginTop: 15,
                                flex: 1,
                                backgroundColor: '#FFFFFF',
                                padding: 15,
                                fontSize: 18,
                                marginHorizontal: 5,
                                color: '#6C1717',
                                textAlign: 'center',
                                fontFamily: 'Montserrat-SemiBold',
                            }}>
                            Yes
                        </Text>
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
                                backgroundColor: '#FFFFFF',
                                padding: 15,
                                fontSize: 18,
                                marginHorizontal: 5,
                                color: '#6C1717',
                                textAlign: 'center',
                                fontFamily: 'Montserrat-SemiBold',
                            }}>
                            No
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '80%',
                        backgroundColor: '#FFFFFF',
                        borderWidth: 2,
                        borderColor: '#555',
                        alignSelf: 'center',
                        marginTop: 50,
                        padding: 20,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                    }}>
                    <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                        Are you a Creator (aligned to the Film, TV, or Book
                        industries) looking to build a stronger connection with
                        your audience? This title is designated for you!
                    </Text>
                </View>
            </View>
        );
    }
}
