import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  //Criar um theme default para o projeto (customizado...)

  return (

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.container} > */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* </LinearGradient> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 
  },
});