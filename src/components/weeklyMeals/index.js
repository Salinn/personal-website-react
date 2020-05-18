import React from 'react';
import { MdClose } from 'react-icons/md';
import { useRecipeContext } from '../../contexts/RecipesContext';

const WeeklyMeals = () => {
  const {
    recipeList,
    dispatchRecipeList
    // dispatchGroceries
  } = useRecipeContext();

  const thisWeeksRecipes = recipeList.map((recipe, index) => {
    const removeMeal = () => {
      dispatchRecipeList({ type: 'REMOVE_RECIPE', recipe });
      // dispatchGroceries({ type: 'REMOVE_INGREDIENTS', recipe });
    };
    const NOT_LAST_RECIPE = index !== recipeList.length - 1;
    const line = NOT_LAST_RECIPE && <hr />;
    return (
      <li className="list-group-item" key={recipe.id}>
        <div className="row no-gutters">
          <div className="col-11">
            <div className="row">
              <div className="col-12">
                {recipe.quantity} x {recipe.name}
              </div>
              <div className="col-12">
                Cooking time: {recipe.time.cook + recipe.time.prep}
              </div>
            </div>
          </div>
          <div className="col-1">
            <MdClose
              onClick={removeMeal}
              color="red"
              size="2em"
              style={{ verticalAlign: 'middle', margin: '5' }}
            />
          </div>
        </div>
        {line}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h1 className="text-white">Recipes</h1>
      <div className="card">
        <ul className="list-group list-group-flush">{thisWeeksRecipes}</ul>
      </div>
    </React.Fragment>
  );
};

export default React.memo(WeeklyMeals);
