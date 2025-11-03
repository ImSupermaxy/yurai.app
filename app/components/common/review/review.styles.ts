import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 24
    },
    title: {
        color: colors.global.selecionado,
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        backgroundColor: colors.global.backgroundBackColor,
    }
});

export default style;