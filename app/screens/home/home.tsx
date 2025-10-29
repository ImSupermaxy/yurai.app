import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import { useSettingsState } from "@/context/settings-provider";
import { AnimeStorageModel } from "@/service/animes.service";
import React from "react";
import { FlatList, View } from "react-native";
import screen_styles from "./../screen-default.styles";
import { styles } from "./home.styles";

interface HomeTopicsModel {
  topico: string
  animes?: AnimeStorageModel[]
}

export default function HomeScreen() {
  const { animes, reviews } = useSettingsState();
  let populares: AnimeStorageModel[] = []
  let novidades: AnimeStorageModel[] = [];
  let melhoresAvaliados: AnimeStorageModel[] = [];
  let favoritos: AnimeStorageModel[] = [];

  if (animes !== undefined)
  {
    populares = animes!.filter(a => [1, 2, 5, 4].includes(a.id!));
    novidades = animes!.filter(a => [6, 3, 9, 10, 13, 8].includes(a.id!));
    melhoresAvaliados = animes!.filter(a => [8, 11, 7, 12, 14, 9].includes(a.id!));
    favoritos = animes!.filter(a => a.isFavorito === true);
  }
  
  const listaTopicos: HomeTopicsModel[] = [
    { animes: populares, topico: "Populares" },
    { animes: novidades, topico: "Novidades" },
    { animes: melhoresAvaliados, topico: "Melhores avaliados" },
    { animes: favoritos, topico: "Favoritos" },
  ];

  return (
    <View style={[screen_styles.mainContainer]}>
      <FlatList
        data={listaTopicos}
        contentContainerStyle={styles.vitrines}
        keyExtractor={(item) => item.topico}
        renderItem={({ item }) => (
          <View style={styles.vitrines}>
              <TopTitle title={item.topico} />
              <CardList animes={item.animes ?? []} />
          </View>
        )}
        // horizontal
        // style={styles.container}
        // contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
        />
    </View>
  );
}