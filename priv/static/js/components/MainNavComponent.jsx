import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navLink: {
        "marginLeft": "10px",
        "marginRight": "10px"
    }
}

const MainNavComponent = () => (
    <div>
        <Link style={styles.navLink} to="/">Home</Link>
        <Link style={styles.navLink} to="/sign-up">Sign up</Link>
        <Link style={styles.navLink} to="/sign-in">Sign in</Link>
    </div>
)

export default MainNavComponent;
