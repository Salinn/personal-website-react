import React from 'react';
import { useRecipeProps } from './hooks';
import Recipe from './recipe';
import { isDefined } from '../../utils/evaluate';

const RecipePage = props => {
  const { recipe } = useRecipeProps(props);
  const recipeToDisplay = !isDefined(recipe) && <Recipe recipe={recipe} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 order-2 order-md-1">
          <h1 className="text-white">Recipe</h1>
          {recipeToDisplay}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecipePage);
