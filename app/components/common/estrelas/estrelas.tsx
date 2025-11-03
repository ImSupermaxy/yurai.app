import { colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import style from "./estrelas.style";

interface EstrelasModel {
    size?: number
    quantidade: number
    exibirVazia?: boolean,
    color?: string,
    // onChange: () => void
}

export default function Estrelas({ quantidade, size = 24, color = colors.global.icon, exibirVazia = false }: EstrelasModel) {
    const maxStars = 5;
    const stars = [];
    
    for (let i = 1; i <= maxStars; i++) {
      if (quantidade >= i) {
        // estrela cheia
        stars.push(
          <MaterialCommunityIcons key={i} name="star" size={size} color={color} />
        );
      } else if (quantidade + 0.5 >= i) {
        // meia estrela
        stars.push(
          <MaterialCommunityIcons key={i} name="star-half-full" size={size} color={color} />
        );
      } else {
        // estrela vazia
        if (exibirVazia)
            stars.push(
                <MaterialCommunityIcons key={i} name="star-outline" size={size} color={color} />
            );
      }
    }

    return (
        <View style={style.container}>{stars}</View>
    );
}
    
