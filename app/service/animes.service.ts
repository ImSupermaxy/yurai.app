import { jsonService } from "@/utils/json.service"
import { ImageSourcePropType } from "react-native"
import { ReviewStorageModel } from "./reviews.service"

export interface AnimeStorageModel {
    id: number
    name: string,
    descricao: string
    cardImage: string
    bannerImage: string
    qtdEstrelas: number
    review: number
    periodoLancamento: "Primavera" | "Outuno" | "Verão" | "Inverno",
    isFavorito: boolean,
    tipoExibicao: "Legendado" | "Dublado"
    reviews: ReviewStorageModel[]
}

// imagens.js
const imagens: {
    card: ImageSourcePropType,
    banner: ImageSourcePropType
} = {
  card: require('@/assets/images/cards/card.png'),
  banner: require('@/assets/images/banners/banner.png'),
};


const ANIMES_FILE_NAME = "animes-teste";

async function get(): Promise<AnimeStorageModel[]> {
    try {
        const storage = await jsonService.get<AnimeStorageModel[]>(ANIMES_FILE_NAME, "animes");
        console.log(storage);
        if (storage === undefined)
            return [];

        return storage;
    }
    catch (error) {
        throw error;
    }
}

export const animeService = { get, imagens };