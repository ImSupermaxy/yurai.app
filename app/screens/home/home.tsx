import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import { useSettingsState } from "@/context/settings-provider";
import { AnimeStorageModel } from "@/service/animes.service";
import React from "react";
import { FlatList, View } from "react-native";
import screen_styles from "./../screen-default.styles";
import { styles } from "./home.styles";

interface HomeTopics {
  topico: string
  animes?: AnimeStorageModel[]
}

export default function HomeScreen() {
  const { animes, reviews } = useSettingsState();

  const listaTopicos: HomeTopics[] = [
    { animes: animes, topico: "Populares" },
    { animes: animes, topico: "Novidades" },
    { animes: animes, topico: "Melhores avaliados" },
    { animes: animes, topico: "...1" },
    { animes: animes, topico: "...2" },
    { animes: animes, topico: "...3" }
  ];

  return (
    <View style={[styles.mainContainer]}>
        <View style={[screen_styles.container]} >
          <FlatList
            data={listaTopicos}
            contentContainerStyle={styles.vitrines}
            keyExtractor={(item) => item.topico}
            renderItem={({ item }) => (
              <View style={styles.vitrines}>
                  <TopTitle title={item.topico} />
                  <CardList animes={animes ?? []} />
              </View>
            )}
            // horizontal
            // style={styles.container}
            // contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={true}
            alwaysBounceVertical={true}
            />
        </View>
    </View>
  );
}