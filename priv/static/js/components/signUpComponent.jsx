import React from 'react';
import FlatButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        "marginTop": "20px",
        "marginLeft": "10px",
        "marginRight": "10px"
    }
}

const signUpComponent = () => (
  <FlatButton style={styles.button} label="Sign up" primary={true} />
);

export default signUpComponent;
