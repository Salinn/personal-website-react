import React from 'react';
import { RecipesProvider } from '../../contexts/RecipesContext';
import Page from './page';

const RecipesPage = () => {
  return (
    <RecipesProvider>
      <Page />
    </RecipesProvider>
  );
};

export default RecipesPage;
