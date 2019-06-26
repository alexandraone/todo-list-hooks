import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CreateList from './CreateList';
import history from '../history';
import CreateTodo from './CreateTodo';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
            <Route exact path="/" component={CreateList} />
            <Route path="/todo" component={CreateTodo}/>
      </Switch>
    </Router>
  );
};

export default App;
