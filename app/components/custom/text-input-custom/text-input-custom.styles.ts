import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "auto",
        // backgroundColor: colors.gray[900],
        // borderRadius: 8,
        borderBottomWidth: 1,
        borderColor: colors.gray[200],
        padding: 6,
        color: colors.gray[400],
        fontSize: 16
    }
});

export default styles;