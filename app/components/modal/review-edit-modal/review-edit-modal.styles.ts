import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        paddingTop: 24,
        height: 206
    },
    container: {
        backgroundColor: colors.global.backgroundBackColor,
        width: "100%",
        height: "100%",
    },
    // mainContainer: {
    //     paddingVertical: 10,
    //     paddingHorizontal: 24
    // },
});

export default styles;