import React from 'react';
import { useFormContext, fieldTypes } from '../../contexts/FormContext';
import Input from '../common/input';

const findFieldType = props => {
  const {
    formField: { id, type }
  } = props;
  const { INPUT } = fieldTypes;
  const FIELDS = {
    [INPUT]: <Input key={id} {...props} />
  };

  const HAS_TYPE = Object.prototype.hasOwnProperty.call(FIELDS, type);
  if (HAS_TYPE) {
    return FIELDS[type];
  }
  return <p>No Type Found</p>;
};

const Form = () => {
  const { formFields, dispatchForm } = useFormContext();

  const generatedFields = Object.keys(formFields).map(fieldName => {
    const formField = formFields[fieldName];
    return findFieldType({ formField, dispatchForm });
  });
  return <form>{generatedFields}</form>;
};

export default React.memo(Form);
