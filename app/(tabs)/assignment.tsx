import { View, Text, StyleSheet } from 'react-native';

export default function Assignments() {
  return (
    <View style={styles.container}>
      <Text>과제 리스트</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});