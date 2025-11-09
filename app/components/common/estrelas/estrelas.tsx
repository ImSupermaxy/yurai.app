import { colors } from "@/constants/colors";
import { View } from "react-native";
import InteractiveIcon from "../interactive-icon/interactive-icon";
import style from "./estrelas.style";

interface EstrelasModel {
    size?: number
    quantidade: number
    exibirVazia?: boolean,
    color?: string,
    colorVazia?: string,
    setQtdEstrelas?: React.Dispatch<React.SetStateAction<number>> | null;
}

export default function Estrelas({ quantidade, size = 24, color = colors.global.icon, colorVazia = colors.global.icon, exibirVazia = false, setQtdEstrelas = null }: EstrelasModel) {
    const maxStars = 5;
    const stars = [];
    const isChangeQtdEstrela = setQtdEstrelas !== null

    function changeQtdEstrela(idx: number) {
      if (!isChangeQtdEstrela)
        return;

      if (idx > quantidade)
        AddEstrela((idx - quantidade));
      else
        RemoveEstrela((quantidade - idx) + 1);
    }

    function AddEstrela(valor: number) {
      setQtdEstrelas!(quantidade + valor);
    }

    function RemoveEstrela(valor: number) {
      setQtdEstrelas!(quantidade - valor);
    }
    
    for (let i = 1; i <= maxStars; i++) {
      const iconVazia = "star-outline";
      const iconMeiaEstrela = "star-half-full";
      const iconEstrelaPreenchida = "star";
      const icon = quantidade >= i ? iconEstrelaPreenchida : quantidade + 0.5 >= i ? iconMeiaEstrela : iconVazia;

      stars.push(
        <InteractiveIcon 
          key={i} 
          icon={icon} 
          size={size} 
          color={icon == iconVazia ? colorVazia : color}
          activeOpacity={isChangeQtdEstrela ? 0.7 : 1}
          onPress={() => changeQtdEstrela(i) }
        />
      );
    }

    return (
        <View style={style.container}>{stars}</View>
    );
}
    
