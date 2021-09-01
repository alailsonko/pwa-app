import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import Home from '../pages/Home';
import Register from '../pages/Register';
import EditUser from '../pages/EditUser';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

function Routes(): JSX.Element {
  const isLogged = useSelector((state: any) => state.signup.isLogged);
  const loading = useSelector((state: any) => state.signup.loading);
  return (
    <Router>
      <Switch>
        <AuthRoute
          path="/"
          exact
          loading={loading}
          isLogged={isLogged}
          component={Home}
        />
        <AuthRoute
          path="/register"
          exact
          loading={loading}
          isLogged={isLogged}
          component={Register}
        />
        <PrivateRoute
          path="/edit-user"
          exact
          component={EditUser}
          loading={loading}
          isLogged={isLogged}
        />
      </Switch>
    </Router>
  );
}

export default connect()(Routes);
