import React, {StyleSheet} from 'react';
import {View, TextInput, Image} from 'react-native';
import CardView from 'react-native-cardview';

const CardInformation = () => {
    return (
        <CardView
            style={styles.cardView}
            cardElevation={cardElevation}
            cardMaxElevation={cardMaxElevation}
            cornerRadius={cornerRadius}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContet: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: colors.neutralLighten4,
                }}>
                <TextInput
                    style={[
                        styles.formInput,
                        {
                            flex: 1,
                        },
                    ]}
                    keyboardType="number-pad"
                    placeholder="1234 1234 1234 1234"
                />

                <View style={styles.cardIconsContainer}>
                    <Image
                        style={styles.cardIconsItem}
                        source={require('../../images/CardFormVisa2.png')}
                    />
                    <Image
                        style={styles.cardIconsItem}
                        source={require('../../images/CardFormMastercard1.png')}
                    />
                    <Image
                        style={styles.cardIconsItem}
                        source={require('../../images/CardFormAmericanExpress2.png')}
                    />
                    <Image
                        style={[styles.cardIconsItem, {resizeMode: 'cover'}]}
                        source={require('../../images/CardFormDiscover1.png')}
                    />
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    borderTopWidth: 1,
                    borderColor: colors.neutralLighten4,
                }}>
                <TextInput
                    style={[
                        styles.formInput,
                        {
                            flex: 1,
                            borderRightWidth: 2,
                            marginRight: -1,
                        },
                    ]}
                    keyboardType="number-pad"
                    placeholder="MM / YY"
                />

                <TextInput
                    style={[
                        styles.formInput,
                        {
                            flex: 1,
                            borderLeftWidth: 2,
                            marginLeft: -1,
                        },
                    ]}
                    keyboardType="number-pad"
                    placeholder="CVV/CVC Code"
                />
            </View>
        </CardView>
    );
};

const styles = StyleSheet.create({
    formInput: {
        borderWidth: 1,
        borderColor: colors.neutralLighten4,
        paddingHorizontal: 10,
    },
    cardView: {
        marginVertical: 4,
    },
    cardIconsContainer: {
        flexDirection: 'row',
        marginHorizontal: 6,
    },
    cardIconsItem: {
        height: 17,
        width: 30,
        marginHorizontal: 3,
        resizeMode: 'contain',
    },
});

export default CardInformation;
