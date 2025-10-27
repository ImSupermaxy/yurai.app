import { colors } from "@/constants/colors";
import { ThemeColors } from "@/constants/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

export default function HeaderCustom({}) {
    return (
      <View
        style={[byPlataform, styles.container]}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 32, height: 32, resizeMode: 'contain' }}
        />
        <MaterialCommunityIcons name="bell-badge-outline" size={24} color={colors.global.icon} />
      </View>
    );
}

const theme = ThemeColors.default;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundHeaderFooter, 
    borderColor: theme.backgroundHeaderFooter ,
    borderBottomColor: theme.backgroundHeaderFooter,
    height: 90,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
  
});

const byPlataform = Platform.select({
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
  })