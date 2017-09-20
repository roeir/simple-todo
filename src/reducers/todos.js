import { combineReducers } from 'redux';

import {
  TODO_TOGGLE,
  TODO_REMOVE,
  TODOS_FETCH_SUCCESS,
} from '../constants';

const byId = (state = {}, action) => {
  switch (action.type) {
    case TODOS_FETCH_SUCCESS: {
      const nextState = { ...state };
      if (action.response) {
        Object.keys(action.response).forEach(key => {
          nextState[key] = action.response[key];
        });
      }
      return nextState;
    }
    case TODO_REMOVE: {
      const { [action.id]: omit, ...nextState } = state;
      return nextState;
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case TODOS_FETCH_SUCCESS:
      if (action.response) {
        return Object.keys(action.response)
          .map(key => key);
      }
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
})

export const getTodos = (state) =>
  state.allIds.map(id => ({ ...state.byId[id], id }));
