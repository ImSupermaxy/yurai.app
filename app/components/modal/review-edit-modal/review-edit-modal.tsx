import Estrelas from "@/components/common/estrelas/estrelas";
import TopTitle from "@/components/common/top-title/top-title";
import CardCustom from "@/components/custom/card-custom/card-custom";
import { colors } from "@/constants/colors";
import { useSettingsState } from "@/context/settings-provider";
import screen_styles from "@/screens/screen-default.styles";
import { AnimeStorageModel } from "@/service/animes.service";
import { ReviewStorageModel } from "@/service/reviews.service";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import ModalDefaultModel from "../modal-default.model";
import { styles } from "./review-edit-modal.styles";

interface ReviewModalModel {
    // anime: AnimeStorageModel | null
    review?: ReviewStorageModel
}

export default function ReviewEditModal({ isVisible, onCloseModal: changeState, review: undefined }: ReviewModalModel & ModalDefaultModel) {

    const { animeSelected } = useSettingsState();
    const [estrelas, setEstrelas] = useState<number>(0);

    const animeDefault: AnimeStorageModel = {
        id: -1,
        name: "legal",
        cardImage: "apothecaryDiariesCard",
        bannerImage: "apothecaryDiariesBanner"
    }

    const title = "Escreva sua avaliação";

    return (
        <Modal
                style={{ height: "auto" }}
                visible={isVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={changeState} // Necessário no Android
            >
            <View style={[
                styles.byPlataform, 
                styles.styleHeader.container
            ]}>
                <LinearGradient
                    colors={[colors.global.backgroundColor, 'transparent']}
                    style={[stylesGradient.gradient, stylesGradient.topGradient]}
                />                
                    <View style={[styles.styleHeader.mainContainer]}>
                        <Button title="Fechar" onPress={changeState} />
                        <Text style={{color: colors.global.text}}>Confirmar Review</Text>
                    </View>
                <LinearGradient
                    colors={['transparent', colors.global.backgroundColor]}
                    style={[stylesGradient.gradient, stylesGradient.bottomGradient]}
                />
            </View>
            <View style={[screen_styles.mainContainer, styles.stylesBody.container]}>
                <CardCustom anime={animeSelected ?? animeDefault} forma={"detalhado"} onlyView={true} />

                {/* <Text style={{ color: colors.global.text}}>Refatorar o cardCustom, Separar em dois componentes (um para a forma simples, e a outra para a forma complexa... (utilizar aqui apenas a complexa :)</Text> */}

                <View style={[styles.stylesBody.review]}>
                    <TopTitle fontSize={20} title={title} width={300} padding={16} fontWeight="bold" />
                    <View style={styles.stylesBody.estrelas}>
                        <Text style={styles.stylesBody.text}>Estrelas:</Text>
                        <Estrelas quantidade={3.5} exibirVazia={true} color={colors.global.selecionado}></Estrelas>
                    </View>
                    <View style={styles.stylesBody.reviewInteractive}>
                        <View style={styles.stylesBody.reviewInput}>
                            <Text style={styles.stylesBody.textInput}>Digite um texto...</Text>
                        </View>
                        <View style={styles.stylesBody.actions}>
                            <View style={styles.stylesBody.action}>
                                <Text style={{color: colors.global.text}}>icon</Text>
                                <Text style={{color: colors.global.text}}>Descrição do texto</Text>
                            </View>
                            <View style={styles.stylesBody.action}>
                                <Text style={{color: colors.global.text}}>icon</Text>
                                <Text style={{color: colors.global.text}}>Descrição do texto</Text>
                            </View>
                        </View>
                    </View>
                </View>
            
            </View>
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
    height: 50, // altura do gradiente
    zIndex: 2,
  },
  topGradient: {
    top: 0,
  },
  bottomGradient: {
    bottom: 0,
  },
});