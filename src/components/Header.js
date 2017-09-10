import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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

const Header = ({value, onSumbit, onChange, onToggleAllComplete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleAllComplete}>
        <Text style={styles.toggleAll}>✔</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="What do you want?"
        returnKeyType="done"
        value={value}
        onSubmitEditing={onSumbit}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Header;
