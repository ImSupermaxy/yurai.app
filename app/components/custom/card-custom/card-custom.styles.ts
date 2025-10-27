import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
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
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 146,
        width: 97,
        borderRadius: 8
    },
    text: {
        fontSize: 10,
        fontFamily: 'Roboto_400Regular',
        fontWeight: "500",
        paddingHorizontal: 1,
        // height: 12
        textAlign: 'center',
        color: colors.global.text
    }
});

export default styles;