import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import DefaultPillFlatButton from '../components/buttons/DefaultPillFlatButton';

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
                            backgroundColor: colors.neutralLighten4,
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
                                color: colors.dark,
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
                                marginTop: 25,
                            }}>
                            <Text style={styles.boldText}>Tier 1</Text> Verified
                            Creators are represented by a red ring around their
                            avatar.{'\n\n'}
                            <Text style={styles.boldText}>Tier 2</Text> Verified
                            Creators will also be represented by a golden “
                            {
                                <View
                                    style={
                                        styles.verifiedCreatorBadgeContainer
                                    }>
                                    <Text
                                        style={[
                                            styles.boldText,
                                            styles.verifiedCreatorBadge,
                                        ]}>
                                        V
                                    </Text>
                                </View>
                            }
                            “ alongside their username.{'\n\n'}Creators from
                            both tiers will have the added ability to live
                            stream video, monetize premium content, and confirm
                            their likeness for Admirers. Selecting “Okay”
                            presents steps to verification.
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                                marginTop: 20,
                            }}>
                            <DefaultPillFlatButton
                                title="Okay"
                                inverted
                                onPress={() => navigate('CreatorVerification')}
                            />

                            <DefaultPillFlatButton
                                title="Maybe Later"
                                inverted
                                onPress={() => navigate('Home')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
    verifiedCreatorBadgeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 18,
        height: 18,
        borderRadius: 18 / 2,
        backgroundColor: colors.light,
    },
    verifiedCreatorBadge: {
        alignSelf: 'center',
        fontSize: 14,
        color: colors.secondary,
    },
});
