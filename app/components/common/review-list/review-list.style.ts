import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.global.backgroundBackColor,
        borderRadius: 8
    },
    title: {
        color: colors.global.specialText,
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default style;