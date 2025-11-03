import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface InteractiveIconModel {
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
    size?: number,
    color?: string
}

export default function InteractiveIcon({ onPress, icon, size = 24, color = colors.global.icon, ...rest }: InteractiveIconModel & TouchableOpacityProps) {
    return (
        <TouchableOpacity onPress={onPress} {...rest}>
            <MaterialCommunityIcons name={icon} size={size} color={color} />
        </TouchableOpacity>
    );
}