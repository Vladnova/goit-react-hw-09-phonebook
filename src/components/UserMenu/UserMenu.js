import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import avatar from './defaultLogo.png';
import styles from './User.module.css';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const isLogOut = () => dispatch(authOperations.onLogOut());

  return (
    <div className={styles.wrapUserMenu}>
      <img className={styles.icon} src={avatar} alt="Avatar" />
      <span className={styles.welcome}>Welcome {email} </span>
      <button className={styles.button} type="button" onClick={isLogOut}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
