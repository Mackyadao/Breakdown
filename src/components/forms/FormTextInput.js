import React from 'react';
import {TextInput} from 'react-native';

const FormTextInput = (props, ref) => {
    const {name, onChangeText, ...otherProps} = props;

    return (
        <>
            <TextInput
                ref={ref}
                {...otherProps}
                onChangeText={text => {
                    onChangeText && onChangeText(text, name);
                }}
            />
        </>
    );
};

export default React.forwardRef(FormTextInput);
