import React, { createContext, useReducer, useContext } from 'react';
import {
  formReducer,
  types,
  generateInitialState
} from '../reducers/FormReducer';

const FormContext = createContext(null);

const FormProvider = props => {
  const { children, fields } = props;
  const initialState = generateInitialState(fields);
  const [formData, dispatchForm] = useReducer(formReducer, initialState);

  const values = {
    formData,
    dispatchForm
  };

  console.log('form values', values);
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  return useContext(FormContext);
};

const fieldTypes = {
  INPUT: 'INPUT',
  TEXT_BOX: 'TEXT_BOX'
};

export { useFormContext, FormProvider, types, fieldTypes };
