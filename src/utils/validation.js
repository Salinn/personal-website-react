const hasField = props => {
  const { formField, property } = props;
  return Object.prototype.hasOwnProperty.call(formField, property);
};

const hasError = props => {
  const {
    formField: { value, uncheckedValue }
  } = props;
  return value === uncheckedValue;
};

const minValidation = props => {
  const {
    value,
    formField: { min, label }
  } = props;
  const TO_SHORT = value.length < min;
  if (TO_SHORT) {
    return {
      hasError: true,
      message: `The ${label} field needs to be ${min} characters long`
    };
  }
  return { hasError: false, message: '' };
};

const maxValidation = props => {
  const {
    value,
    formField: { max, label }
  } = props;
  const TO_LONG = value.length > max;
  if (TO_LONG) {
    return {
      hasError: true,
      message: `The ${label} field cannot be longer than ${max} characters`
    };
  }
  return { hasError: false, message: '' };
};

const validate = props => {
  const { formField, value } = props;
  const errors = [];
  if (hasField({ formField, property: 'min' })) {
    errors.push(minValidation({ formField, value }));
  } else if (hasField({ formField, property: 'min' })) {
    errors.push(maxValidation({ formField, value }));
  }
  return errors.filter(error => {
    const DOES_HAVE_ERROR = error.hasError;
    return DOES_HAVE_ERROR;
  });
};

export { hasField, hasError, validate };
