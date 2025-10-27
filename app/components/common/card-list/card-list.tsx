import { FlatList } from "react-native";

import { AnimeStorageModel } from "@/service/animes.service";
import { useState } from "react";
import CardCustom from "../../custom/card-custom/card-custom";
import styles from "./card-list.styles";

type CardListModel = {
    animes: AnimeStorageModel[]
}

export default function CardList({ animes }: CardListModel) {
    const [animeSelected, setAnimeSelected] = useState({} as AnimeStorageModel);

    return (
        <FlatList 
            data={animes}
            contentContainerStyle={styles.content}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <CardCustom image={item.cardImage} subTitle={item.name} />
            )}
            horizontal
            style={styles.container}
            // contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    );
}