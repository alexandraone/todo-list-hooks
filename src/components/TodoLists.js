import React from 'react';
import { Header, Segment, Icon, Container } from 'semantic-ui-react';
import TodoList from './TodoList';
import CreateList from './CreateList';

const TodoLists = (props) => {
  console.log(props);
    return (
      <Container>
        <Segment clearing>
          <Header as='h2' floated='left'>
            <Icon name="setting" color='orange'/>
          </Header>
          <Header as='h2' floated='left'>
            Todo Lists
          </Header>
          <Header as='h2' floated='right'>
            <CreateList/>
          </Header>
        </Segment>
        <Segment>
          <TodoList />
        </Segment>
      </Container>
    );
};

export default TodoLists;