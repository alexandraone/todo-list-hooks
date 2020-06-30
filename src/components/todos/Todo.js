import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import { deleteTodo, toggleTodo } from '../../actions/index';
import './Todo.css';

const Todo = ({ todoListId }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodos = (id) => {
    dispatch(toggleTodo(id));
  };

  let result = 'Due:';
  const dueDate = (todo) => {
    const today = new Date().toLocaleDateString();
    if (today === todo.dueDate) {
      return `${result} Today`;
    } else if (today < todo.dueDate) {
      return `${result} ${todo.dueDate}`;
    } else {
      return `${result} Date has passed`;
    }
  };

  const todosInList = todos.filter((todo) => todo.todoListId === todoListId);
  return (
    <div>
      {todos.length ? (
        <List divided verticalAlign="middle">
          {todosInList.map((todo, index) => (
            <List.Item
              key={todo.id}
              style={
                index % 2 === 0
                  ? {
                      backgroundColor: '#EFEFEF',
                      padding: '10px',
                    }
                  : { backgroundColor: 'white', padding: '10px' }
              }
            >
              <List.Content floated="right">
                <List.Icon
                  name="minus circle"
                  size="large"
                  link
                  onClick={() => removeTodo(todo.id)}
                />
                <List.Icon
                  name="check circle"
                  size="large"
                  link
                  onClick={() => toggleTodos(todo.id)}
                />
              </List.Content>
              <List.Content
                key={todo.id}
                floated="left"
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                <p>
                  <span>
                    {todo.title} {todo.completed === true ? '(completed)' : ''}
                  </span>
                  <span>{dueDate(todo)}</span>
                </p>
              </List.Content>
            </List.Item>
          ))}
        </List>
      ) : (
        <div
          style={{ marginTop: '50px' }}
          className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
        >
          <div className="alert alert-danger" role="alert">
            Todo List is empty
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
