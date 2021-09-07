import React, {useState} from 'react';
import {View, Modal, Image, StyleSheet, Pressable} from 'react-native';

import colors from '../constants/colors';
import useOrientation from '../hooks/useOrientation';
import PremiumContentModal from '../modals/PremiumContentModal';
import ActionsOverlay from '../components/liveView/ActionsOverlay';
import LandscapeSidePanel from '../components/liveView/LandscapeSidePanel';

const LiveViewPaid = props => {
    const [premiumContentModalVisible, setPremiumContentModalVisible] =
        useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const orientation = useOrientation();

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

    const renderLandscapeSidePanel = () => {
        if (!orientation.isPortrait) {
            return <LandscapeSidePanel isPlaying={isPlaying} />;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
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

            {renderLandscapeSidePanel()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.light,
    },
    containerLeft: {
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
