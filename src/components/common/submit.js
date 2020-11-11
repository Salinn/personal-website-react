import React from 'react';
import { useFormContext } from '../../contexts/FormContext';

const Submit = props => {
  const { children, submitRequest } = props;
  const {
    formData: { errorCount }
  } = useFormContext();

  const onClick = event => {
    event.preventDefault();
    if (errorCount === 0) {
      submitRequest();
    }
  };

  return (
    <button type="submit" onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Submit;
