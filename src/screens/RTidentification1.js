import React from 'react';
import {Text, View, Image} from 'react-native';

import colors from '../constants/colors';
import DefaultPillFlatButton from '../components/buttons/DefaultPillFlatButton';

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
                        resizeMode: 'contain',
                    }}
                />

                <View
                    style={{
                        width: '80%',
                        backgroundColor: colors.neutralLighten4,
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
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                            marginTop: 20,
                        }}>
                        <DefaultPillFlatButton
                            title="Yes"
                            inverted
                            onPress={() => navigate('MakeItOfficial')}
                        />

                        <DefaultPillFlatButton
                            title="No"
                            inverted
                            onPress={() => navigate('Home')}
                        />
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
                        Are you a Creator (affiliated with the Film, TV, or Book
                        industries) looking to build a stronger connection with
                        your audience? If so, this status is reserved for you!
                    </Text>
                </View>
            </View>
        );
    }
}
