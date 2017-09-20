import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import Header from "./components/Header";
import VisibleTodoList from "./components/todos/VisibleTodoList";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <View style={{ flex: 1 }}>
          <Header/>
          <VisibleTodoList/>
        </View>
      </Provider>
    );
  }
}

export default App;
