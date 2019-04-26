import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import ContactMeContainer from './containers/ContactMeContainer';

export default () => {
    return (
        <Switch>
            <Route path='/contactMe' component={ContactMeContainer} />
        </Switch>
    )
}