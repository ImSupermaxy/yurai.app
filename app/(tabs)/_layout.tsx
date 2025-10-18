import { ThemeColors } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { GetRoutes } from './routes';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const theme = ThemeColors.default;
  const routes = GetRoutes();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
        tabBarIcon: ({ color, size }) => {
          const maped = routes.filter(r => r.routerName === route.name).at(0);
          return <MaterialCommunityIcons name={maped?.routerIcon} size={size} color={color} />;
        },
      })}
    >
    
      { routes.map((route) => ( <Tab.Screen name={route.routerName} component={route.component!} /> ))}
    
    </Tab.Navigator>
  );
}
