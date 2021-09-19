import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import ModalBackdrop from './ModalBackdrop';
import RadioButton from '../components/buttons/RadioButton';

const MovieCategory = props => {
    return (
        <Pressable {...props} style={styles.categoryListItem}>
            <Text style={styles.contentText}>Movie</Text>
        </Pressable>
    );
};

const TVCategory = props => {
    return (
        <Pressable {...props} style={styles.categoryListItem}>
            <Text style={styles.contentText}>TV</Text>
        </Pressable>
    );
};

const BooksCategory = props => {
    return (
        <Pressable {...props} style={styles.categoryListItem}>
            <Text style={styles.contentText}>Books</Text>
        </Pressable>
    );
};

const categoryOptions = [
    {
        key: 'movie',
        renderValue: MovieCategory,
    },
    {
        key: 'tv',
        renderValue: TVCategory,
    },
    {
        key: 'books',
        renderValue: BooksCategory,
    },
];

const ArtCategoryModal = () => {
    return (
        <ModalBackdrop>
            <View style={styles.modal}>
                <RadioButton
                    optionItemContainerStyle={{marginBottom: 0}}
                    orientation="right"
                    options={categoryOptions}
                />
            </View>
        </ModalBackdrop>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        maxWidth: 261,
    },
    categoryListItem: {
        flex: 1,
        marginVertical: 5,
    },
    contentText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: colors.dark,
    },
});

export default ArtCategoryModal;
