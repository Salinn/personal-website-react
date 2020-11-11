import React from 'react';
import { Link } from 'react-router-dom';
import MealTime from './mealTime';

const Recipe = props => {
  const {
    recipe: { id, name, photoUrl, time }
  } = props;

  return (
    <div className="card p-3 mb-3">
      <h2>{name}</h2>
      <img src={photoUrl} alt={name} className="img-fluid pb-3" />
      <MealTime prepTime={time.prep} cookTime={time.cook} />
      <div className="row">
        <button className="btn btn-info col-4 offset-1 p-3" type="button">
          Add To Grocery List
        </button>
        <Link to={`/recipes/${id}`} className="btn btn-info col-4 offset-1 p-3">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Recipe);
