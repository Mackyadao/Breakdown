import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import ModalBackdrop from './ModalBackdrop';

const ProofOfWorkInfoModal = props => {
    const {onOutsidePress} = props;

    return (
        <ModalBackdrop onPress={onOutsidePress}>
            <View style={styles.modal}>
                <Text style={styles.contentText}>
                    Proof of work may come in the form of hyperlink, website,
                    academy membership, etc. Once reviewed we will contact you
                    for any questions or clarifications, as well as the outcome
                    of our review.
                </Text>
            </View>
        </ModalBackdrop>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 14,
        backgroundColor: colors.light,
        borderRadius: 10,
        maxWidth: 296,
    },
    contentText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: colors.dark,
    },
});

export default ProofOfWorkInfoModal;
