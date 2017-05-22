// for phoenix_html support, including form and button helpers
// copy the following scripts into your javascript bundle:
// * https://raw.githubusercontent.com/phoenixframework/phoenix_html/v2.3.0/priv/static/phoenix_html.js
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './containers/AppContainer'

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <div className="mw9 center ph3-ns">
            <div className="fl w-100 pa2">
                <div className="bg-white tc pv4">
                  <h1 className="dark-blue">xpense</h1>
                  <br></br>
                  <AppContainer />
                </div>
            </div>
        </div>
    </MuiThemeProvider>,
    document.getElementById('app')
);
