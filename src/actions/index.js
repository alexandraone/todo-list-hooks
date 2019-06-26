import {
  ADD_LIST,
  DELETE_LIST,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from './types';

//let nextTodoListId = 0;
//let nextTodoId = 0;

export const addTodo = (title, todoListId) => {
  return {
    type: ADD_TODO,
    title,
    completed: false,
    //id: ++nextTodoId,
    todoListId
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
};

export const addTodoList = title => {
  return {
    type: ADD_LIST,
    title,
    //id: ++nextTodoListId,
  }
};

export const deleteTodoList = id => {
  return {
    type: DELETE_LIST,
    id
  }
};