import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { Platform } from 'react-native';

import HeaderCustom from '@/components/custom/header-custom/header.custom';
import { ThemeColors } from '@/constants/theme';
import { SettingsProvider } from '@/context/settings-provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GetRoutes } from './routes';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const routes = GetRoutes();

  return (
    <SafeAreaProvider >
      <SettingsProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,
            tabBarShowLabel: true,
            tabBarActiveTintColor: theme.tabIconSelected,
            tabBarInactiveTintColor: theme.tabIconDefault,
            tabBarStyle: [stylesFooter],
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
                options={{
                  animation: "fade",
                  // sceneStyle: styles.container,
                  headerShown: true,
                  header: () => ( <HeaderCustom /> )
                }}
              /> 
            ))
          }
        </Tab.Navigator>
      </SettingsProvider>
    </SafeAreaProvider>
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
