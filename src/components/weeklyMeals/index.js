import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { RecipeContext } from '../../hooks/contexts';

const WeeklyMeals = () => {
  const { recipeList, dispatchRecipeList, dispatchGroceries } = useContext(
    RecipeContext
  );

  console.log('rl', recipeList);
  const thisWeeksRecipes = recipeList.map(recipe => {
    const removeMeal = () => {
      dispatchRecipeList({ type: 'REMOVE_RECIPE', recipe });
      dispatchGroceries({ type: 'REMOVE_INGREDIENTS', recipe });
    };
    return (
      <li className="list-group-item" key={recipe.id}>
        <span>
          <p>
            {recipe.quantity} x {recipe.name}
          </p>
          <p>cooking time: {recipe.time.cook + recipe.time.prep} </p>
        </span>
        <span onClick={removeMeal}>
          <MdClose
            color="red"
            size="2em"
            style={{ verticalAlign: 'middle', margin: '5' }}
          />
        </span>
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
