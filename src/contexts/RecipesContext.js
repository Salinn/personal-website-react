import React, { createContext, useReducer, useContext } from 'react';
import {
  groceryReducer,
  recipeReducer,
  recipeListReducer,
  types
} from '../reducers/RecipesReducer';

const RecipesContext = createContext(null);

const RecipesProvider = props => {
  const { children } = props;
  const [groceries, dispatchGroceries] = useReducer(groceryReducer, []);
  const [recipes, dispatchRecipes] = useReducer(recipeReducer, []);
  const [recipeList, dispatchRecipeList] = useReducer(recipeListReducer, []);

  const values = {
    groceries,
    recipes,
    recipeList,
    dispatchGroceries,
    dispatchRecipes,
    dispatchRecipeList
  };

  console.log('recipes values', values);
  return (
    <RecipesContext.Provider value={values}>{children}</RecipesContext.Provider>
  );
};

const useRecipeContext = () => {
  return useContext(RecipesContext);
};

export { useRecipeContext, RecipesProvider, types };
