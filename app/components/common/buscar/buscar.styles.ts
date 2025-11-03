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
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: 95,
    },
    text: {
        color: colors.global.text
    }
});

export default styles;