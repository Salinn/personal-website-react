import React, { useState, useContext } from 'react';
import MealTime from './mealTime';
import Ingredient from './ingredient';
import Steps from './steps';
import { RecipeContext } from '../../hooks/contexts';

const Recipe = props => {
  const {
    recipe,
    recipe: { name, photoUrl, ingredients, directions, time }
  } = props;
  const { dispatchGroceries, dispatchRecipeList } = useContext(RecipeContext);

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

  const addItems = () => {
    dispatchRecipeList({ type: 'ADD_RECIPE', recipe });
    dispatchGroceries({ type: 'ADD_INGREDIENTS', ingredients });
  };

  return (
    <div className="card p-3 mb-3">
      <h2>{name}</h2>
      <img src={photoUrl} alt={name} className="img-fluid pb-3" />
      <MealTime prepTime={time.prep} cookTime={time.cook} />
      <button
        onClick={addItems}
        className="btn btn-info col-12 mb-3"
        type="button"
      >
        Add To Grocery List
      </button>
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
      <button onClick={addItems} className="btn btn-info col-12" type="button">
        Add To Grocery List
      </button>
    </div>
  );
};

export default React.memo(Recipe);
