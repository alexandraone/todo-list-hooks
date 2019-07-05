import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import listReducer from './listReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  todos: todoReducer,
  lists: listReducer,
  form: formReducer,
})