import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactMeContainer from './containers/ContactMeContainer';
import RecipesComponent from './components/recipes';

export default () => {
  return (
    <Switch>
      <Route path="/contactMe" component={ContactMeContainer} />
      <Route path="/recipes" component={RecipesComponent} />
    </Switch>
  );
};
