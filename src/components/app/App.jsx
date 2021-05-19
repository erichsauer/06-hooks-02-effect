import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AvatarList from '../../containers/AvatarList';
import AvatarDetail from '../../containers/AvatarDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AvatarList} />
        <Route path="/:id" component={AvatarDetail} />
      </Switch>
    </Router>
  );
}
