import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import style from "./button-custom.styles";

interface ButtonCustomModel {
    title: string,
    icon?: keyof typeof MaterialCommunityIcons.glyphMap,
    size?: number,
    color?: string,
    backgroundColor?: string,
    invertColors?: boolean 
}

export default function ButtonCustom({ 
    title, 
    onPress, 
    icon, 
    size = 24, 
    backgroundColor = colors.global.backgroundColor, 
    color = colors.global.text, 
    invertColors = true, 
    ...rest 
}: ButtonCustomModel & TouchableOpacityProps) {
    return (
        <TouchableOpacity style={[style.container, { backgroundColor: !invertColors ? backgroundColor : color}]} {...rest}>
            <MaterialCommunityIcons name={icon} color={!invertColors ? color : backgroundColor} size={20} />
            <Text style={[{ color: !invertColors ? color : backgroundColor, fontSize: 12, fontWeight: "medium" }]}>{title}</Text>
        </TouchableOpacity>
    );
}