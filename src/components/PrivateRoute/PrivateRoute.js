import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PriveteRoute = ({ children, redirectTo, ...routeProps }) => {
  const isLogIn = useSelector(authSelectors.loggerIn);
  return (
    <Route {...routeProps}>
      {isLogIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};
export default PriveteRoute;
