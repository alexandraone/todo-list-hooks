import React from 'react';
import { Header, Segment, Container, Button, Icon } from 'semantic-ui-react';
import CreateTodo from './CreateTodo';
import Todo from "./Todo";
import history from '../history';

const Todos = (props) => {
  const todoListId = props.location.state.todoListId;

  return (
    <Container>
      <Button style={{ position: 'absolute', left: '0' }} onClick={() => history.push('/')}><Icon name="angle left" color='orange' size='large'/>Home</Button>
      <Segment clearing>
        <Header as='h2' floated='left'>
          {props.location.state.title}
        </Header>
        <Header as='h2' floated='right'>
          <CreateTodo todoListId={todoListId}/>
        </Header>
      </Segment>
      <Segment>
        <Todo todoListId={todoListId}/>
      </Segment>
    </Container>
  );
};

export default Todos;