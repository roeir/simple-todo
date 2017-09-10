import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filters: {
    flexDirection: 'row',
  },
  filter: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  currentFilter: {
    borderColor: '#ccc',
  },
});

const Footer = ({ applyFilter, currentFilter, count, onClearCompleted }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Count: { count }</Text>
      </View>
      <View style={styles.filters}>
        <TouchableOpacity
          style={[styles.filter, (currentFilter === 'ALL') && styles.currentFilter]}
          onPress={applyFilter('ALL')}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filter, (currentFilter === 'ACTIVE') && styles.currentFilter]}
          onPress={applyFilter('ACTIVE')}
        >
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filter, (currentFilter === 'COMPLETED') && styles.currentFilter]}
          onPress={applyFilter('COMPLETED')}
        >
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onClearCompleted}>
          <Text>Clear comleted</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
