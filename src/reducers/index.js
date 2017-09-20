import { combineReducers } from 'redux';

import todos from './todos';
import * as fromTodos from './todos';

export default combineReducers({
  todos
});

export const getTodos = state =>
  fromTodos.getTodos(state.todos);