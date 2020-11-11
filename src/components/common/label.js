/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const Label = props => {
  const {
    children,
    formField: { id, label }
  } = props;

  return (
    <label id={`label-${id}`} htmlFor={`input-${id}`}>
      {label || children}
    </label>
  );
};

export default React.memo(Label);
