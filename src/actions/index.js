import {
  ADD_LIST,
  EDIT_LIST,
  DELETE_LIST,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from './types';

export const addTodo = (title, dueDate, todoListId) => {
  return {
    type: ADD_TODO,
    title,
    completed: false,
    dueDate,
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
  }
};

export const deleteTodoList = id => {
  return {
    type: DELETE_LIST,
    id
  }
};

export const editTodoList = (title, id) => {
  return {
    type: EDIT_LIST,
    id,
    title
  }
};