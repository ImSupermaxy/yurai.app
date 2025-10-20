import React from "react";
import { Text, View } from "react-native";
import { styles } from "./home.styles";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      
      <Text style={styles.textContainer}> Olá, Matheus. </Text>

    </View>
  );
}