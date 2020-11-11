import React from 'react';
import Recipes from './recipes';
import GrocerList from './groceryList';

const RecipesPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 order-2 order-md-1">
          <h1 className="text-white">Recipes</h1>
          <Recipes />
        </div>
        <div className="col-12 col-md-4 order-1 order-md-2">
          <div className="sticky-top">
            <h1 className="text-white">Grocery List</h1>
            <GrocerList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecipesPage);
