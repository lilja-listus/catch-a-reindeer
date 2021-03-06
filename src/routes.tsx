import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './containers/HomePage';
import { AboutPage } from './containers/AboutPage';
import { SpecialCharacters } from './containers/SpecialCharacters';

const Routes = userProps => {
    return (
        <Switch>
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/characters' component={SpecialCharacters} />
            <Route exact path='/' component={HomePage} />
        </Switch>
    );
}
export default Routes; 