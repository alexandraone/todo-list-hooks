import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

function getId(state) {
  if(state.length > 0) {
    return state[state.length-1]["id"] + 1;
  }
  else return 1;
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, { title: action.title, id: getId(state), completed: action.completed, dueDate: action.dueDate, todoListId: action.todoListId }];
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
    case DELETE_TODO:
      return state.filter(todo => (todo.id !== action.id));
    default:
      return state;
  }
}