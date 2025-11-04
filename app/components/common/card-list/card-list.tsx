import { FlatList, View } from "react-native";

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
    const applyFooter = !horizontal ? 250 : 0;
    return (
        <FlatList 
            data={animes}
            contentContainerStyle={{ gap: horizontal ? 18 : 26 }}
            keyExtractor={(item) => item.id!.toString()}
            renderItem={({ item }) => (
                <CardCustom 
                    anime={item}
                    forma={forma}
                />
            )}
            horizontal={horizontal}
            style={[styles.container]}
            // alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={!horizontal}
            alwaysBounceVertical={!horizontal}
            ListFooterComponent={<View style={{ height: applyFooter }} />}

            // alwaysBounceVertical={ false }
            // showsVerticalScrollIndicator={false}
            // nestedScrollEnabled={false}
            // scrollEnabled={false}
        />
    );
}