import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Platform } from 'react-native';

import { ThemeColors } from '@/constants/theme';
import { GetRoutes } from './routes';

const Tab = createBottomTabNavigator();
const Stack = createBottomTabNavigator();

function Tabs() {
  const routes = GetRoutes();

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarActiveTintColor: theme.tabIconSelected,
      tabBarInactiveTintColor: theme.tabIconDefault,
      tabBarStyle: stylesFooter,
      tabBarIcon: ({ color, size }) => {
        const maped = routes.filter(r => r.routerName === route.name).at(0);
        return <MaterialCommunityIcons name={maped?.routerIcon} size={size} color={color} />;
      },
    })}>

      { 
        routes.map((route) => ( 
          <Tab.Screen 
            name={route.routerName} 
            component={route.component!}
             /> 
        ))
      }
    </Tab.Navigator>
  );
}

export default function TabLayout() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Tabs}
        options={{
          tabBarStyle: { display: 'none' },
          headerStyle: stylesHeader,
          headerTitle: () => (
            <Image
              source={require("@/assets/images/logo.svg")}
              style={{ width: 32, height: 32, resizeMode: 'contain' }}
            />
          ),
        }}
      />
    </Stack.Navigator>  
  );
}

const theme = ThemeColors.default;

const stylesFooter =  [
  {
    backgroundColor: theme.backgroundHeaderFooter, 
    borderColor: theme.backgroundHeaderFooter,
    // elevation: 4,
  }, 
  //Aplicar shadow... alterar um pouco talvez???...
  Platform.select({
    web: {
      shadowColor: theme.backgroundHeaderFooter,
      shadowOffset: { width: 0, height: -12 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    ios: {
      shadowColor: theme.backgroundHeaderFooter,
      shadowOffset: { width: 0, height: -12 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    // Propriedades para Android
    android: {
      elevation: 5,
    },
  }),
];

const stylesHeader = [
  {
    backgroundColor: theme.backgroundHeaderFooter, 
    borderColor: theme.backgroundHeaderFooter ,
    borderBottomColor: theme.backgroundHeaderFooter,
  },
  Platform.select({
    web: {
      shadowColor: theme.backgroundHeaderFooter,
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    ios: {
      shadowColor: theme.backgroundHeaderFooter,
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    // Propriedades para Android
    android: {
      elevation: 5,
    },
  }),
];
