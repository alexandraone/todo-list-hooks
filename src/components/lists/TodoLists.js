import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import CreateList from './CreateList';
import TodoList from './TodoList';

const TodoLists = () => (
    <Container>
      <Segment clearing>
        <Header as="h2" floated="left">
          Todo Lists
        </Header>
        <Header as="h2" floated="right">
          <CreateList />
        </Header>
      </Segment>
      <TodoList />
    </Container>
  );

export default TodoLists;
