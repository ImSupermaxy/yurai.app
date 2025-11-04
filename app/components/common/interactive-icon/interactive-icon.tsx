import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface InteractiveIconModel {
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
    name?: string | null,
    align?: "row" | "column"
    size?: number,
    color?: string
}

export default function InteractiveIcon({ onPress, icon, name = null, align = "row", size = 24, color = colors.global.icon, ...rest }: InteractiveIconModel & TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={{ flexDirection: align, gap: 4, justifyContent: "center", alignItems: "center" }}
            {...rest} 
        >
            <MaterialCommunityIcons name={icon} size={size} color={color} />
            <Text style={{ fontSize: 10, color: colors.global.text }}>{name}</Text>
        </TouchableOpacity>
    );
}