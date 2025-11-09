import reviewsTeste from "@/assets/data/reviews/reviews-teste.json";
import reviews from "@/assets/data/reviews/reviews.json";
import { BaseResourceService } from "../../shared/base-resource.service";

export type tipoShowReview = "onlyYou" | "onlyFriends" | "toAll";

export interface ReviewStorageModel {
    id: number
    nomeUser: string
    arrobaUser: string
    comentario: string
    nota: number
    qtdEstrelas: number
    likes: number
    disLikes: number
    isUserReview: boolean
    userLiked: boolean
    userDisliked: boolean
    animeId: number
    isSpoiler: boolean
    showReview: tipoShowReview
}

class ReviewService extends BaseResourceService<ReviewStorageModel> {

    constructor () {
        const testeJSON = reviewsTeste as ReviewStorageModel[];
        const storage: ReviewStorageModel[] = reviews as ReviewStorageModel[];

        super("review", storage);
    }
    
}

const service = new ReviewService();

export const reviewService = { service };