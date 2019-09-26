import React from 'react';
import Recipe from './recipe';

const recipes = [
  {
    name: 'Loaded Cauliflower Bake',
    photo_url: '',
    ingredients: [],
    directions: [],
    time: {
      prep: 15,
      cook: 30
    },
    servings: 8
  }
];

const Recipes = () => {
  const generatedRecipes = recipes.map(recipe => <Recipe {...recipe} />);
  return (
    <div>
      <h1>Hi</h1>
      <div>{generatedRecipes}</div>
    </div>
  );
};

export default React.memo(Recipes);
