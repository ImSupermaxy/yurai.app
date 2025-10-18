import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "./not-found.styles";

export function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <MaterialCommunityIcons name="robot-off" size={82} color={colors.green[300]}/>
                <Text style={styles.title}>Área não encontrada</Text>
            </View>
            {/* <TouchableOpacity style={styles.buttonBack}> 
                <MaterialCommunityIcons name="keyboard-backspace" size={20} style={styles.icon}/> 
                <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity> */}
        </View>
    );
}