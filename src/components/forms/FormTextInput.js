import React from 'react';
import {TextInput} from 'react-native';

const FormTextInput = props => {
    const {name, onChangeText, ...otherProps} = props;

    return (
        <>
            <TextInput
                {...otherProps}
                onChangeText={text => {
                    onChangeText && onChangeText(text, name);
                }}
            />
        </>
    );
};

export default FormTextInput;
