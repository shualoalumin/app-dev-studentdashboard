import { View, Text, StyleSheet } from 'react-native';

export default function Courses() {
  return (
    <View style={styles.container}>
      <Text>과목 리스트</Text>
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