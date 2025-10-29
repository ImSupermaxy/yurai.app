import { FlatList } from "react-native";

import { AnimeStorageModel } from "@/service/animes.service";
import { useState } from "react";
import CardCustom from "../../custom/card-custom/card-custom";
import styles from "./card-list.styles";

type CardListModel = {
    horizontal?: boolean
    animes: AnimeStorageModel[]
}

export default function CardList({ animes, horizontal = true }: CardListModel) {
    const [animeSelected, setAnimeSelected] = useState({} as AnimeStorageModel);
    return (
        <FlatList 
            data={animes}
            // accessibilityShowsLargeContentViewer={true}
            alwaysBounceHorizontal={true}
            contentContainerStyle={styles.content}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <CardCustom image={item.cardImage} subTitle={item.name} onPress={() => {}} />
            )}
            horizontal={horizontal}
            style={styles.container}
            // contentContainerStyle={stylekus.content}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
        />
    );
}