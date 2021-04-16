import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Loader from '../Loader/Loader';
const HomePage = lazy(
  () => import('../../pages/HomePage') /* webpackChunkName: "HomePage" */,
);
const ContactsPage = lazy(
  () =>
    import('../../pages/ContactsPage') /* webpackChunkName: "ContactsPage" */,
);
const LoginPage = lazy(
  () => import('../../pages/LoginPage') /* webpackChunkName: "RegisterPage" */,
);
const RegisterPage = lazy(
  () => import('../../pages/RegisterPage') /* webpackChunkName: "LoginPage" */,
);

const Main = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <PublicRoute path="/" exact>
        <HomePage />
      </PublicRoute>

      <PrivateRoute path="/contacts" redirectTo="/login">
        <ContactsPage />
      </PrivateRoute>

      <PublicRoute path="/register" restricted redirectTo="/contacts">
        <RegisterPage />
      </PublicRoute>

      <PublicRoute path="/login" restricted redirectTo="/contacts">
        <LoginPage />
      </PublicRoute>
    </Switch>
  </Suspense>
);

export default Main;
