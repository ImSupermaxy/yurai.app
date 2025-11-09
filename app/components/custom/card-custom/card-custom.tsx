import Estrelas from "@/components/common/estrelas/estrelas";
import InteractiveIcon from "@/components/common/interactive-icon/interactive-icon";
import { ModalsToOpenModel, useSettingsState } from "@/context/settings-provider";
import { animeService, AnimeStorageModel } from "@/service/animes.service";
import millify from "millify";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Card, Text } from 'react-native-paper';
import { styles } from "./card-custom.styles";

export type ModeloCardModel = "simples" | "detalhado";

export interface CardModel {
    forma?: ModeloCardModel
    // onPressAnime: () => void,
    anime: AnimeStorageModel
    showActions?: boolean
    onlyView?: boolean
}

export default function CardCustom({
        // onPressAnime,
        anime,
        forma = "simples",
        showActions = false,
        onlyView = false
    }: CardModel) 
{
    const { animes, reviews, setAnimes, setAnimeSelected } = useSettingsState();
    const [isFavorito, setIsFavorito] = useState(anime.isFavorito);
    
    const isSimples = forma == "simples";
    const hasUserReview = reviews.filter(r => r.isUserReview && r.animeId === anime.id).length > 0;

    function changeFavorito() {
        setIsFavorito(!isFavorito);
        anime!.isFavorito = !isFavorito;
        const tmpAnimes = animes.filter(a => a.id !== anime?.id);
        tmpAnimes.push(anime!);
        setAnimes(tmpAnimes.sort((a, b) => a.id - b.id));
    }

    function openEditReviewModal() {
      onChangeAnimeSelected("editReview")
    }

    function openAddReviewModal() {
      onChangeAnimeSelected("addReview")
    }

    function openAnimeDetailModal() {
      onChangeAnimeSelected("details")
    }

    function onChangeAnimeSelected(tipoModal: ModalsToOpenModel) {
        setAnimeSelected({ anime, modalToOpen: tipoModal });
    }

    const name = (anime.name.length > 18 && !onlyView) ? anime.name.substring(0, 16).concat("...") : anime.name;

    return (
        <View style={{ paddingVertical: 4 }}>
            {isSimples ? (
                <TouchableOpacity activeOpacity={!onlyView ? 0.5 : 1} onPress={(!onlyView ? openAnimeDetailModal : () => {})}>
                    <Card style={styles.stylesSimples.container}>
                        <Image source={ animeService.cards[anime.cardImage] } style={styles.stylesSimples.image} />
                        <Card.Content style={styles.stylesSimples.content}>
                            <Text variant="bodyMedium" style={styles.stylesSimples.text}>{ (anime.name) }</Text>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
            ) : (
                <View> 
                    <TouchableOpacity activeOpacity={!onlyView ? 0.5 : 1} onPress={(!onlyView ? openAnimeDetailModal : () => {})}>
                        <View style={styles.stylesDetalhado.container}>
                            <View style={styles.stylesDetalhado.content}>
                                {/* <View style={[{ flexDirection: "row", }]}> */}
                                        <Image source={ animeService.cards[anime.cardImage] } style={styles.stylesDetalhado.image} />
                                        <View style={styles.stylesDetalhado.info}>
                                            <Text style={styles.stylesDetalhado.title}>{ (name) }</Text>
                                            <View style={{ flexDirection: "row", gap: 4}}>
                                                <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anime.periodoLancamento }</Text>
                                                <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anime.anoLancamento }</Text>
                                            </View>
                                            <Estrelas quantidade={anime.qtdEstrelas ?? 0} exibirVazia={true} size={20} />
                                            { 
                                                !onlyView ? (
                                                    <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ anime.tipoExibicao }</Text>
                                                ) : (<Text style={[styles.stylesDetalhado.text, { fontWeight: "bold" }]}>
                                                    {anime?.review + " (" + millify(anime?.qtdReviews ?? 0) + ")"}
                                                </Text>
                                            )}
                                        </View>
                                {/* </View> */}
                                {showActions ? (
                                    <View style={styles.stylesDetalhado.actions}>
                                        <InteractiveIcon 
                                            onPress={ !hasUserReview ? openEditReviewModal : openAddReviewModal} 
                                            icon={ !hasUserReview ? "pencil-plus" : "pencil" } 
                                            name={ !hasUserReview ? "adicionar" : "editar" }
                                            align="row" 
                                        />
                                        <InteractiveIcon 
                                            onPress={changeFavorito} 
                                            icon={isFavorito ? "heart" : "heart-outline"} 
                                            size={20} 
                                            name={isFavorito ? "Favorito" : "Favoritar"}
                                            align="row" 
                                        />
                                    </View>)
                                : ( 
                                    <></>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}