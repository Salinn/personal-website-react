import React from 'react';
import { types, useFormContext } from '../../contexts/FormContext';

const Input = props => {
  const {
    formField,
    formField: { id, name, uncheckedValue }
  } = props;
  const { dispatchForm } = useFormContext();

  const onChange = event => {
    dispatchForm({
      type: types.UPDATE_FIELD_VALUE,
      formField,
      newValue: event.target.value
    });
  };

  return (
    <input
      id={`input-${id}`}
      name={name}
      className="form-control"
      value={uncheckedValue}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);
