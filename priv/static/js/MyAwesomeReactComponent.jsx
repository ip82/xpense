import React from 'react';
import FlatButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        "marginLeft": "10px",
        "marginRight": "10px"
    }
}

const MyAwesomeReactComponent = () => (
    <div className="mw9 center ph3-ns">
        <div className="fl w-100 pa2">
            <div className="bg-white tc pv4">
                <h1 className="dark-blue"> xpense </h1>
                <FlatButton style={styles.button} label="Sign up" primary={true} />
                <FlatButton style={styles.button} label="Sign in" primary={true} />
            </div>
        </div>
    </div>
);

export default MyAwesomeReactComponent;
