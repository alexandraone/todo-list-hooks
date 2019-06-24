import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';
import { Icon, List } from 'semantic-ui-react';

class TodoList extends React.Component {
  removeTodo = (id) => {
    this.props.deleteTodo(id);

  };

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <div>
        {(this.props.todos.length) ? (
            <List divided verticalAlign='middle'>
              {this.props.todos.map(todo => (
                <List.Item key={todo.id}>
                  <List.Content key={todo.id} floated='left' style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}>
                    {todo.title} {todo.completed === true ? "(completed)" : ""}
                  </List.Content>
                  <List.Content floated='right'>
                    <button onClick={() => this.removeTodo(todo.id)}><Icon name="minus circle"/></button>
                    <button onClick={() => this.toggleTodo(todo.id)}><Icon name="check circle"/></button>
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

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoList);