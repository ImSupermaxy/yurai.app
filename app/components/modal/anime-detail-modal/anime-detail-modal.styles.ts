import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.global.backgroundColor,
        width: "100%",
        height: "100%",
        paddingVertical: 45
    },
    headerActions: {
        paddingHorizontal: 24,
        // paddingTop: -24
        zIndex: 9,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    body: {
        width: "auto",
        paddingHorizontal: 20,
        paddingVertical: 12,
        gap: 24
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.global.text
    },
    text: { 
        fontSize: 12, 
        color: colors.global.text 
    },
    detalhes: {
        display: "flex",
        // flex: 4,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    rightSide: {
        flexDirection: "column",
        gap: 8,
        maxWidth: 70,
    },
    rating: {
        flexDirection: "row"
    },
    ratingText: {
        fontSize: 10,
        color: colors.global.text
    },
    bodyActions: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
    },
    action: {
        flexDirection: "column",
        gap: 1,
        alignItems: "center"
    },
    reviews: {
        flexDirection: "column",
        gap: 24
    },
});

export default styles;