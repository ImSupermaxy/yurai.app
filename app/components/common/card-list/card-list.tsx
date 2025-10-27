import { FlatList, View } from "react-native";

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
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.content}>
                    <CardCustom image={item.cardImage} subTitle={item.name} />
                </View>
            )}
            horizontal
            style={styles.container}
            // contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    );
}