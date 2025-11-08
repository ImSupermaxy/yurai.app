import { colors } from "@/constants/colors";
import { ThemeColors } from "@/constants/theme";
import { Platform, StyleSheet } from "react-native";

const theme = ThemeColors.default;

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
      paddingHorizontal: 24,
      paddingTop: 8,
      paddingBottom: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 4
    },
    // mainContainer: {
    //     paddingVertical: 10,
    //     paddingHorizontal: 24
    // },
});

const stylesBody = StyleSheet.create({
  container: {
      height: "100%",
      width: "auto",
      backgroundColor: colors.global.backgroundColor,
      flexDirection: "column", 
      gap: 50,
      paddingHorizontal: 24
      // zIndex: 9
  },
  review: {
    paddingVertical: 20, 
    paddingHorizontal: 24,
    backgroundColor: colors.global.backgroundHeaderFooterColor,
    flexDirection: "column",
    borderRadius: 12,
    gap: 30
  },
  estrelas: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: colors.global.text,
    fontWeight: "bold",
  },
  text: {
    color: colors.global.text,
    fontSize: 16
  },
  textInput: {
    color: colors.global.descriptionText,
    fontSize: 14
  },
  reviewInteractive: {
    flexDirection: "column",
    alignContent: "space-between",
    gap: 70
  },
  reviewInput: {
    backgroundColor: colors.global.backgroundBackColor,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 28
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    flexDirection: "column",
    gap: 2,
    alignItems: "center"
  }
});

export const styles = { styleHeader, stylesBody, byPlataform };