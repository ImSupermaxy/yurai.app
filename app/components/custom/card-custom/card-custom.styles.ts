import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const stylesSimples = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[900],
        height: "auto",
        maxWidth: 97,
        width: "auto",
        borderRadius: 8,
    },
    content: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 146,
        width: 97,
        borderRadius: 8
    },
    text: {
        fontSize: 9,
        fontFamily: 'Roboto_400Regular',
        fontWeight: "500",
        // paddingHorizontal: 1,
        paddingVertical: 1,
        // height: 12
        textAlign: 'center',
        color: colors.global.text
    }
});

const stylesDetalhado = StyleSheet.create({
    container: {
        backgroundColor: colors.global.backgroundColor,
        height: "auto",
        maxWidth: 240,
        width: "auto",
        borderRadius: 0,
        shadowColor: colors.global.backgroundBackColor,
        display: "flex",
    },
    content: {
        height: "auto",
        flexDirection: "row",
        gap: 12
    },
    info: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    image: {
        height: 146,
        maxWidth: 97,
        borderRadius: 8
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        fontWeight: "regular",
        color: colors.global.text,
    },
    title: {
        width: "auto",
        color: colors.global.text,
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        fontWeight: "bold",
    }
});


export const styles = { stylesSimples, stylesDetalhado };