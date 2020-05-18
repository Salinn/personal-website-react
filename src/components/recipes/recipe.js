import React from 'react';
import { useHistory } from 'react-router-dom';
import MealTime from './mealTime';
import { useRecipeContext } from '../../contexts/RecipesContext';

const Recipe = props => {
  const {
    recipe,
    recipe: { id, name, photoUrl, ingredients, time }
  } = props;
  const { dispatchGroceries, dispatchRecipeList } = useRecipeContext();
  const history = useHistory();

  const addItems = () => {
    dispatchRecipeList({ type: 'ADD_RECIPE', recipe });
    dispatchGroceries({ type: 'ADD_INGREDIENTS', ingredients });
  };
  const viewRecipe = () => {
    history.push(`/recipes/${id}`);
  };

  return (
    <div className="card p-3 mb-3">
      <h2>{name}</h2>
      <img src={photoUrl} alt={name} className="img-fluid pb-3" />
      <MealTime prepTime={time.prep} cookTime={time.cook} />
      <div className="row">
        <button
          onClick={addItems}
          className="btn btn-info col-4 offset-1 p-3"
          type="button"
        >
          Add To Grocery List
        </button>
        <button
          onClick={viewRecipe}
          className="btn btn-info col-4 offset-1 p-3"
          type="button"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default React.memo(Recipe);
