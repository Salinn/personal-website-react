import { validate } from '../utils/validation';

const types = {
  UPDATE_FIELD_VALUE: 'UPDATE_FIELD_VALUE'
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
        [action.formField.name]: {
          ...state[action.formField.name],
          errors,
          value: errors.length > 0 ? action.formField.value : action.newValue,
          uncheckedValue: action.newValue
        }
      };
    default:
      return state;
  }
};

export { formReducer, types };
