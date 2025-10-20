import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color: 'white',
    padding: 12
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  /* tirar depois */
  mainContainer: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  textContainer: {
    fontSize: 32,
    color: 'red', 
  }
});
