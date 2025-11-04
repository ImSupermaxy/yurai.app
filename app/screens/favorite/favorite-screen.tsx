import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import AnimeDetailModal from "@/components/modal/anime-detail-modal/anime-detail-modal";
import { useSettingsState } from "@/context/settings-provider";
import { AnimeStorageModel } from "@/service/animes.service";
import { useIsFocused } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import screen_styles from "../screen-default.styles";
import styles from "./favorite-screen.styles";

type Ordenation = "ascending" |  "descending";

export default function FavoriteScreen() {
  const isFocused = useIsFocused();
  const { animes, reviews, animeSelected, setAnimeSelected } = useSettingsState();

  const [animesFiltred, setAnimesFiltred] = useState<AnimeStorageModel[] | []>(animes.filter(a => a.isFavorito));
  const [ordenation, setOrdenation] = useState<Ordenation>("ascending");
  const [openAnimeDetailModal, setOpenAnimeDetailModal] = useState(false);

  function changeVisibiltyModal() {
    setOpenAnimeDetailModal(animeSelected !== null && isFocused);
  }
  
  useEffect(() => {
    changeAnimesFiltred();
  }, [ordenation, animes]);
  
  useFocusEffect(
    useCallback(() => {
      onChangeOrdenation("ascending");
    }, [])
  );

  useEffect(() => {
    changeVisibiltyModal();
  }, [isFocused, animeSelected]);
  

  function changeAnimesFiltred() {
    let ordenado: AnimeStorageModel[] = [];
    if (ordenation === "ascending") {
      ordenado = animesFiltred.sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
      ordenado = animesFiltred.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setAnimesFiltred(ordenado);
  }

  function onChangeOrdenation(ordenation: Ordenation) {//event: TextInputSubmitEditingEvent
    setOrdenation(ordenation);
    changeAnimesFiltred();
  }
  
  return (
    <View style={screen_styles.mainContainer}>
      <View style={[styles.container]}>              
        <View style={styles.content}>
            <TopTitle fontSize={24} title={"Favoritos"} width={300} padding={16} fontWeight="bold" />
            <Text ></Text>
            <CardList animes={animesFiltred} forma={"detalhado"} horizontal={false} />
        </View>
      </View>
      
      <AnimeDetailModal isVisible={openAnimeDetailModal} changeStateModal={() => { setAnimeSelected(null) }} anime={animeSelected} />
    </View>
  );
}