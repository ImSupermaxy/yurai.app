import { Text, View } from "react-native";

import { Divider } from "react-native-paper";
import styles from "./top-title.styles";

interface TopTitleModel {
    title: string
}

export default function TopTitle({ title }: TopTitleModel) {
    return (
        <View>
            <Text style={styles.title}>{ title }</Text>
            <Divider style={styles.divider}/>
        </View>
    );
}   