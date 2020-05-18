import React from 'react';
import { RecipeProvider } from '../../contexts/RecipeContext';
import Page from './page';

const RecipesPage = () => {
  return (
    <RecipeProvider>
      <Page />
    </RecipeProvider>
  );
};

export default RecipesPage;
