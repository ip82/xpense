import React from 'react';
import MainNavComponent from '../components/MainNavComponent'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from '../routes'

const AppContainer = () => (
    <Router history={history}>
        <div>
            <MainNavComponent/>
            {routes}
        </div>
    </Router>
)

export default AppContainer;
