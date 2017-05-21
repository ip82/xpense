import React from 'react'
import {Router, Route, IndexRoute} from "react-router"
import AppContainer from './containers/AppContainer'
import HomePage from './containers/HomePageContainer'
import signInComponent from './components/signInComponent';
import signUpComponent from './components/signUpComponent';

const routes = (
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/sign-up" component={signUpComponent}/>
            <Route path="/sign-in" component={signInComponent}/>
        </div>

);

export default routes;