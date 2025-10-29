import { animeService, AnimeStorageModel } from "@/service/animes.service";
import { Image, View } from "react-native";
import { Card, Text } from 'react-native-paper';
import { styles } from "./card-custom.styles";

export type CardModel = {
    forma?: "simples" | "detalhado"
    onPress: () => void
}

export default function CardCustom({
        cardImage: image, 
        name: subTitle, 
        onPress, 
        forma = "simples", 
        periodoLancamento = "Inverno", 
        tipoExibicao = "Legendado",
        qtdEstrelas = 0,
        anoLancamento = 0
    }: CardModel & AnimeStorageModel) 
{
    const isSimple = forma === "simples";
    return (
        <View>
            {isSimple ? (
                <Card style={styles.stylesSimples.container}>
                    <Image source={ animeService.imagens[image] } style={styles.stylesSimples.image} />
                    <Card.Content style={styles.stylesSimples.content}>
                        <Text variant="bodyMedium" style={styles.stylesSimples.text}>{ subTitle }</Text>
                    </Card.Content>
                </Card>
            ) : (
                <Card style={styles.stylesDetalhado.container} mode="contained">
                    <View style={styles.stylesDetalhado.content}>
                        <Image source={ animeService.imagens[image] } style={styles.stylesDetalhado.image} />
                        
                        <View style={styles.stylesDetalhado.info}>
                            <Text variant="bodyMedium" style={styles.stylesDetalhado.title}>{ subTitle }</Text>
                            <View style={{ flexDirection: "row", gap: 4}}>
                                <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ periodoLancamento }</Text>
                                <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anoLancamento }</Text>
                            </View>
                            <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ qtdEstrelas }</Text>
                            <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ tipoExibicao }</Text>
                        </View>
                    </View>
                </Card>
            )}
        </View>
    );
}