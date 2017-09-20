import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  fetchTodos,
  toggleTodo,
  removeTodo,
} from '../../actions/todo';
import { getTodos } from '../../reducers';

import TodoList from './TodoList';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { toggleTodo, removeTodo } = this.props;
    return (
      <TodoList
        todos={this.props.todos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: getTodos(state),
  }
};

export default connect(
  mapStateToProps,
  { fetchTodos, removeTodo, toggleTodo }
)(VisibleTodoList);
