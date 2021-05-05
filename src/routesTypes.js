import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') !== null &&
      localStorage.getItem('level') == '999' ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export const UserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') !== null &&
      localStorage.getItem('level') == '1' ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);
