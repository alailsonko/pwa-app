import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import EditUser from '../pages/EditUser';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/edit-user" exact component={EditUser} />
      </Switch>
    </Router>
  );
}
