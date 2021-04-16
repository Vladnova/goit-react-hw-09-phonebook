import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav>
      <NavLink
        className={styles.link}
        activeClassName={styles.linkActive}
        to="/register"
        exact
      >
        Register
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.linkActive}
        to="/login"
        exact
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
