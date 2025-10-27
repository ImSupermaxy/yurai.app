import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import styles from "./not-found.styles";

export function NotFoundScreen() {
    const aFazer = [
        { id: 1, text: "ajustar a header (adicionando a safezone que a professora tinha comentado na aula (exemplo na blackboard)." },
        { id: 2, text: "ajustar o componente de card (ou card list), não está aparecendo o title do anime abaixo da imagem, (isso só acontece quanto te duas listas ou mais...)" },
        { id: 3, text: "Fazer as outras telas" }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <MaterialCommunityIcons name="robot-off" size={82} color={colors.global.icon}/>
                <Text style={styles.title}>Área não encontrada</Text>
                <FlatList style={[{paddingTop: 48}]}
                    data={aFazer} 
                    keyExtractor={(item: any) => item.id.toString()}
                    renderItem={({ item }: any) => (
                        <Text style={{ color: colors.global.text, paddingBottom: 12}}>{"- " + item.text}</Text>
                    )}
                />
            </View>
            {/* <TouchableOpacity style={styles.buttonBack}> 
                <MaterialCommunityIcons name="keyboard-backspace" size={20} style={styles.icon}/> 
                <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity> */}
        </View>
    );
}