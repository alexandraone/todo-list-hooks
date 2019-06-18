import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import CreateTodo from './CreateTodo';
import DeleteTodo from './TodoList';

const App = () => {
  return (
    <Container>
      <Grid className="segment centered">
        <Grid.Row>
          <Grid.Column>
            <CreateTodo/>
            <DeleteTodo/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
