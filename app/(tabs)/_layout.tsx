import { ThemeColors } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import { GetRoutes } from './routes';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const theme = ThemeColors.default;
  const routes = GetRoutes();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
        tabBarStyle: [
          { 
            backgroundColor: theme.background, 
            borderColor: theme.background 
          }, 
          //Aplicar shadow... alterar um pouco talvez???...
          Platform.select({
            web: {
              shadowColor: theme.background,
              shadowOffset: { width: 0, height: -12 },
              shadowOpacity: 1,
              shadowRadius: 12,
            },
            ios: {
              shadowColor: theme.background,
              shadowOffset: { width: 0, height: -12 },
              shadowOpacity: 1,
              shadowRadius: 12,
            },
            // Propriedades para Android
            android: {
              elevation: 5,
            },
          }),
        ],
        // tabBarStyle: styles.container,
        tabBarIcon: ({ color, size }) => {
          const maped = routes.filter(r => r.routerName === route.name).at(0);
          return <MaterialCommunityIcons name={maped?.routerIcon} size={size} color={color} />;
        },
      })}
    >
    
      { 
        routes.map((route) => ( 
          <Tab.Screen 
            name={route.routerName} 
            component={route.component!} 
            options={{ 
              headerShown: true, 
              headerTitle: "",
              headerShadowVisible: true,
              headerStyle: [
                {
                  backgroundColor: theme.background, 
                  borderColor: theme.background ,
                  borderBottomColor: theme.background,
                },
                Platform.select({
                  web: {
                    shadowColor: theme.background,
                    shadowOffset: { width: 0, height: 12 },
                    shadowOpacity: 1,
                    shadowRadius: 12,
                  },
                  ios: {
                    shadowColor: theme.background,
                    shadowOffset: { width: 0, height: 12 },
                    shadowOpacity: 1,
                    shadowRadius: 12,
                  },
                  // Propriedades para Android
                  android: {
                    elevation: 5,
                  },
                }),
              ],
            }} /> 
        ))
      }
    
    </Tab.Navigator>
  );
}