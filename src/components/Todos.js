import React from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import CreateTodo from './CreateTodo';
import Todo from "./Todo";

const Todos = (props) => {
 const todoListId = props.location.state.todoListId;

  return (
    <Container>
      <Segment clearing>
        <Header as='h2' floated='left'>
          {props.location.state.title}
        </Header>
        <Header as='h2' floated='right'>
          <CreateTodo todoListId={todoListId} />
        </Header>
      </Segment>
      <Segment>
        <Todo todoListId={todoListId} />
      </Segment>
    </Container>
  );
};

export default Todos;