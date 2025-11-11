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
      paddingTop: 50,
      paddingBottom: 20
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
    // mainContainer: {
    //     paddingVertical: 10,
    //     paddingHorizontal: 24
    // },
});

const stylesBody = StyleSheet.create({
  mainContainer: {
      backgroundColor: colors.global.backgroundColor,
      width: "100%",
      height: "auto",
      // paddingVertical: 45
  },
  container: {
      height: "auto",
      width: "100%",
      backgroundColor: colors.global.backgroundColor,
      flexDirection: "column", 
      gap: 24,
      paddingHorizontal: 16
      // zIndex: 9
  },
  review: {
    paddingVertical: 20, 
    paddingHorizontal: 24,
    backgroundColor: colors.global.backgroundHeaderFooterColor,
    flexDirection: "column",
    borderRadius: 12,
    gap: 24,
    height: "auto"
  },
  estrelas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    gap: 70,
    height: "auto"
  },
  reviewInput: {
    backgroundColor: colors.global.backgroundBackColor,
    borderRadius: 8,
    paddingTop: 16,
    // paddingBottom: 50,
    paddingHorizontal: 28,
    minHeight: 144,
    height: "auto"
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