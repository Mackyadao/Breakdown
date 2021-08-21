import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Icon,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import colors from '../constants/colors';
import PrimaryPillFlatButton from '../components/buttons/PrimaryPillFlatButton';

export default class ChooseMedium extends React.Component {
    state = {
        toggle1: false,
    };
    state = {
        toggle2: false,
    };
    state = {
        toggle3: false,
    };

    render() {
        const {navigate} = this.props.navigation;
        const bgColor = this.state.toggle1
            ? colors.neutralLighten3
            : colors.light;
        const bgColor2 = this.state.toggle2
            ? colors.neutralLighten3
            : colors.light;
        const bgColor3 = this.state.toggle3
            ? colors.neutralLighten3
            : colors.light;
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
                        position: 'absolute',
                        alignSelf: 'center',
                        top: 50,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Oswald-Bold',
                            fontSize: 40,
                            alignSelf: 'center',
                            color: colors.dark,
                            textAlign: 'center',
                        }}>
                        Choose your{'\n'}channels
                    </Text>

                    <TouchableOpacity
                        onPress={() =>
                            this.setState({toggle1: !this.state.toggle1})
                        }
                        style={{alignItems: 'center', margin: 5}}>
                        <View
                            style={{
                                width: 126,
                                height: 126,
                                padding: 4,
                                borderWidth: 2,
                                borderColor: bgColor,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                            }}>
                            <View
                                style={{
                                    backgroundColor: bgColor,
                                    width: '100%',
                                    height: '100%',
                                    padding: 15,
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100,
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                }}>
                                <Image
                                    source={require('../assets/icons/movie-solid-3x.png')}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                        <Text
                            style={{
                                fontSize: 24,
                                fontFamily: 'Montserrat-SemiBold',
                                color: colors.dark,
                            }}>
                            Movies
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            this.setState({toggle2: !this.state.toggle2})
                        }
                        style={{alignItems: 'center', margin: 5}}>
                        <View
                            style={{
                                width: 126,
                                height: 126,
                                padding: 4,
                                borderWidth: 2,
                                borderColor: bgColor2,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                            }}>
                            <View
                                style={{
                                    backgroundColor: bgColor2,
                                    width: '100%',
                                    height: '100%',
                                    padding: 15,
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100,
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                }}>
                                <Image
                                    source={require('../assets/icons/tv-solid-3x.png')}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                        <Text
                            style={{
                                fontSize: 24,
                                fontFamily: 'Montserrat-SemiBold',
                                color: colors.dark,
                            }}>
                            TV
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            this.setState({toggle3: !this.state.toggle3})
                        }
                        style={{alignItems: 'center', margin: 5}}>
                        <View
                            style={{
                                width: 126,
                                height: 126,
                                padding: 4,
                                borderWidth: 2,
                                borderColor: bgColor3,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                            }}>
                            <View
                                style={{
                                    backgroundColor: bgColor3,
                                    width: '100%',
                                    height: '100%',
                                    padding: 15,
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100,
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                }}>
                                <Image
                                    source={require('../assets/icons/books-solid-3x.png')}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                        <Text
                            style={{
                                fontSize: 24,
                                fontFamily: 'Montserrat-SemiBold',
                                color: colors.dark,
                            }}>
                            Books
                        </Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: 250,
                            justifyContent: 'space-between',
                            marginTop: 25,
                        }}>
                        <PrimaryPillFlatButton
                            title="All of them"
                            onPress={() => navigate('RTidentification1')}
                        />
                        <PrimaryPillFlatButton
                            title="Done"
                            onPress={() => navigate('RTidentification1')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
