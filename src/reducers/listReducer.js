import { ADD_LIST, DELETE_LIST } from '../actions/types';


function getId(state) {
  if(state.length > 0) {
    console.log(state[state.length-1]);
    return state[state.length-1]["id"] + 1;
  }
  else return 1;
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state, { title: action.title, id: getId(state) }
      ];
    case DELETE_LIST:
      return state.filter(list => (list.id !== action.id));
    default:
      return state;
  }
};