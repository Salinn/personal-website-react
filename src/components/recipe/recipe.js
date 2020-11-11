import React, { useState } from 'react';
import MealTime from './mealTime';
import Ingredient from './ingredient';
import Steps from './steps';

const Recipe = props => {
  const {
    recipe: {
      name = '',
      photoUrl = '',
      ingredients = [],
      directions = [],
      time = {}
    }
  } = props;

  const [stepNumber, setStepNumber] = useState(1);

  const listedIngredients = ingredients.map(ingredient => {
    return (
      <Ingredient
        key={`${ingredient.name}-${ingredient.measurement.amount}`}
        currentStep={stepNumber}
        {...ingredient}
      />
    );
  });

  const listedDirections = directions.map((direction, index) => {
    const listItemClassName =
      index + 1 === stepNumber
        ? 'list-group-item list-group-item-info'
        : 'list-group-item';
    return (
      <li key={direction} className={listItemClassName}>
        {direction}
      </li>
    );
  });

  return (
    <div className="card p-3 mb-3">
      <h2>{name}</h2>
      <img src={photoUrl} alt={name} className="img-fluid pb-3" />
      <MealTime prepTime={time.prep} cookTime={time.cook} />
      <div className="row">
        <div className="col-12 col-xl-6 pb-3">
          <h3>Ingredients</h3>
          <ul className="list-group">{listedIngredients}</ul>
        </div>
        <div className="col-12 col-xl-6 pb-3">
          <h3>Directions</h3>
          <ul className="list-group">{listedDirections}</ul>
        </div>
      </div>
      <div className="row px-5 pb-3">
        <Steps
          stepNumber={stepNumber}
          directionsLength={directions.length}
          setStepNumber={setStepNumber}
        />
      </div>
    </div>
  );
};

export default React.memo(Recipe);
