import ButtonCustom from '@/components/custom/button-custom/button-custom';
import { colors } from '@/constants/colors';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function SeeMoreText ({ text = "", numberOfLines = 3 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Text
        style={[{ fontSize: 12, fontWeight: "regular", color: colors.global.text }]}
        numberOfLines={expanded ? undefined : numberOfLines}
      >
        {text}
      </Text>

      {/* Só mostra o botão "Ver mais" se o texto for longo */}
      {
        text.length > 100 ? (
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
