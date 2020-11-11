import React from 'react';
import Textbox from './textbox';
import Label from './label';

const InputForm = props => {
  const {
    formField,
    formField: { formGroupClassName = 'col' }
  } = props;

  return (
    <div className={`form-group ${formGroupClassName}`}>
      <Label formField={formField} />
      <Textbox formField={formField} />
    </div>
  );
};

export default React.memo(InputForm);
