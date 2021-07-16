export function hasErrorField(errors) {
    let isFormError = false;

    for (let errorFieldValue of Object.values(errors)) {
        if (errorFieldValue.length > 0) {
            isFormError = true;
        }
    }

    return isFormError;
}

export function hasEmptyField(formValues) {
    let hasEmptyField = false;

    // check if fields are not empty
    for (let fieldValue of Object.values(formValues)) {
        if (!fieldValue.length > 0) {
            hasEmptyField = true;
        }
    }

    return hasEmptyField;
}

export const formValidationRegEx = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^[A-Za-z|\s]+$/,
};

export function validateField(fieldName, fieldValue, currentFormValues) {
    let fieldErrors = {};

    switch (fieldName) {
        case 'name':
            fieldErrors[fieldName] =
                fieldValue.length > 100
                    ? 'Name should not be longer than 100 characters'
                    : fieldValue.length &&
                      !formValidationRegEx.name.test(fieldValue)
                    ? 'Name should only contain letters'
                    : '';
            break;

        case 'email':
            fieldErrors[fieldName] = !formValidationRegEx.email.test(fieldValue)
                ? 'Invalid email'
                : '';
            break;

        default:
            break;
    }

    return fieldErrors;
}
