import React from 'react';
import {
    Text,
    View,
    Modal,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';

import PremiumContentModal from '../modals/PremiumContentModal';

export default class LiveViewPaid extends React.Component {
    state = {
        search: '',
        premiumContentModalVisible: false,
    };

    updateSearch = search => {
        this.setState({search});
    };

    togglePremiumContentModal = () => {
        this.setState({
            premiumContentModalVisible: !this.state.premiumContentModalVisible,
        });
    };

    handlePlayPress = () => {
        const {navigation} = this.props;

        if (navigation.getParam('premiumContentAccess', false)) {
            /**
             * TODO:
             * Grant user to play the video with premium access
             */
            return;
        } else {
            this.togglePremiumContentModal();
        }
    };

    render() {
        return (
            <View style={[styles.container, styles.centeredView]}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.premiumContentModalVisible}
                    onRequestClose={() => {
                        this.setState({
                            premiumContentModalVisible:
                                !this.state.premiumContentModalVisible,
                        });
                    }}>
                    <View style={[styles.centeredView]}>
                        <PremiumContentModal
                            toggleModal={this.togglePremiumContentModal}
                        />
                    </View>
                </Modal>

                <Image
                    source={require('../images/blackkeyslive.png')}
                    style={{width: '100%', height: '100%'}}
                />
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            margin: 10,
                        }}>
                        <View style={{marginLeft: 10, flex: 1}}>
                            <Image
                                source={require('../images/Vector2.png')}
                                style={{width: 25, height: 25}}
                            />
                        </View>

                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Image
                                source={require('../images/Ellipse110.png')}
                                style={{
                                    width: 14,
                                    height: 14,
                                    marginLeft: 10,
                                    alignSelf: 'center',
                                }}
                            />
                            <Text
                                style={{
                                    textAlign: 'right',
                                    fontFamily: 'Montserrat-SemiBold',
                                    color: '#fff',
                                    fontSize: 18,
                                }}>
                                Live
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={this.handlePlayPress}
                        style={{justifyContent: 'center', height: '100%'}}>
                        <Image
                            source={require('../images/play1.png')}
                            style={{
                                width: 95,
                                height: 85,
                                alignSelf: 'center',
                                marginBottom: 100,
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 110,
                            width: '100%',
                            position: 'absolute',
                            bottom: 0,
                            padding: 10,
                        }}>
                        <Text
                            style={{
                                fontFamily: 'Montserrat-SemiBold',
                                color: '#fff',
                            }}>
                            @blackkeys V
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Montserrat-Regular',
                                color: '#fff',
                            }}>
                            Learn some piano basics
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dimmedBackground: {
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
});
