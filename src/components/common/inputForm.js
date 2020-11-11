import React from 'react';
import Input from './input';
import Label from './label';

const InputForm = props => {
  const {
    formField,
    formField: { formGroupClassName = 'col' }
  } = props;

  return (
    <div className={`form-group ${formGroupClassName}`}>
      <Label formField={formField} />
      <Input formField={formField} />
    </div>
  );
};

export default React.memo(InputForm);
