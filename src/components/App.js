import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import TodoLists from './TodoLists';
import Todos from './Todos';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
            <Route exact path="/" component={TodoLists} />
            <Route path="/todo" component={Todos}/>
      </Switch>
    </Router>
  );
};

export default App;
