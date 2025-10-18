import { colors } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./yurai-button.styles";

interface YuraiButtonModel {
    icon?: keyof typeof MaterialIcons.glyphMap;
    text?: string
    iconColor?: string
    textColor?: string
}

export function YuraiButton({ icon = "search-off", text = "", iconColor = colors.gray[400], textColor = colors.gray[100], ...rest }: YuraiButtonModel & PressableProps) {
    return (
        <View style={styles.container}>
            <Pressable {...rest}>
                <TouchableOpacity activeOpacity={0.75}>
                    ({icon} && <MaterialIcons name={icon} color={iconColor}></MaterialIcons>)
                    ({text} && <Text style={[{ color: textColor },  ]}>{text}</Text>)
                </TouchableOpacity>
            </Pressable>
        </View>
    );
}