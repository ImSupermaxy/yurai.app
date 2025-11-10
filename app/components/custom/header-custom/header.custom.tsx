import SwitchAccountModal from "@/components/modal/switch-account-modal/switch-account-modal";
import { colors } from "@/constants/colors";
import { ThemeColors } from "@/constants/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HeaderCustom({}) {

  const [openSwitchAccountModal, setOpenSwitchAccountModal] = useState(false);

  function openConfigurationModal() {
    //Abrir o modal para configuração...
    console.log("Implementar o modal de configuração...");
    // setOpenSwitchAccountModal(true);
  }

  function onCloseSwitchAccountModal() {
    setOpenSwitchAccountModal(false);
  }

  return (
    <View>
      <SafeAreaView edges={['top']}
        style={[byPlataform, styles.container]}>
          <TouchableOpacity onPress={openConfigurationModal}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={{ width: 32, height: 32, resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={openNotificationsModal}>
            <MaterialCommunityIcons name="bell-badge-outline" size={24} color={colors.global.icon} />
          </TouchableOpacity>
      </SafeAreaView>
      <SwitchAccountModal isVisible={openSwitchAccountModal} onCloseModal={onCloseSwitchAccountModal} />
    </View>
  );
}

function openNotificationsModal() {
  //Abrir o modal para configuração...
  console.log("Implementar o modal de notificação...");
  return (
    <></>
  );
}

const theme = ThemeColors.default;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundHeaderFooter, 
    borderColor: theme.backgroundHeaderFooter ,
    borderBottomColor: theme.backgroundHeaderFooter,
    // height: 90,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const byPlataform = Platform.select({
    web: {
      shadowColor: theme.backgroundHeaderFooter,
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    ios: {
      shadowColor: theme.backgroundHeaderFooter,
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    // Propriedades para Android
    android: {
      elevation: 5,
    },
  })