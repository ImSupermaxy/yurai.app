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
        color: colors.gray[700],
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
        color: colors.blue[100],
    },
    icon: {
        color: colors.blue[100]
    }
});

export default styles;