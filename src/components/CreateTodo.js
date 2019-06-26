import React from 'react';
import { connect } from 'react-redux';
import { Input, Container, Grid } from 'semantic-ui-react';
import { addTodo } from '../actions';
import Todo from './Todo';

class CreateTodo extends React.Component {
  state = { todoTitle: '' };

  onChange = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  onClick = () => {
    const todoListId = this.props.location.state.todoListId;
    this.props.addTodo(this.state.todoTitle, todoListId);
    this.setState({ todoTitle: '' });
  };

  render() {
    const todoListId = this.props.location.state.todoListId;
    return (
      <Container>
        <Grid className="segment centered">
          <Grid.Row>
            <Grid.Column>
              <h2>Todo List: {this.props.lists.filter(list => list.id === todoListId)[0].title }</h2>
              <Input onChange={this.onChange} value={this.state.todoTitle} type="text" placeholder="Add todo"/>
              <button
                className="ui button"
                type="button"
                onClick={this.onClick}>
                Add Todo
              </button>
              <Todo todoListId={todoListId}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
  return { todos: state.todos, lists: state.lists };
};

export default connect(mapStateToProps, { addTodo })(CreateTodo);