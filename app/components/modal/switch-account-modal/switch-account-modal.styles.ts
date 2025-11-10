import { colors } from "@/constants/colors";
import { ThemeColors } from "@/constants/theme";
import { Platform, StyleSheet } from "react-native";

const theme = ThemeColors.default;

const byPlataformHeader = Platform.select({
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
});

const byPlataformFooter = Platform.select({  
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
});

const styleHeader = StyleSheet.create({
    container: {
      backgroundColor: colors.global.backgroundHeaderFooterColor,
      width: "100%",
      height: "auto",
      paddingTop: 45,
      paddingBottom: 10
    },
    mainContainer: {
      backgroundColor: theme.backgroundHeaderFooter, 
      borderColor: theme.backgroundHeaderFooter ,
      borderBottomColor: theme.backgroundHeaderFooter,
      // height: 90,
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "center",
      zIndex: 4
    },
});

const stylesBody = StyleSheet.create({
    container: {
        alignContent: "center",
        justifyContent: "center"
    }
});

export const styles = { styleHeader, stylesBody, byPlataformHeader, byPlataformFooter };