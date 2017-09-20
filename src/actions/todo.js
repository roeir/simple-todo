import firebase from 'firebase';

import {
  TODOS_FETCH_SUCCESS,
  TODO_TOGGLE,
  TODO_REMOVE
} from '../constants';

export const addTodo = todo =>
  dispatch =>
    firebase.database().ref('/todos')
      .push(todo);

export const toggleTodo = todo =>
  dispatch =>
    firebase.database().ref(`/todos/${todo.id}`)
      .update({ complete: !todo.complete });

export const removeTodo = id =>
  dispatch =>
    firebase.database().ref(`/todos/${id}`)
      .remove()
      .then(() => {
        dispatch({ type: TODO_REMOVE, id })
      })
      .catch(err => console.log(err));

export const fetchTodos = () =>
  dispatch =>
    firebase.database().ref('/todos')
      .on('value', snapshot => {
        dispatch({
          type: TODOS_FETCH_SUCCESS,
          response: snapshot.val(),
        });
      });
