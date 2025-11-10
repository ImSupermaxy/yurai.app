import InteractiveIcon from "@/components/common/interactive-icon/interactive-icon";
import { colors } from "@/constants/colors";
import screen_styles from "@/screens/screen-default.styles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Modal from 'react-native-modal';
import ModalDefaultModel from "../modal-default.model";
import { styles } from "./switch-account-modal.styles";

interface SwitchAccountModalModel {

}

interface AccountModel {
    id: number
    nome: string
    arroba: string
    isLogin: boolean
}

export default function SwitchAccountModal({ isVisible, onCloseModal }: SwitchAccountModalModel & ModalDefaultModel) {

    const [contasVinculadas, setContasVinculadas] = useState([
        {
            id: 1,
            nome: "Lucas",
            arroba: "@lucas",
            isLogin: false
        },
        {
            id: 2,
            nome: "Mathues",
            arroba: "@math",
            isLogin: true
        },
        {
            id: 2,
            nome: "Guilherme",
            arroba: "@guilherme",
            isLogin: false
        },
    ]);

    function switchAccount() {
        console.log("implementar lógica de trocar de conta...");
        onCloseModal();
    }

    return (
        <Modal
            isVisible={isVisible}
            animationIn="fadeInUp"
            animationOut="fadeOutDownBig"
            style={{ height: "auto", width: "100%", paddingVertical: 50, paddingHorizontal: 0, margin: 0 }}
            onBackdropPress={onCloseModal}
        >
            {/* BEGGIN:: Footer */}
            <View style={[
                styles.byPlataformHeader,
                styles.styleHeader.container
            ]}>
                <LinearGradient
                    colors={[colors.global.backgroundColor, 'transparent']}
                    style={[stylesGradient.gradient, stylesGradient.topGradient]}
                />                
                    <View style={{ alignContent: "center", justifyContent: "center" }}>
                        <View style={[styles.styleHeader.mainContainer]}>
                            <InteractiveIcon
                                onPress={onCloseModal} 
                                activeOpacity={0.7} 
                                icon={"close"} 
                                // name={"Fechar"}
                                align="column" 
                            />

                            {/* <InteractiveIcon 
                                onPress={confirmReview} 
                                activeOpacity={0.7}
                                icon={"check"} 
                                // name={"Enviar Review"} 
                                align="column"
                            /> */}
                        </View>
                    </View>
                <LinearGradient
                    colors={['transparent', colors.global.backgroundColor]}
                    style={[stylesGradient.gradient, stylesGradient.bottomGradient]}
                />
            </View>
            {/* END:: Footer */}

            {/* BEGGIN:: Body */}
            <View style={[screen_styles.mainContainer, styles.stylesBody.container]}>
                <FlatList 
                    data={contasVinculadas}
                    contentContainerStyle={{ flex: 2, gap: 54 }}
                    keyExtractor={(item) => item.id!.toString()}
                    renderItem={({ item }) => (
                        <InteractiveIcon 
                            onPress={switchAccount} 
                            name={item.nome} 
                            icon={"account"} 
                            style={{ borderRadius: 48, borderColor: item.isLogin ? colors.global.selecionado : colors.global.icon, width: 2 }}
                            fontSize={20}
                        />
                    )}
                    // horizontal={horizontal}
                    // style={[styles.container]}
                    // alwaysBounceHorizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={true}
                    alwaysBounceVertical={true}
                
                    // alwaysBounceVertical={ false }
                    // nestedScrollEnabled={false}
                    scrollEnabled={true}
                />
            </View>
            {/* END:: Body */}
            
            {/* BEGGIN:: Footer */}
            <View style={[
                styles.byPlataformFooter,
                styles.styleHeader.container
            ]}>
                <LinearGradient
                    colors={[colors.global.backgroundColor, 'transparent']}
                    style={[stylesGradient.gradient, stylesGradient.topGradient]}
                />                
                    <View style={{ alignContent: "center", justifyContent: "center" }}>
                        <View style={[styles.styleHeader.mainContainer]}>
                            {/* <InteractiveIcon
                                onPress={onCloseModal} 
                                activeOpacity={0.7} 
                                icon={"close"} 
                                // name={"Fechar"}
                                align="column" 
                            />

                            <InteractiveIcon 
                                onPress={confirmReview} 
                                activeOpacity={0.7}
                                icon={"check"} 
                                // name={"Enviar Review"} 
                                align="column"
                            /> */}
                        </View>
                    </View>
                <LinearGradient
                    colors={['transparent', colors.global.backgroundColor]}
                    style={[stylesGradient.gradient, stylesGradient.bottomGradient]}
                />
            </View>
            {/* END:: Footer */}
        </Modal>
    );
}

const stylesGradient = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 50,
    zIndex: 2,
  },
  topGradient: {
    top: 0,
  },
  bottomGradient: {
    bottom: 0,
  },
});