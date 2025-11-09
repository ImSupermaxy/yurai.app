import { Text, View } from "react-native";

import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import InteractiveIcon from "../interactive-icon/interactive-icon";
import styles from "./top-title.styles";

interface TopTitleModel {
    title: string,
    width?: 300 | 330 | 350 | 380,
    fontSize?: 16 | 20 |  24,
    padding?: 0 | 16,
    fontWeight?: "regular" | "bold",
    icon?: keyof typeof MaterialCommunityIcons.glyphMap,
    actionIcon?: () => void
}

export default function TopTitle({ title, width = 380, fontSize = 24, padding = 0, fontWeight = "regular", icon = undefined, actionIcon = () => {} }: TopTitleModel) {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width }}>
                <Text style={[{ fontSize, paddingBottom: padding, fontWeight: fontWeight, color: colors.global.text }, styles.title]}>{ title }</Text>
                { (icon) && 
                    (                                        
                    <InteractiveIcon 
                        onPress={actionIcon} 
                        icon={icon}
                        size={fontSize - 4} color={colors.global.text}
                    />
                )}
            </View>
            <Divider style={[styles.divider, { width }]}/>
        </View>
    );
}   