import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

const ModalBackdrop = props => {
    const {children, ...otherProps} = props;

    return (
        <Pressable style={styles.modalBackdrop} {...otherProps}>
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    modalBackdrop: {
        zIndex: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default ModalBackdrop;
