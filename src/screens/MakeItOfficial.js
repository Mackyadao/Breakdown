import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import colors from '../constants/colors';

export default class MakeItOfficial extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View
                style={{
                    backgroundColor: colors.light,
                    height: '100%',
                }}>
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
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            width: '90%',
                            backgroundColor: colors.neutralLighten3,
                            padding: 20,
                            alignSelf: 'center',
                            borderRadius: 30,
                            marginTop: 50,
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Oswald-Bold',
                                fontSize: 35,
                                alignSelf: 'center',
                                color: '#333',
                                textAlign: 'center',
                            }}>
                            Let’s make it official
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Regular',
                                fontSize: 16,
                                alignSelf: 'center',
                                color: '#000',
                                textAlign: 'justify',
                                marginTop: 25,
                            }}>
                            <Text style={styles.bold}>Tier 1</Text> Verified
                            Creators are represented by a red ring around their
                            avatar.{'\n\n'}
                            <Text style={styles.bold}>Tier 2</Text> Verified
                            Creators will also be represented by a golden “V“
                            alongside their username.{'\n\n'}Creators from both
                            tiers will have the added ability to live stream
                            video, monetize premium content, and confirm their
                            likeness for Admirers. Selecting “Okay” presents
                            steps to verification.
                        </Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Text
                                onPress={() => navigate('CreatorVerification')}
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
                                    padding: 10,
                                    fontSize: 16,
                                    marginHorizontal: 5,
                                    color: '#6C1717',
                                    textAlign: 'center',
                                    fontFamily: 'Montserrat-SemiBold',
                                }}>
                                Okay
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
                                    padding: 10,
                                    fontSize: 16,
                                    marginHorizontal: 5,
                                    color: '#6C1717',
                                    textAlign: 'center',
                                    fontFamily: 'Montserrat-SemiBold',
                                }}>
                                Maybe Later
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
});
