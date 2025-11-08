import { FlatList, View } from "react-native";

import { AnimeStorageModel } from "@/service/animes.service";
import CardCustom, { ModeloCardModel } from "../../custom/card-custom/card-custom";
import styles from "./card-list.styles";

type CardListModel = {
    horizontal?: boolean
    forma?: ModeloCardModel
    // onPressAnime: () => void
    animes: AnimeStorageModel[]
    scrollEnabled?: boolean
    applyPaddingBottom?: boolean
    showActions?: boolean
}

export default function CardList({ animes, forma = "simples", horizontal = true, scrollEnabled = true, applyPaddingBottom = false, showActions = false }: CardListModel) {
    const applyFooter = (applyPaddingBottom && !horizontal) ? 250 : 0;
    return (
        <FlatList 
            data={animes}
            contentContainerStyle={{ gap: horizontal ? 18 : 26 }}
            keyExtractor={(item) => item.id!.toString()}
            renderItem={({ item }) => (
                <CardCustom 
                    anime={item}
                    forma={forma}
                    showActions={showActions}
                    onlyView={false}
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
            // nestedScrollEnabled={false}
            scrollEnabled={scrollEnabled}
        />
    );
}