import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactMeContainer from './containers/ContactMeContainer';
import RecipesComponent from './components/recipes';
import WeeklyMeals from './components/weeklyMeals';

export default () => {
  return (
    <Switch>
      <Route path="/contactMe" component={ContactMeContainer} />
      <Route path="/recipes" component={RecipesComponent} />
      <Route path="/recipes/:id" component={RecipesComponent} />
      <Route path="/weekly-meals" component={WeeklyMeals} />
    </Switch>
  );
};
