import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'index':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'courses':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'assignments':
              iconName = focused ? 'document-text' : 'document-text-outline';
              break;
            case 'calendar':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help';
          }

          // @ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '대시보드',
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: '과목',
        }}
      />
      <Tabs.Screen
        name="assignments"
        options={{
          title: '과제',
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: '일정',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
        }}
      />
    </Tabs>
  );
}