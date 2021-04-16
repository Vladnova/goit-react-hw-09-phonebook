import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigations.module.css';

const Navigations = () => {
  const isLogIn = useSelector(authSelectors.loggerIn);
  return (
    <nav>
      <NavLink
        className={styles.link}
        activeClassName={styles.linkActive}
        to="/"
        exact
      >
        Home
      </NavLink>
      {isLogIn && (
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to="/contacts"
          exact
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigations;
