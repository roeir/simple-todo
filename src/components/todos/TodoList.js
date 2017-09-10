import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    flex: 1,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f5f5f5',
  },
});

const TodoList = ({ items, onToggleItem, onRemove }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <TodoItem
            { ...item }
            onToggleItem={onToggleItem}
            onRemove={onRemove}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
    </View>
  );
};

export default TodoList;
