import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import Header from './components/Header';
import TodoList from './components/todos/TodoList';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
});

class App extends Component {

  state = {
    value: '',
    items: [],
    completeAll: false,
    currentFilter: 'ALL',
    loading: true,
  };

  componentDidMount() {
    try {
      AsyncStorage.getItem('todos')
        .then(todos => {
          if (todos) {
            try {
              this.setState({
                items: JSON.parse(todos),
                loading: false,
              })
            } catch (err) {
              this.setState({ loading: false });
            }
          }
        })
    } catch (err) {
      console.error(err);
    }
  }

  updateItems = (items, otherState = {}) => {
    this.setState({ items, ...otherState });
    try {
      AsyncStorage.setItem('todos', JSON.stringify(items));
    } catch (err) {
      console.error(err);
    }
  };

  handleTodoAdd = () => {
    if (!this.state.value.trim().length) return;
    const { items, value } = this.state;
    const todo = {
      id: Date.now(),
      text: value,
      completed: false,
    };
    this.updateItems(
      [ ...items, todo ],
      { value: '' }
    );
    // this.setState({
    //   items: [ ...items, todo ],
    //   value: '',
    // });
  };

  handleInputChange = text =>
    this.setState({ value: text });

  handleToggleAllComplete = () => {
    const { completeAll, items } = this.state;
    const completed = !completeAll;
    const toggledItems = items.map(item => (
      { ...item, completed }
    ));
    this.updateItems(toggledItems, { completeAll: completed });
    // this.setState({ items: toggledItems, completeAll: completed });
  };

  handleToggleItem = id =>
    () => {
      const updatedItems = this.state.items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      this.updateItems(updatedItems);
    };

  handleRemoveItem = id =>
    () => {
      const updatedItems = this.state.items.filter(item =>
        item.id !== id
      );
      this.updateItems(updatedItems);
    };

  applyFilter = filter =>
    () => this.setState({ currentFilter: filter });

  filterItems = (list, filter) =>
    list.filter(item => {
      if (filter === 'ALL') return list;
      if (filter === 'ACTIVE') return !item.completed;
      if (filter === 'COMPLETED') return item.completed;
    });

  handleClearCompleted = () => {
    const updatedItems = this.filterItems(this.state.items, 'ACTIVE');
    this.updateItems(updatedItems);
  };

  render() {
    const { value, items, currentFilter, loading } = this.state;
    const filteredItems = this.filterItems(items, currentFilter);
    return (
      <View style={styles.container}>
        <Header
          value={value}
          onSumbit={this.handleTodoAdd}
          onChange={this.handleInputChange}
          onToggleAllComplete={this.handleToggleAllComplete}
        />
        <TodoList
          items={filteredItems}
          onToggleItem={this.handleToggleItem}
          onRemove={this.handleRemoveItem}
        />
        <Footer
          count={filteredItems.length}
          currentFilter={currentFilter}
          applyFilter={this.applyFilter}
          onClearCompleted={this.handleClearCompleted}
        />
        {
          loading &&
          (<View style={styles.loading}>
            <ActivityIndicator
              animating
              size="large"
            />
          </View>)
        }
      </View>
    );
  }
}

export default App;
