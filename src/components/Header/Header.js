import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav';
import Navigations from '../Navigations';
import UserMenu from '../UserMenu';
import styles from './Header.module.css';
import { authSelectors } from '../../redux/auth';

const Header = () => {
  const isLogIn = useSelector(authSelectors.loggerIn);
  return (
    <header className={styles.wrapHeader}>
      <Navigations />

      {isLogIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
