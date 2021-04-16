import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({ children, redirectTo, ...routeProps }) => {
  const isLogIn = useSelector(authSelectors.loggerIn);
  return (
    <Route {...routeProps}>
      {isLogIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
