import React from 'react';
import Recipe from './recipe';
import { useRecipeContext } from '../../contexts/RecipesContext';

const Recipes = () => {
  const { recipes } = useRecipeContext();

  return recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />);
};

export default React.memo(Recipes);
