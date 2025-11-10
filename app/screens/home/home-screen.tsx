import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import AnimeDetailModal from "@/components/modal/anime-detail-modal/anime-detail-modal";
import { useSettingsState } from "@/context/settings-provider";
import { AnimeStorageModel } from "@/service/animes.service";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import screen_styles from "../screen-default.styles";
import styles from "./home-screen.styles";

interface HomeTopicsModel {
  topico: string
  animes?: AnimeStorageModel[]
}

export default function HomeScreen() {
  const isFocused = useIsFocused();

  const { animes, reviews, animeSelected, setAnimeSelected } = useSettingsState();
  const [openAnimeDetailModal, setOpenAnimeDetailModal] = useState(false);

  function changeVisibiltyModal() {
    setOpenAnimeDetailModal(animeSelected !== null && isFocused);
  }

  let populares: AnimeStorageModel[] = []
  let novidades: AnimeStorageModel[] = [];
  let melhoresAvaliados: AnimeStorageModel[] = [];
  let favoritos: AnimeStorageModel[] = [];
  let conhecaTambem: AnimeStorageModel[] = [];

  if (animes !== undefined)
  {
    populares = animes!.filter(a => [1, 2, 5, 4, 16, 21].includes(a.id!));
    novidades = animes!.filter(a => [6, 3, 9, 10, 13, 8, 23].includes(a.id!));
    melhoresAvaliados = animes!.filter(a => [8, 11, 7, 12, 14, 9].includes(a.id!));
    favoritos = animes!.filter(a => a.isFavorito === true);
    conhecaTambem = animes!.filter(a => !novidades.includes(a) && !melhoresAvaliados.includes(a) && !favoritos.includes(a));
  }
  
  const listaTopicos: HomeTopicsModel[] = [
    { animes: populares, topico: "Populares" },
    { animes: novidades, topico: "Novidades" },
    { animes: melhoresAvaliados, topico: "Melhores avaliados" },
    { animes: favoritos, topico: "Favoritos" },
    { animes: conhecaTambem, topico: "Conheça Também!" },
  ];

  useEffect(() => {
    changeVisibiltyModal();
  }, [isFocused, animeSelected]);

  return (
    <View style={[screen_styles.mainContainer]}>
      <FlatList
        data={listaTopicos}
        contentContainerStyle={styles.vitrines}
        keyExtractor={(item) => item.topico}
        renderItem={({ item }) => (
          <View style={styles.vitrines}>
              <TopTitle title={item.topico} />
              <CardList animes={item.animes ?? []} forma={"simples"} />
          </View>
        )}
        // horizontal
        // style={styles.container}
        // contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
        />
        
        <AnimeDetailModal isVisible={openAnimeDetailModal} onCloseModal={() => { setAnimeSelected(null) }} animeSelected={animeSelected} />
    </View>
  );
}