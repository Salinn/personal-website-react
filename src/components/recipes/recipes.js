import React from 'react';
import Recipe from './recipe';

const Recipes = props => {
  return props.recipes.map(recipe => <Recipe recipe={recipe} />);
};

export default React.memo(Recipes);
