import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';
import { List } from 'semantic-ui-react';

class Todo extends React.Component {
  removeTodo = (id) => {
    this.props.deleteTodo(id);

  };

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  };

  render() {
    const todosInList = this.props.todos.filter(todo => todo.todoListId === this.props.todoListId);
    return (
      <div>
        {(this.props.todos.length) ? (
            <List divided verticalAlign='middle'>
              {todosInList.map(todo => (
                <List.Item key={todo.id}>
                  <List.Content key={todo.id} floated='left' style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}>
                    {todo.title} {todo.completed === true ? "(completed)" : ""}
                  </List.Content>
                  <List.Content floated='right'>
                    <List.Icon name="minus circle" size="large" link onClick={() => this.removeTodo(todo.id)}/>
                    <List.Icon name="check circle" size="large" link onClick={() => this.toggleTodo(todo.id)}/>
                  </List.Content>
                </List.Item>))}
            </List>) : (<div
              style={{ marginTop: "50px" }}
              className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
            >
              <div className="alert alert-danger" role="alert">
                Todo List is empty
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(Todo);