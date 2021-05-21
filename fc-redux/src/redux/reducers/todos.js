import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = [];

function todosReducer(previosState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previosState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previosState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previosState;
}

export default todosReducer;
