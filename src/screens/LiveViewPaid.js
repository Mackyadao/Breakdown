import React, {useState} from 'react';
import {View, Modal, Image, StyleSheet, Pressable} from 'react-native';

import colors from '../constants/colors';
import PremiumContentModal from '../modals/PremiumContentModal';
import ActionsOverlay from '../components/liveView/ActionsOverlay';

const LiveViewPaid = props => {
    const [premiumContentModalVisible, setPremiumContentModalVisible] =
        useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePremiumContentModal = () => {
        setPremiumContentModalVisible(!premiumContentModalVisible);
    };

    const handlePlayPress = () => {
        const {navigation} = props;

        if (navigation.getParam('premiumContentAccess')) {
            /**
             * TODO:
             * Grant user to play the video with premium access
             */
            setIsPlaying(!isPlaying);
            return;
        } else {
            togglePremiumContentModal();
        }
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="none"
                transparent={true}
                visible={premiumContentModalVisible}
                onRequestClose={() => {
                    /**
                     * TODO: Maybe navigate the user back to the previous screen
                     * instead of just closing the Premium content modal
                     */
                    togglePremiumContentModal();
                }}>
                <Pressable
                    style={[styles.centeredView, styles.modalBackdrop]}
                    onPress={() => {
                        // do something when the user taps outside the modal

                        togglePremiumContentModal();
                    }}>
                    <PremiumContentModal
                        toggleModal={togglePremiumContentModal}
                    />
                </Pressable>
            </Modal>

            {/* Video thumbnail */}
            <Image
                source={require('../images/blackkeyslive.png')}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 1,
                }}
            />

            <ActionsOverlay
                isPlaying={isPlaying}
                handlePlayPress={handlePlayPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default LiveViewPaid;
