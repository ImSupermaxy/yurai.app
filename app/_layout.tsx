import { DarkTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import 'react-native-reanimated';

import { colors } from './constants/colors';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {  
  //Criar um theme default para o projeto (customizado...)

  return (
    <ThemeProvider value={CustomTheme}>
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

const CustomTheme: Theme = {
  ...DarkTheme,
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: colors.global.backgroundColor,
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
};