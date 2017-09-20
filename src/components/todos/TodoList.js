import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f5f5f5',
  },
});

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({item}) =>
        <TodoItem
          todo={item}
          onToggleItem={onToggle}
          onRemove={onRemove}
        />
      }
      ItemSeparatorComponent={() => <View style={styles.separator}/>}
    />
  );
};

export default TodoList;
