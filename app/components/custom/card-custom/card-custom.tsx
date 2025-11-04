import Estrelas from "@/components/common/estrelas/estrelas";
import { useSettingsState } from "@/context/settings-provider";
import { animeService, AnimeStorageModel } from "@/service/animes.service";
import { Image, TouchableOpacity, View } from "react-native";
import { Card, Text } from 'react-native-paper';
import { styles } from "./card-custom.styles";

export type ModeloCardModel = "simples" | "detalhado";

export interface CardModel {
    forma?: ModeloCardModel
    // onPressAnime: () => void,
    anime: AnimeStorageModel,
    showActions?: boolean
}

export default function CardCustom({
        // onPressAnime,
        anime,
        forma = "simples",
        showActions = false
    }: CardModel) 
{
    const { setAnimeSelected } = useSettingsState();
    const isSimples = forma == "simples";

    function onChangeAnimeSelected() {
        setAnimeSelected(anime);
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.5} onPress={onChangeAnimeSelected}>
                {isSimples ? (
                    <View>
                        <Card style={styles.stylesSimples.container}>
                            <Image source={ animeService.cards[anime.cardImage] } style={styles.stylesSimples.image} />
                            <Card.Content style={styles.stylesSimples.content}>
                                <Text variant="bodyMedium" style={styles.stylesSimples.text}>{ anime.name }</Text>
                            </Card.Content>
                        </Card>
                    </View>
                ) : (
                    <Card style={styles.stylesDetalhado.container} mode="contained">
                        {/* <View></View> */}
                        <View style={styles.stylesDetalhado.content}>
                            <Image source={ animeService.cards[anime.cardImage] } style={styles.stylesDetalhado.image} />

                            <View style={styles.stylesDetalhado.info}>
                                <Text variant="bodyMedium" style={styles.stylesDetalhado.title}>{ anime.name }</Text>
                                <View style={{ flexDirection: "row", gap: 4}}>
                                    <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anime.periodoLancamento }</Text>
                                    <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anime.anoLancamento }</Text>
                                </View>
                                <Estrelas quantidade={anime.qtdEstrelas ?? 0} exibirVazia={true} size={20} />
                                <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anime.tipoExibicao }</Text>
                            </View>
                        </View>
                        {/* actions */}
                    </Card>
                )}
            </TouchableOpacity>
        </View>

    );
}