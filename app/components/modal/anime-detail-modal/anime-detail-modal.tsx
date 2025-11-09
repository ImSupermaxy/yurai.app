import InteractiveIcon from "@/components/common/interactive-icon/interactive-icon";
import { animeService } from "@/service/animes.service";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import Estrelas from "@/components/common/estrelas/estrelas";
import ReviewList from "@/components/common/review-list/review-list";
import SeeMoreText from "@/components/common/see-more-text/see-more-text";
import ButtonCustom from "@/components/custom/button-custom/button-custom";
import { colors } from "@/constants/colors";
import { AnimeSelection, useSettingsState } from "@/context/settings-provider";
import { ReviewStorageModel } from "@/service/reviews.service";
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from "expo-router";
import { millify } from 'millify';
import { useCallback, useState } from "react";
import Modal from 'react-native-modal';
import { animeDefault } from "../modal-default";
import ModalDefaultModel from "../modal-default.model";
import ReviewEditModal from "../review-edit-modal/review-edit-modal";
import styles from "./anime-detail-modal.styles";

interface AnimeDetailModalModel {
    animeSelected: AnimeSelection | null,
    // userReviews: ReviewStorageModel[]
    // reviews: ReviewStorageModel[]
}

export default function AnimeDetailModal({ isVisible, onCloseModal, animeSelected }: AnimeDetailModalModel & ModalDefaultModel) { 
  const { reviews, animes, setAnimes, setAnimeSelected } = useSettingsState();
  const anime = animeSelected != null ? animeSelected.anime : animeDefault;
  
  const banner = animeService.banners[anime?.bannerImage!];

  const [openNovaReview, setOpenNovaReview] = useState(false);
  const [reviewsFiltred, setReviewsFiltred] = useState<ReviewStorageModel[]>(reviews);
  const [reviewsUserFiltred, setReviewsUserFiltred] = useState<ReviewStorageModel[]>([]);
  const [isFavorito, setIsFavorito] = useState<boolean>(anime === null ? false : anime!.isFavorito!);
  
  useFocusEffect(
    useCallback(() => {
      changeReviewsFiltred();

      if (!!isVisible)
        setIsFavorito(anime === null ? false : anime!.isFavorito!);

    }, [isVisible, animes])
  );

  const headerStyle = StyleSheet.create({
      container: {
          width: "100%",
          height: "auto",
          paddingVertical: 8
          // backgroundImage: banner.
      },
      banner: {
          width: "auto",
          height: 159,
          marginTop: -12
      }
  });

  function changeReviewsFiltred() {
    setReviewsFiltred(reviews.filter(r => r.animeId == anime?.id && !r.isUserReview));
    setReviewsUserFiltred(reviews.filter(r => r.animeId == anime?.id && r.isUserReview));
  }

  function openNovaReviewModal() {
    setOpenNovaReview(!openNovaReview);
    // if (!openNovaReview == true)
    //   onCloseModal();

    // setAnimeSelected(animeSelected);
  }

  function closeReviewModal() {
    setOpenNovaReview(false);
    changeReviewsFiltred();
  }

  function changeFavorito() {
    setIsFavorito(!isFavorito);
    anime!.isFavorito = !isFavorito;
    const tmpAnimes = animes.filter(a => a.id !== anime?.id);
    tmpAnimes.push(anime!);
    setAnimes(tmpAnimes.sort((a, b) => a.id - b.id));
  }

  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        style={{ height: "auto", width: "100%", padding: 0, margin: 0 }}
        onBackdropPress={onCloseModal}
      >
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={headerStyle.container}>
              <View>
              {/* BEGGIN:: HEADER */}
                <View style={styles.headerActions}>
                  <InteractiveIcon onPress={onCloseModal} icon={"close"} />
                  <InteractiveIcon onPress={() => { console.log("adicionar mais ações com o anime...") }} icon={"dots-vertical"} />
                </View>
                <ImageBackground
                  source={animeService.banners[anime?.bannerImage!]}
                  style={headerStyle.banner}
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={[colors.global.backgroundColor, 'transparent']}
                    style={[stylesGradient.gradient, stylesGradient.topGradient]}
                  />
  
                  <LinearGradient
                    colors={['transparent', colors.global.backgroundColor]}
                    style={[stylesGradient.gradient, stylesGradient.bottomGradient]}
                  />
                </ImageBackground>
              {/* END:: HEADER */}
              </View>
    
              <View style={styles.body}>
              {/* BEGGIN:: BODY */}
                <View style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  <View style={styles.detalhes}>
                    <View style={{ minWidth: 154, maxWidth: 154, flexDirection: "column", gap: 4 }}>
                      <Text style={styles.title}>{ anime?.name }</Text>
                      <Text style={styles.text}>{ anime?.periodoLancamento } {anime?.anoLancamento}</Text>
                      <Text style={styles.text}>{ anime?.tipoExibicao }</Text>
                    </View>
                    <View style={styles.rightSide}>
                      <View style={styles.rating}>
                        <Estrelas quantidade={anime?.qtdEstrelas ?? 0.5 } exibirVazia={true} />
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "flex-start", gap: 4, alignItems: "center"}}>
                          <Text style={{fontSize: 16, color: colors.global.text }}>{"|"}</Text>
                          <Text style={styles.ratingText}>{anime?.review} {"(" + millify(anime?.qtdReviews ?? 0) + ")"}</Text>
                        </View>
                      </View>
                      <View style={styles.bodyActions}>
                        <ButtonCustom title="Nova Review" onPress={openNovaReviewModal} icon="plus-circle-outline" />
                        <View style={styles.action}>
                          <InteractiveIcon 
                            onPress={() => { console.log("adicionar ação de compartilhar...") }} 
                            icon={"share-variant-outline"} 
                            size={20} 
                            name={"Comp..."}
                            align="column" 
                          />
                            {/* <Text style={{ fontSize: 8, color: colors.global.text }}>Compartilhar</Text> */}
                        </View>
                        <View style={styles.action}>
                          <InteractiveIcon 
                            onPress={changeFavorito} 
                            icon={isFavorito ? "heart" : "heart-outline"} 
                            size={20} 
                            name={isFavorito ? "Favorito" : "Favoritar"}
                            align="column" 
                          />
                          {/* <Text style={{ fontSize: 8, color: colors.global.text }}>{ isFavorito ? "Favorito" : "Favoritar" }</Text> */}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{ maxHeight: 300 }}>{/* +37 com o "mostrar mais" */}
                    <SeeMoreText numberOfLines={6} text={anime?.descricao ?? ""} style={styles.text} />
                  </View>
                </View>
    
                <View style={styles.reviews}>
                  { reviewsUserFiltred.length > 0 ? ( 
                    <ReviewList title="Sua Avaliação" reviews={reviewsUserFiltred} /> )
                    : <></>
                  }
                  <ReviewList title="Avaliações Gerais" reviews={reviewsFiltred}/>
                </View>
              {/* END:: BODY */}
              </View>
            </View>
          </ScrollView>
        </View>     
        
        {openNovaReview && (<ReviewEditModal isVisible={openNovaReview} onCloseModal={closeReviewModal} />)}
      </Modal>
    </View>
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
