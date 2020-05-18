import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from './recipe';
import { useGetRecipe } from '../../api/recipe';
import { useRecipeContext, types } from '../../contexts/RecipeContext';

const Page = () => {
  const { recipe, dispatchRecipe } = useRecipeContext();
  const { id } = useParams();
  const { requestRecipes } = useGetRecipe({
    id,
    dispatch: dispatchRecipe,
    type: types.ADD_RECIPE
  });

  useEffect(() => {
    requestRecipes();
  }, [requestRecipes]);

  const recipeToDisplay = !!recipe && <Recipe recipe={recipe} />;

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

export default React.memo(Page);
