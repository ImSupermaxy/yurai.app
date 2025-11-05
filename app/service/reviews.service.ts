import reviewsTeste from "@/assets/data/reviews/reviews-teste.json"
import { BaseResourceService } from "../../shared/base-resource.service"

export type ReviewStorageModel = {
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
}

class ReviewService extends BaseResourceService<ReviewStorageModel> {

    constructor () {
        const testeJSON = reviewsTeste as ReviewStorageModel[];
        // const storage: ReviewStorageModel[] = reviews as ReviewStorageModel[];

        super("review", testeJSON);
    }
    
}

const service = new ReviewService();

export const reviewService = { service };