import React from 'react';
import Recipe from './recipe';
import { useRecipes } from './hooks';

const Recipes = props => {
  const { recipes = [] } = useRecipes(props);

  return recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />);
};

export default React.memo(Recipes);
