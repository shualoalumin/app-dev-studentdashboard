import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// 임시 스크린 컴포넌트들
const DashboardScreen = () => (
  <View style={styles.screen}>
    <Text>대시보드</Text>
  </View>
);

const CourseScreen = () => (
  <View style={styles.screen}>
    <Text>과목</Text>
  </View>
);

const AssignmentScreen = () => (
  <View style={styles.screen}>
    <Text>과제</Text>
  </View>
);

const CalendarScreen = () => (
  <View style={styles.screen}>
    <Text>일정</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text>프로필</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case '대시보드':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case '과목':
                iconName = focused ? 'book' : 'book-outline';
                break;
              case '과제':
                iconName = focused ? 'document-text' : 'document-text-outline';
                break;
              case '일정':
                iconName = focused ? 'calendar' : 'calendar-outline';
                break;
              case '프로필':
                iconName = focused ? 'person' : 'person-outline';
                break;
              default:
                iconName = 'help';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="대시보드" component={DashboardScreen} />
        <Tab.Screen name="과목" component={CourseScreen} />
        <Tab.Screen name="과제" component={AssignmentScreen} />
        <Tab.Screen name="일정" component={CalendarScreen} />
        <Tab.Screen name="프로필" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
