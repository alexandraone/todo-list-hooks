import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoLists from './lists/TodoLists';
import Todos from './todos/Todos';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoLists} />
        <Route path="/todo" component={Todos} />
      </Switch>
    </Router>
  );
};

export default App;
