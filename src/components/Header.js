import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todo';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 18,
  },
  toggleAll: {
    fontSize: 18,
    color: '#c5c5c5',
    marginRight: 10,
  },
});

class Header extends Component {
  state = {
    text: ''
  };

  handleInputChange = text =>
    this.setState({ text });

  handleSubmit = () => {
    const { text } = this.state;
    if (!text.length) return;
    this.props.addTodo({ text, complete: false, })
      .then(() => this.setState({ text: '' }));
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.toggleAll}>✔</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="What do you want?"
          returnKeyType="done"
          value={text}
          onChangeText={this.handleInputChange}
          onSubmitEditing={this.handleSubmit}
        />
      </View>
    );
  }
}
export default connect(
  null,
  { addTodo }
)(Header);
