import { lazy } from 'react';

const routes = [
  {
    name: 'HomePage',
    path: '/',
    exact: true,
    priv: false,
    restricted: true,
    component: lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
    ),
  },
  {
    name: 'ContactsPage',
    path: '/contacts',
    exact: true,
    priv: true,
    restricted: false,
    redirectTo: '/login',
    component: lazy(() =>
      import('../pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
    ),
  },
  {
    name: 'RegisterPage',
    path: '/register',
    exact: true,
    restricted: true,
    priv: false,
    redirectTo: '/contacts',
    component: lazy(() =>
      import('../pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
    ),
  },
  {
    name: 'LoginPage',
    path: '/login',
    exact: true,
    restricted: true,
    priv: false,
    redirectTo: '/contacts',
    component: lazy(() =>
      import('../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
    ),
  },
];

export default routes;
