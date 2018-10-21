import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import EarthQuakes from './areas/earthquakeDashboard/earthquakeTable';
import AppNavBar from './shared/navbar/navbar';

ReactDOM.render(
    <div>
        <AppNavBar/>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={EarthQuakes} />
                <Route exact path='/earthquakes' component={EarthQuakes} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
