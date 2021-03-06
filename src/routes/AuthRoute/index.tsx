/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface AuthRouteProps extends RouteProps {
  component: any;
  isLogged: boolean;
  loading: boolean;
}

const AuthRoute: React.FC<AuthRouteProps> = (props: AuthRouteProps) => {
  const { component: Component, isLogged, ...rest } = props;
  useEffect(() => {
    document.body.style.backgroundColor = '#14173D';
  }, []);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !isLogged ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/edit-user',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
