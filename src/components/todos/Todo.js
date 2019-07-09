import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../actions/index';
import { List } from 'semantic-ui-react';
import './Todo.css';

class Todo extends React.Component {
  removeTodo = (id) => {
    this.props.deleteTodo(id);

  };

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  };

  dueDate = (todo) => {
    let result = 'Due:';
    const today = new Date().toLocaleDateString();
    if (today === todo.dueDate) {
      return `${result} Today`;
    } else if (today < todo.dueDate) {
      return `${result} ${todo.dueDate}`
    } else {
      return `${result} Date has passed`;
    }
  };

  render() {
    const todosInList = this.props.todos.filter(todo => todo.todoListId === this.props.todoListId);
    return (
      <div>
        {(this.props.todos.length) ? (
          <List divided verticalAlign='middle'>
            {todosInList.map((todo, index) => (
              <List.Item key={todo.id} style={(index % 2 === 0) ? {
                backgroundColor: '#EFEFEF',
                padding: '10px'
              } : { backgroundColor: 'white', padding: '10px' }}>
                <List.Content floated='right'>
                  <List.Icon name="minus circle" size="large" link onClick={() => this.removeTodo(todo.id)}/>
                  <List.Icon name="check circle" size="large" link onClick={() => this.toggleTodo(todo.id)}/>
                </List.Content>
                <List.Content key={todo.id} floated='left' style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}>
                  <p>
                <span>
                  {todo.title} {todo.completed === true ? "(completed)" : ""}
                </span>
                    <span>
                  {this.dueDate(todo)}
                </span>
                  </p>
                </List.Content>
              </List.Item>))}
          </List>) : (<div
            style={{ marginTop: '50px' }}
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