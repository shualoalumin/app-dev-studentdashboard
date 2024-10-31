import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>학생 대시보드</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>3.8</Text>
          <Text style={styles.statLabel}>현재 평점</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>9</Text>
          <Text style={styles.statLabel}>수강 학점</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>6</Text>
          <Text style={styles.statLabel}>남은 과제</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
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