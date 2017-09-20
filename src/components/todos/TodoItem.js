import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  toggler: {
    marginRight: 5,
  },
  text: {
    fontSize: 20,
    color: '#000',
    paddingHorizontal: 10,
    flex: 1,
  },
  itemCompleted: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  removeBtn: {
    position: 'absolute',
    top: '20%',
    left: '25%',
    fontSize: 20,
    lineHeight: 20,
    color: '#E84854',
  },
  removeContainer: {
    width: 40,
    height: 40,
    position: 'relative',
  }
});

const TodoItem = ({ todo, onToggleItem, onRemove }) => {
  const { id, text, complete } = todo;
  return (
    <View style={styles.container}>
      <Switch
        style={styles.toggler}
        onValueChange={() => { onToggleItem(todo) }}
        value={complete}
      />
      <Text
        style={[styles.text, complete && styles.itemCompleted]}
      >{ text }</Text>
      <TouchableOpacity style={styles.removeContainer} onPress={() => { onRemove(id) }}>
        <Text style={styles.removeBtn}>✖</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
