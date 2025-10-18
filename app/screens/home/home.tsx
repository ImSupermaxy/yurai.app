import { View, Text } from "react-native";
import { styles } from "./home.styles";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      
      <Text style={styles.textContainer}> Ola, Matheus. </Text>

    </View>
  );
}