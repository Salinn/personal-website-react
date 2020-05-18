import React from 'react';

const Steps = props => {
  const { stepNumber, directionsLength, setStepNumber } = props;

  const canGoLower = stepNumber > 1;
  const cannotGoLower = stepNumber <= 1;

  const canGoHigher = stepNumber < directionsLength;
  const cannotGoHigher = stepNumber >= directionsLength;

  const incrementStep = () => {
    if (canGoHigher) {
      setStepNumber(stepNumber + 1);
    }
  };
  const decrementStep = () => {
    if (canGoLower) {
      setStepNumber(stepNumber - 1);
    }
  };

  const buttonClasses = 'btn btn-outline-info btn-lg col-12 col-lg-4';
  const previousClasses = `${buttonClasses} order-2 order-lg-1`;
  const nextClasses = `${buttonClasses} order-3 order-lg-3`;

  return (
    <React.Fragment>
      <button
        className={previousClasses}
        onClick={decrementStep}
        type="button"
        alt="Previous Step"
        disabled={cannotGoLower}
      >
        Previous Step
      </button>
      <span className="align-middle text-center h4 col-12 col-lg-4 order-1 order-lg-2">
        Step {stepNumber} of {directionsLength}
      </span>
      <button
        className={nextClasses}
        onClick={incrementStep}
        type="button"
        alt="Previous Step"
        disabled={cannotGoHigher}
      >
        Next Step
      </button>
    </React.Fragment>
  );
};

export default React.memo(Steps);
