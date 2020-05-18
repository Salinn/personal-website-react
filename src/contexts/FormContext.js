import React, { createContext, useReducer, useContext } from 'react';
import { formReducer, types } from '../reducers/FormReducer';

const FormContext = createContext(null);

const FormProvider = props => {
  const { children, fields } = props;
  const [formFields, dispatchForm] = useReducer(formReducer, fields);

  const values = {
    formFields,
    dispatchForm
  };

  console.log('form values', values);
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  return useContext(FormContext);
};

const fieldTypes = {
  INPUT: 'INPUT'
};

export { useFormContext, FormProvider, types, fieldTypes };
