import React, { useReducer } from 'react';
import Recipe from './recipe';
import GrocerList from './groceryList';
import WeeklyMeals from '../weeklyMeals';
import { recipes } from '../recipeConstants';
import { RecipeContext } from '../../hooks/contexts';
import { sumIngredients, removeIngredients } from '../../helpers/recipeMath';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENTS':
      return action.ingredients
        .reduce((list, item) => {
          const [foundItem] = list.filter(
            listItem => listItem.name === item.name
          );
          if (foundItem) {
            const listWithoutFoundItem = list.filter(
              listItem => listItem.name !== item.name
            );
            const newItem = {
              ...item,
              measurement: sumIngredients(foundItem, item)
            };
            return listWithoutFoundItem.concat(newItem);
          }
          return list.concat(item);
        }, state)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'REMOVE_INGREDIENTS':
      return action.recipe.ingredients
        .reduce((list, item) => {
          const [foundItem] = list.filter(
            listItem => listItem.name === item.name
          );
          if (foundItem) {
            const listWithoutFoundItem = list.filter(
              listItem => listItem.name !== item.name
            );
            const newItem = {
              ...item,
              measurement: removeIngredients(foundItem, item)
            };
            if (newItem.measurement.amount == 0.0) return listWithoutFoundItem;
            return listWithoutFoundItem.concat(newItem);
          }
        }, state)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    default:
      throw new Error();
  }
};

const recipeReducer = (state, action) => {
  const [recipeExists] = state.filter(recipe => recipe.id === action.recipe.id);
  switch (action.type) {
    case 'ADD_RECIPE':
      if (recipeExists) {
        const listWithoutRecipe = state.filter(
          recipe => recipe.id !== action.recipe.id
        );
        return listWithoutRecipe
          .concat({ ...recipeExists, quantity: recipeExists.quantity + 1 })
          .sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      return state
        .concat({ ...action.recipe, quantity: 1 })
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'REMOVE_RECIPE':
      return state.filter(recipe => recipe.id !== action.recipe.id);
    default:
      return state;
  }
};

const Recipes = () => {
  const [groceries, dispatchGroceries] = useReducer(reducer, []);
  const [recipeList, dispatchRecipeList] = useReducer(recipeReducer, []);
  const generatedRecipes = recipes.map(recipe => <Recipe recipe={recipe} />);

  return (
    <RecipeContext.Provider
      value={{ groceries, recipeList, dispatchGroceries, dispatchRecipeList }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 order-2 order-md-1">
            <h1 className="text-white">Recipes</h1>
            {generatedRecipes}
          </div>
          <div className="col-12 col-md-4 order-1 order-md-2">
            <div className="sticky-top">
              <h1 className="text-white">Grocery List</h1>
              <GrocerList />
              <WeeklyMeals recipes={recipes} />
            </div>
          </div>
        </div>
      </div>
    </RecipeContext.Provider>
  );
};

export default React.memo(Recipes);
