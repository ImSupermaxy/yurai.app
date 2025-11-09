import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        height: "auto",
        minHeight: 100,
        width: "100%",
        flexDirection: "row",
        gap: 32,
    },
    content: {
        flexDirection: "column",
        gap: 8,
        maxWidth: 234
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    account: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2
    },
    userInfo: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.global.text
    },
    arroba: {
        fontSize: 10,
        fontWeight: "regular",
        color: colors.gray[300]
    },
    comentario: {
        minWidth: 240
    },
    actions: {
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        justifyContent: "space-between"
    }
});

export default style;