import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 48,
        alignItems: 'center',
    },
    body: {
        paddingVertical: 150,
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        width: '100%',
        color: colors.global.text,
    },
    buttonBack: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        borderRadius: 16,
        padding: 14,
        backgroundColor: colors.blue[300]
    },
    text: {
        fontSize: 20,
        color: colors.global.text,
    },
    icon: {
        color: colors.global.icon
    }
});

export default styles;