import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
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
  const { 
    animes,
    animeSelected,
    reviews,
    setAnimeSelected, 
  } = useSettingsState();

  const [animesFiltred, setAnimesFiltred] = useState<AnimeStorageModel[] | []>(animes.filter(a => a.isFavorito) ?? []);
  const [ordenation, setOrdenation] = useState<Ordenation>("ascending");

  function changeVisibiltyAnimeDetailModal() {
    // setOpenAnimeDetailModal(!openAnimeDetailModal);
    setAnimeSelected(null);
  }

  function changeVisibiltyReviewEditModal() {
    // setOpenReviewEditModal(!openReviewEditModal);
    setAnimeSelected(null);
  }

  function changeVisibiltyReviewAddModal() {
    // setOpenReviewAddModal(!openReviewAddModal);
    setAnimeSelected(null);
  }

  function getUserReview() {
    return reviews.filter(r => r.animeId == animeSelected!.id && r.isUserReview)[0];
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
    // if (isFocused)
    // {
    //   setOpenAnimeDetailModal(false);
    //   setOpenReviewEditModal(false);
    //   setOpenReviewAddModal(false);
    // }

  }, [isFocused, animeSelected]); // , openAnimeDetailModal, openReviewEditModal, setOpenReviewAddModal

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

      {/* <AnimeDetailModal isVisible={openAnimeDetailModal} onCloseModal={() => { changeVisibiltyAnimeDetailModal }} />
      <ReviewEditModal isVisible={openReviewAddModal} onCloseModal={() => { changeVisibiltyReviewAddModal }} />
      <ReviewEditModal isVisible={openReviewEditModal} onCloseModal={() => { changeVisibiltyReviewEditModal }} review={getUserReview()} /> */}
    </View>
  );
}