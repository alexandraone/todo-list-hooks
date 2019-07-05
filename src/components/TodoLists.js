import React from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import TodoList from './TodoList';
import CreateList from './CreateList';

const TodoLists = (props) => {
    return (
      <Container>
        <Segment clearing>
          <Header as='h2' floated='left'>
            Todo Lists
          </Header>
          <Header as='h2' floated='right'>
            <CreateList/>
          </Header>
        </Segment>
          <TodoList />
      </Container>
    );
};

export default TodoLists;