import { validate } from '../utils/validation';

const types = {
  UPDATE_FIELD_VALUE: 'UPDATE_FIELD_VALUE'
};

export const generateInitialState = fields => {
  return {
    formFields: fields,
    errorCount: 0
  };
};

const formReducer = (state, action) => {
  const errors = validate({
    formField: action.formField,
    value: action.newValue
  });

  switch (action.type) {
    case types.UPDATE_FIELD_VALUE:
      return {
        ...state,
        errorCount: determineErrorCount(state, errors),
        formFields: {
          ...state.formFields,
          [action.formField.name]: {
            ...state.formFields[action.formField.name],
            errors,
            value: errors.length > 0 ? action.formField.value : action.newValue,
            uncheckedValue: action.newValue
          }
        }
      };
    default:
      return state;
  }
};

export const determineErrorCount = (state, errors) => {
  return Object.keys(state.formFields).reduce((count, key) => {
    return count + state.formFields[key].errors.length;
  }, errors.length);
};

export { formReducer, types };
