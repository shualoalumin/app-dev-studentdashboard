import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatBox = ({ value, label }) => {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statBox: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '30%',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default StatBox;

