import ButtonCustom from '@/components/custom/button-custom/button-custom';
import { colors } from '@/constants/colors';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

interface SeeMoreText {
    text: string
    numberOfLines: number
    style?: any | null
}

const mediaPalavrasPorLinha = 9;

export default function SeeMoreText ({ text = "", numberOfLines = 3, style = null }: SeeMoreText) {
  const [expanded, setExpanded] = useState(false);
console.log(text.trim())
  return (
    <View>
      <Text
        style={[style === null ? { fontSize: 12, fontWeight: "regular", color: colors.global.text } : style]}
        numberOfLines={expanded ? undefined : numberOfLines}
      >
        {text.trim()}
      </Text>
      {
        (text.split(' ').length / 9) > numberOfLines ? (
        <ButtonCustom 
          style={{ alignSelf: "flex-end" }}
          title={expanded ? "Mostrar menos" : "Mostrar mais"} 
          backgroundColor={colors.global.backgroundBackColor}
          color={colors.global.specialText}
          onPress={() => setExpanded(!expanded)}
          invertColors={false}
          fontWeight="bold"
        />
        ) : <></> 
      }
    </View>
  );
};
