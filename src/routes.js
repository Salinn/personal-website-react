import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipesComponent from './components/recipes';
import RecipeComponent from './components/recipe';
import CreateRecipe from './components/createRecipe';
import WeeklyMeals from './components/weeklyMeals';

export default () => {
  return (
    <Switch>
      <Route exact strict path="/recipes/new" component={CreateRecipe} />
      <Route exact strict path="/recipes/:id" component={RecipeComponent} />
      <Route exact strict path="/recipes" component={RecipesComponent} />
      <Route path="/weekly-meals" component={WeeklyMeals} />
    </Switch>
  );
};
