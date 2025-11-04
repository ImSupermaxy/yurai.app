import { ReviewStorageModel } from "@/service/reviews.service";
import { FlatList, Text, View } from "react-native";
import Review from "../review/review";
import style from "./review-list.style";

interface ReviewListModel {
    title: string
    reviews: ReviewStorageModel[]
}

export default function ReviewList({ title, reviews }: ReviewListModel) {
    return (
        <View style={{ flexDirection: "column", gap: 14 }}>
            <Text style={style.title}>{ title }</Text>
            <FlatList 
                data={reviews}
                // accessibilityShowsLargeContentViewer={true}
                // alwaysBounceHorizontal={true}
                alwaysBounceVertical={ false }
                contentContainerStyle={{ paddingVertical: 16, gap: 32 }}
                keyExtractor={(item: ReviewStorageModel) => item.id!.toString()}
                renderItem={({ item }) => (
                    <Review review={item} userIcon={"account"} />
                )}
                horizontal={false}
                style={style.container}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={false}
                scrollEnabled={false}
            />
        </View>
    );
}