import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, ADD_LIST } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, { title: action.title, id: action.id, clicked: action.clicked }];
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id) ? {...todo, clicked: !todo.clicked} : todo);
    case DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id));
    default:
      return state;
  }
}