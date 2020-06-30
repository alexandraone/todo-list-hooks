import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoList, deleteTodo } from '../../actions/index';
import { List } from 'semantic-ui-react';
import history from '../../history';
import EditList from './EditList';

const Todo = () => {
  const lists = useSelector(state => state.lists);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const removeTodoList = id => {
    dispatch(deleteTodoList(id));
    todos
      .filter(todo => todo.todoListId === id)
      .map(todo => dispatch(deleteTodo(todo.id)));
  };

  return (
    <div>
      {lists.length ? (
        <List divided verticalAlign="middle">
          {lists.map((list, index) => {
            return (
              <List.Item
                key={list.id}
                style={
                  index % 2 === 0
                    ? {
                        backgroundColor: '#EFEFEF',
                        padding: '10px'
                      }
                    : { backgroundColor: 'white', padding: '10px' }
                }
              >
                <List.Content floated="right">
                  <List.Icon
                    name="minus circle"
                    size="large"
                    link
                    onClick={() => removeTodoList(list.id)}
                  />
                </List.Content>
                <List.Content floated="right">
                  <EditList listId={list.id} />
                </List.Content>
                <List.Icon name="list" size="large" />
                <List.Content>
                  <List.Header
                    as="a"
                    onClick={() =>
                      history.push({
                        pathname: '/todo',
                        state: { todoListId: list.id, title: list.title }
                      })
                    }
                  >
                    {list.title}
                  </List.Header>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      ) : (
        <div
          style={{ marginTop: '50px' }}
          className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
        >
          <div className="alert alert-danger" role="alert">
            No Todo List exists
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
