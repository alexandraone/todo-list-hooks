import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, { title: action.title, id: action.id, completed: action.completed }];
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
    case DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id));
    default:
      return state;
  }
}