import React, { createContext, useReducer, useContext } from 'react';
import { recipeReducer, types } from '../reducers/RecipeReducer';

const RecipeContext = createContext(null);

const RecipeProvider = props => {
  const { children } = props;
  const [recipe, dispatchRecipe] = useReducer(recipeReducer, null);

  const values = {
    recipe,
    dispatchRecipe
  };

  console.log('recipe values', values);
  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
};

const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export { useRecipeContext, RecipeProvider, types };
