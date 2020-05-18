import React from 'react';

const Input = props => {
  const {
    dispatchForm,
    types,
    formField,
    formField: { id, name, uncheckedValue, label, errors }
  } = props;

  const onChange = event => {
    dispatchForm({
      type: types.UPDATE_FIELD_VALUE,
      formField,
      newValue: event.target.value
    });
  };
  const errorsToShow = errors.map(error => (
    <p className="text-danger">{error.message}</p>
  ));

  return (
    <label id={`label-${id}`}>
      {label}
      <input
        id={`input-${id}`}
        name={name}
        value={uncheckedValue}
        onChange={onChange}
      />
      {errorsToShow}
    </label>
  );
};

export default React.memo(Input);
