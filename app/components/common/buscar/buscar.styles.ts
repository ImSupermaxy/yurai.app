import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 35,
        paddingHorizontal: 12,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
    },
    notFound: {
        width: 296,
        paddingVertical: 50,
        height: "auto",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: 24,
    },
    text: {
        color: colors.global.text,
        textAlign: "center",
        fontSize: 16
    }
});

export default styles;