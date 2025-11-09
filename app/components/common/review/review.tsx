import ReviewEditModal from "@/components/modal/review-edit-modal/review-edit-modal";
import { colors } from "@/constants/colors";
import { ReviewStorageModel } from "@/service/reviews.service";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import millify from "millify";
import { useState } from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-paper";
import Estrelas from "../estrelas/estrelas";
import InteractiveIcon from "../interactive-icon/interactive-icon";
import SeeMoreText from "../see-more-text/see-more-text";
import style from "./review.styles";

export interface ReviewModel {
    review: ReviewStorageModel,
    userIcon: keyof typeof MaterialCommunityIcons.glyphMap,
}

export default function Review({ review, userIcon }: ReviewModel) {    
    const [isLiked, setIsLiked ] = useState(review.userLiked ?? false);
    const [isDisliked, setisDisliked ] = useState(review.userDisliked ?? false);
    const [openNovaReview, setOpenNovaReview] = useState(false);

    function changeLike() {
        console.log("Like clicado...");
        setIsLiked(!isLiked);
    }

    function changeDislike() {
        console.log("Dislike clicado...")
        setisDisliked(!isDisliked);
    }

    function adicionarComentario() {
        console.log("Comentário clicado...")
    }

    function openModalEditReview() {
        setOpenNovaReview(!openNovaReview);
    }

    function closeReviewModal() {
        setOpenNovaReview(false);
    }

    return (
        // <View style={style.container}>
        //     <Text style={style.title}>{title}</Text>
        //     <View style={style.content}>
                
        //     </View>
        // </View>
        <View style={{ paddingHorizontal: 16, flexDirection: "column", gap: 12 }}>
            <View style={style.container}>
                <View style={style.content}>
                    <View style={style.header}>
                        <View style={style.account}>
                            <View>
                                <MaterialCommunityIcons name={userIcon} size={16} color={colors.global.icon} />
                            </View>
                            <View style={style.userInfo}>
                                <Text style={style.text}>{review.nomeUser}</Text>
                                <Text style={style.arroba}>{review.arrobaUser}</Text>
                            </View>
                        </View>
                        {/* <View> */}
                            <Estrelas quantidade={review.qtdEstrelas} exibirVazia={true} size={20} />
                        {/* </View> */}
                    </View>
                    <View style={style.comentario}>
                        <SeeMoreText text={review.comentario} numberOfLines={4} />
                    </View>
                </View>
                <View style={style.actions}>
                    { review.isUserReview ? (
                        <InteractiveIcon onPress={openModalEditReview} icon={"pencil"} size={20} name={"Editar"} />
                        ) : ( <View/>
                    )}
                    <View>
                        <InteractiveIcon 
                            onPress={changeLike} 
                            icon={isLiked ? "thumb-up" : "thumb-up-outline"} 
                            size={20} 
                            name={millify(review.likes).toString()} 
                        />
                        <InteractiveIcon 
                            onPress={changeDislike} 
                            icon={isDisliked ? "thumb-down" : "thumb-down-outline"} 
                            size={20} 
                            name={millify(review.likes).toString()}
                        />
                    </View>
                    <InteractiveIcon 
                        onPress={adicionarComentario} 
                        icon={"comment-text"} 
                        size={20} 
                        name={"Com.."} 
                    />
                </View>
            
            </View>
            <Divider style={[{ backgroundColor: colors.global.text, width: "100%" }]}/>
 
            <ReviewEditModal isVisible={openNovaReview} onCloseModal={closeReviewModal} review={review} />
        </View>
    );
}