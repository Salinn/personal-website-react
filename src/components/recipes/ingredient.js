import React from 'react';

const Ingredient = props => {
  const { label, name, measurement, cutType, steps, currentStep } = props;

  const measurementLabel = measurement
    ? `${measurement.amount} ${measurement.unit} `
    : '';
  const cutTypeLabel = cutType ? ` cut into ${cutType}` : '';
  const description = label || `${measurementLabel}${name}${cutTypeLabel}`;
  const isCurrentStep = steps.includes(currentStep);
  const listItemClassName = isCurrentStep
    ? 'list-group-item list-group-item-info'
    : 'list-group-item';

  return <li className={listItemClassName}>{description}</li>;
};

export default React.memo(Ingredient);
