import animesData from "@/assets/data/animes/animes-teste.json";
import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import { AnimeStorageModel } from "@/service/animes.service";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import screen_styles from "./../screen-default.styles";
import { styles } from "./home.styles";

export default function HomeScreen() {  
  const [animes, setAnimes] = useState(animesData as AnimeStorageModel[]);

  useEffect(() => {
    animesData
  }, []);


  return (
    <View style={[screen_styles.container, styles.mainContainer]}>
        <View style={styles.vitrines}>
          {/* Colocar título do "grid" / "carrossel"... */}
          {/* Colocar linha.... */}
          <TopTitle title={"Populares"} />
          <CardList animes={animes} />

          <TopTitle title={"Novidades"} />
          <CardList animes={animes} />

          <TopTitle title={"Melhores avaliados"} />
          <CardList animes={animes} />
        </View>
    </View>
  );
}