import Estrelas from "@/components/common/estrelas/estrelas";
import InteractiveIcon from "@/components/common/interactive-icon/interactive-icon";
import TopTitle from "@/components/common/top-title/top-title";
import CardCustom from "@/components/custom/card-custom/card-custom";
import { TextInputCustom } from "@/components/custom/text-input-custom/text-input-custom";
import { colors } from "@/constants/colors";
import { useSettingsState } from "@/context/settings-provider";
import screen_styles from "@/screens/screen-default.styles";
import { ReviewStorageModel, TipoShowReview } from "@/service/reviews.service";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Modal from 'react-native-modal';
import { animeDefault } from "../modal-default";
import ModalDefaultModel from "../modal-default.model";
import { styles } from "./review-edit-modal.styles";

interface ReviewModalModel {
    // anime: AnimeStorageModel | null
    review?: ReviewStorageModel
}

export default function ReviewEditModal({ isVisible, onCloseModal, review = undefined }: ReviewModalModel & ModalDefaultModel) {

    const estrelasDefault = review !== undefined ? review.qtdEstrelas : 0;
    const comentarioDefault = review !== undefined ? review.comentario : "";
    const isSpoilerDefault = review !== undefined ? review.isSpoiler : false;
    const showReviewDefault = review !== undefined ? review.showReview : "toAll";

    const { reviews, animeSelected, setReviews } = useSettingsState();

    const [hasChanged, setHasChaged] = useState<boolean>(false);
    const [estrelas, setEstrelas] = useState<number>(estrelasDefault);
    const [comentario, setComentario] = useState<string>(comentarioDefault);
    const [isSpoiler, setIsSpoiler] = useState<boolean>(isSpoilerDefault);
    const [showReview, setShowReview] = useState<TipoShowReview>(showReviewDefault);

    const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

    const anime = animeSelected !== null ? animeSelected.anime : animeDefault;

    const title = "Escreva sua avaliação";


    function onChangeComentario(text: string | undefined | null) {
        if (text !== null && text !== undefined)
            setComentario(text);
    }

    function onChangeIsSpoiler() {
        setIsSpoiler(!isSpoiler);
    }

    function onChangeShowReview() {
        if (showReview === "toAll")
            setShowReview("onlyFriends");
        if (showReview === "onlyFriends")
            setShowReview("onlyYou");
        if (showReview === "onlyYou")
            setShowReview("toAll");
    }

    function getIconShowReview() {    
        if (showReview === "toAll")
            return "eye"
        if (showReview === "onlyFriends")
            return "eye-off";
        if (showReview === "onlyYou")
            return "eye-closed";
    }

    function getNameShowReview() {    
        if (showReview === "toAll")
            return "Visível para Todos"
        if (showReview === "onlyFriends")
            return "Somente Amigos";
        if (showReview === "onlyYou")
            return "Somente Você";
    }

    async function confirmReview() {
        if (review === undefined)
            insertReview();
        else
            updateReview();

        onCloseModal();
    }

    function insertReview() {
        const newId = (reviews.findLast(r => r.id)?.id ?? 0) + 1;
        const payload: ReviewStorageModel = {
            id: newId,
            nomeUser: "Aline Santos",
            arrobaUser: "aline_santos",
            comentario: comentario,
            nota: estrelas,
            qtdEstrelas: estrelas,
            likes: 0,
            disLikes: 0,
            isUserReview: true,
            animeId: anime.id,
            userLiked: false,
            userDisliked: false,
            isSpoiler: isSpoiler,
            showReview: showReview
        };

        reviews.push(payload);
        setReviews(reviews.sort((a, b) => a.id - b.id));
    }

    function updateReview() {
        review!.qtdEstrelas = estrelas;
        review!.comentario = comentario;
        review!.isSpoiler = isSpoiler;
        review!.showReview = showReview;

        const tmpReviews = reviews.filter(r => r.id !== review!.id);
        tmpReviews.push(review!);
        setReviews(tmpReviews.sort((a, b) => a.id - b.id));
    }

    function changeVisibilityConfirmModal() {
        // setOpenConfirmModal(true);
        onCloseModal();
        console.log("confirmação de resetar tudo...");
    }

    useEffect(() => {
        if (hasChanged)
            return;

        const changedEstrela = estrelas !== estrelasDefault;
        const chagedComentario = comentario !== comentarioDefault;
        const chagendIsSpoiler = isSpoiler != isSpoilerDefault;
        const chagedShowReview = showReview != showReviewDefault;

        setHasChaged((changedEstrela || chagedComentario || chagendIsSpoiler || chagedShowReview));

    }, [isVisible, estrelas, comentario, isSpoiler, showReview]);

    return (
        <Modal
            isVisible={isVisible}
            animationIn="fadeInUp"
            animationOut="fadeOutDownBig"
            style={{ height: "auto", width: "100%", paddingVertical: 0, paddingHorizontal: 0, margin: 0 }}
            onBackdropPress={onCloseModal}
        >
            <View style={{minHeight: "100%", height: "auto", backgroundColor: colors.global.backgroundColor}}>
                <ScrollView keyboardShouldPersistTaps="handled" bounces={false}>
             <View style={[
                    styles.styleHeader.container,
                    styles.byPlataform, 
                ]}>
                    <LinearGradient
                        colors={[colors.global.backgroundColor, 'transparent']}
                        style={[stylesGradient.gradient, stylesGradient.topGradient]}
                    />                
                        <View style={{ alignContent: "center", justifyContent: "center" }}>
                            <View style={[styles.styleHeader.mainContainer]}>
                                <InteractiveIcon 
                                    onPress={hasChanged ? changeVisibilityConfirmModal : onCloseModal} 
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
                                />
                            </View>
                        </View>
                    <LinearGradient
                        colors={['transparent', colors.global.backgroundColor]}
                        style={[stylesGradient.gradient, stylesGradient.bottomGradient]}
                    />
                </View>
            <Pressable onPress={Keyboard.dismiss}>

               
                    <View style={[screen_styles.mainContainer, styles.stylesBody.container]}>
                        <CardCustom anime={anime} forma={"detalhado"} onlyView={true} />
                
                        <View style={[styles.stylesBody.review]}>
                            <TopTitle fontSize={20} title={title} width={300} padding={16} fontWeight="bold" />
                            <View style={styles.stylesBody.estrelas}>
                                <Text style={[styles.stylesBody.text, { fontSize: 18 }]}>Estrelas:</Text>
                                <Estrelas 
                                    size={28} 
                                    quantidade={estrelas} 
                                    exibirVazia={true} 
                                    color={colors.global.selecionado} 
                                    setQtdEstrelas={setEstrelas} 
                                />
                            </View>
                            <View style={styles.stylesBody.reviewInteractive}>
                                <View style={styles.stylesBody.reviewInput}>
                                    {/* <Text style={styles.stylesBody.textInput}></Text> */}
                
                                    <TextInputCustom 
                                        placeholder={"Digite sua review..."} 
                                        value={comentario ?? ''} 
                                        onChangeText={onChangeComentario}
                                        multiline={true}
                                        style={{ borderWidth: 0, borderBottomWidth: 0, height: "auto", color: colors.global.text, paddingBottom: 4 }}
                                        underlineColorAndroid="transparent"
                                        scrollEnabled={false}
                                        // numberOfLines={10}
                                    />
                                </View>
                                <View style={styles.stylesBody.actions}>
                                    <InteractiveIcon 
                                        onPress={onChangeShowReview} 
                                        size={48}
                                        icon={getIconShowReview() ?? "eye"} 
                                        name={getNameShowReview()} 
                                        align={"column"} 
                                        color={showReview === "onlyYou" ? colors.gray[400] : showReview == "toAll" ? colors.global.selecionado : colors.global.icon}
                                        fontSize={8}
                                    />
                                    <InteractiveIcon 
                                        onPress={onChangeIsSpoiler} 
                                        size={48}
                                        icon={isSpoiler ? "alert-outline" : "alert-plus-outline"}
                                        name={isSpoiler ? "Alerta de Spoiler" : "Adicionar tag Spoiler"}
                                        align={"column"} 
                                        color={isSpoiler ? colors.global.selecionado : colors.global.icon}
                                        fontSize={8}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
            </Pressable>
                </ScrollView>
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