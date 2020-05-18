import React from 'react';

const MealTime = props => {
  const { prepTime, cookTime } = props;

  return (
    <div className="card-group pb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Prepping Time</h5>
          <p className="card-text">{prepTime} minutes</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cooking Time</h5>
          <p className="card-text">{cookTime} minutes</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Total Time</h5>
          <p className="card-text">{prepTime + cookTime} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MealTime);
