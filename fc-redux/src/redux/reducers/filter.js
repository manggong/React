import { SHOW_COMPLETE, SHOW_ALL } from '../actions';

const initialState = 'ALL';

function filterReducer(previosState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }

  if (action.type === SHOW_ALL) {
    return 'ALL';
  }

  return previosState;
}

export default filterReducer;
