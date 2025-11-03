import { FlatList } from "react-native";

import { AnimeStorageModel } from "@/service/animes.service";
import CardCustom, { ModeloCardModel } from "../../custom/card-custom/card-custom";
import styles from "./card-list.styles";

type CardListModel = {
    horizontal?: boolean
    forma?: ModeloCardModel
    // onPressAnime: () => void
    animes: AnimeStorageModel[],
}

export default function CardList({ animes, forma = "simples", horizontal = true }: CardListModel) {
    return (
        <FlatList 
            data={animes}
            // accessibilityShowsLargeContentViewer={true}
            alwaysBounceHorizontal={true}
            contentContainerStyle={{ gap: horizontal ? 18 : 26 }}
            keyExtractor={(item) => item.id!.toString()}
            renderItem={({ item }) => (
                <CardCustom 
                    anime={item}
                    forma={forma}
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