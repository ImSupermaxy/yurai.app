import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import AnimeDetailModal from "@/components/modal/anime-detail-modal/anime-detail-modal";
import ReviewEditModal from "@/components/modal/review-edit-modal/review-edit-modal";
import { colors } from "@/constants/colors";
import { useSettingsState } from "@/context/settings-provider";
import { AnimeStorageModel } from "@/storage/anime-storage";
import { useIsFocused } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import screen_styles from "../screen-default.styles";
import styles from "./favorite-screen.styles";

type Ordenation = "ascending" |  "descending";

export default function FavoriteScreen() {
  const isFocused = useIsFocused();
  const { animes, reviews, animeSelected, setAnimeSelected } = useSettingsState();

  const [animesFiltred, setAnimesFiltred] = useState<AnimeStorageModel[] | []>(animes.filter(a => a.isFavorito) ?? []);
  const [ordenation, setOrdenation] = useState<Ordenation>("ascending");
  const [openAnimeDetailModal, setOpenAnimeDetailModal] = useState(false);
  const [openReviewEditModal, setOpenReviewEditModal] = useState(false);

  function changeVisibiltyAnimeDetailModal() {
    setOpenAnimeDetailModal(animeSelected !== null && isFocused);
  }

  function changeVisibiltyReviewEditModal() {
    setOpenReviewEditModal(!openReviewEditModal);
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
    changeVisibiltyAnimeDetailModal();
  }, [isFocused, animeSelected]);
  

  function changeAnimesFiltred() {
    let ordenado: AnimeStorageModel[] = [];
    if (ordenation === "ascending") {
      ordenado = (animes.filter(a => a.isFavorito) ?? []).sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
      ordenado = (animes.filter(a => a.isFavorito) ?? []).sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setAnimesFiltred(ordenado);
  }

  function onChangeOrdenation(ordenation: Ordenation) {//event: TextInputSubmitEditingEvent
    setOrdenation(ordenation);
    changeAnimesFiltred();
  }

  console.log(animesFiltred.map(a => a?.name));
  
  return (
    <View> 
      <ScrollView
        scrollEventThrottle={4} // controla frequência de atualização (ms)
        decelerationRate={0.1}
      >
        <View style={screen_styles.mainContainer}>
          <View style={[styles.container]}>              
            <View style={styles.content}>
              <TopTitle fontSize={24} title={"Favoritos"} width={300} padding={16} fontWeight="bold" />
              <Text style={{ fontSize: 16, color: colors.global.text }}>Seus animes favoritados... </Text>
              <CardList animes={animesFiltred} forma={"detalhado"} horizontal={false} scrollEnabled={false} showActions={true} />
            </View>
          </View>
        </View>
      </ScrollView>

      <AnimeDetailModal isVisible={openAnimeDetailModal} changeStateModal={() => { setAnimeSelected(null) }} />
      <ReviewEditModal anime={animeSelected} isVisible={openReviewEditModal} changeStateModal={() => { changeVisibiltyReviewEditModal }} />
    </View>
  );
}