import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import listReducer from './listReducer';

export default combineReducers({
  todos: todoReducer,
  lists: listReducer,
})