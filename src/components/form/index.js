import React from 'react';
import { FormProvider } from '../../contexts/FormContext';
import Form from './form';

const FormContainer = props => {
  const { fields } = props;
  return (
    <FormProvider fields={fields}>
      <Form />
    </FormProvider>
  );
};

export default React.memo(FormContainer);
