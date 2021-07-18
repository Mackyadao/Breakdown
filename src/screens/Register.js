import React from 'react';
import {Text, View, Image, TextInput, Icon} from 'react-native';
import PrimaryPillFlatButton from '../components/buttons/PrimaryPillFlatButton';

export default class Register extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{backgroundColor: '#FFF', height: '100%'}}>
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

                <View>
                    <View
                        style={{
                            marginTop: 33,
                            alignSelf: 'center',
                            position: 'absolute',
                        }}>
                        <Image
                            source={require('../images/Vector.png')}
                            style={{width: 113, height: 113}}
                        />

                        <Image
                            source={require('../images/Ellipse69.png')}
                            style={{
                                position: 'absolute',
                                right: -5,
                                bottom: -5,
                            }}
                        />
                        <Image
                            source={require('../images/+.png')}
                            style={{position: 'absolute', right: 7, bottom: 7}}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            alignSelf: 'center',
                            top: 153,
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SemiBold',
                                fontSize: 16,
                                alignSelf: 'center',
                                fontWeight: 'bold',
                            }}>
                            Add your picture
                        </Text>

                        <TextInput
                            style={{
                                borderWidth: 2,
                                borderColor: '#dddddd',
                                borderTopLeftRadius: 20,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopRightRadius: 20,
                                marginTop: 15,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                            placeholder="Name"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth: 2,
                                borderColor: '#dddddd',
                                borderTopLeftRadius: 20,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopRightRadius: 20,
                                marginTop: 15,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                            placeholder="Username"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth: 2,
                                borderColor: '#dddddd',
                                borderTopLeftRadius: 20,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopRightRadius: 20,
                                marginTop: 15,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                            placeholder="Birthday"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth: 2,
                                borderColor: '#dddddd',
                                borderTopLeftRadius: 20,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopRightRadius: 20,
                                marginTop: 15,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                            placeholder="Mobile number"
                            keyboardType="numeric"
                        />

                        <TextInput
                            style={{
                                borderWidth: 2,
                                borderColor: '#dddddd',
                                borderTopLeftRadius: 20,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopRightRadius: 20,
                                marginTop: 15,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}
                            placeholder="Email"
                            keyboardType="email-address"
                        />

                        <PrimaryPillFlatButton
                            title="Done"
                            onPress={() => navigate('ChooseMedium')}
                            style={{
                                marginHorizontal: '20%',
                                marginTop: 38,
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
