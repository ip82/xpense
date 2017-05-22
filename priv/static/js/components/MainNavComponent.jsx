import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    navLink: {
        "marginLeft": "10px",
        "marginRight": "10px"
    }
}

const MainNavComponent = () => (
    <div>
        <NavLink exact style={styles.navLink} className="f4 fw6 blue link dim" activeStyle={{color: 'grey'}} to="/">Home</NavLink>
        <NavLink exact style={styles.navLink} className="f4 fw6 blue link dim" activeStyle={{color: 'grey'}} to="/sign-up">Sign up</NavLink>
        <NavLink exact style={styles.navLink} className="f4 fw6 blue link dim" activeStyle={{color: 'grey'}} to="/sign-in">Sign in</NavLink>
    </div>
)

export default MainNavComponent;
