import React from 'react';
import Input from './input';
import Label from './label';

const InputSide = props => {
  const {
    formField,
    formField: { formGroupClassName = 'col' }
  } = props;

  return (
    <div className={`form-group row ${formGroupClassName}`}>
      <div className="col-sm-6">
        <Label formField={formField} />
      </div>
      <div className="col-sm-6">
        <Input formField={formField} />
      </div>
    </div>
  );
};

export default React.memo(InputSide);
