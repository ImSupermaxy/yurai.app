import { FlatList } from "react-native";

import { AnimeStorageModel } from "@/service/animes.service";
import { useState } from "react";
import CardCustom from "../../custom/card-custom/card-custom";
import styles from "./card-list.styles";

type CardListModel = {
    horizontal?: boolean
    animes: AnimeStorageModel[],
}

export default function CardList({ animes, horizontal = true }: CardListModel) {
    const [animeSelected, setAnimeSelected] = useState({} as AnimeStorageModel);

    return (
        <FlatList 
            data={animes}
            // accessibilityShowsLargeContentViewer={true}
            alwaysBounceHorizontal={true}
            contentContainerStyle={{ gap: horizontal ? 18 : 26 }}
            keyExtractor={(item) => item.id!.toString()}
            renderItem={({ item }) => (
                <CardCustom 
                    cardImage={item.cardImage} 
                    periodoLancamento={item.periodoLancamento} 
                    qtdEstrelas={item.qtdEstrelas} 
                    name={item.name}
                    tipoExibicao={item.tipoExibicao}
                    id={item.id}
                    forma={horizontal ? "simples" : "detalhado" }
                    anoLancamento={item.anoLancamento}
                    onPress={() => {}} 
                />
            )}
            horizontal={horizontal}
            style={styles.container}
            // contentContainerStyle={stylekus.content}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={!horizontal}
            alwaysBounceVertical={!horizontal}
            nestedScrollEnabled
        />
    );
}