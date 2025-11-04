import { Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { Divider } from "react-native-paper";
import styles from "./top-title.styles";

interface TopTitleModel {
    title: string,
    width?: 300 | 330 | 350 | 380,
    fontSize?: 16 | 20 |  24,
    padding?: 0 | 16,
    fontWeight?: "regular" | "bold"
}

export default function TopTitle({ title, width = 380, fontSize = 24, padding = 0, fontWeight = "regular" }: TopTitleModel) {
    return (
        <View>
            <Text style={[{ fontSize, paddingBottom: padding, fontWeight: fontWeight, color: colors.global.text }, styles.title]}>{ title }</Text>
            <Divider style={[styles.divider, { width }]}/>
        </View>
    );
}   