import React from 'react';
import FlatButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        "marginTop": "20px",
        "marginLeft": "10px",
        "marginRight": "10px"
    }
}

const signInComponent = () => (
  <FlatButton style={styles.button} label="Sign in" primary={true} />
);

export default signInComponent;
