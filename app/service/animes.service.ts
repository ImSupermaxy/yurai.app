import { ImageSourcePropType } from "react-native";
// Importa o arquivo JSON diretamente
import animes from '@/assets/data/animes/animes-teste.json';

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
}

// imagens.js
const imagens: {
    card: ImageSourcePropType,
    banner: ImageSourcePropType
} = {
  card: require('@/assets/images/cards/card.png'),
  banner: require('@/assets/images/banners/banner.png'),
};

// const ANIMES_FILE_NAME = "animes-teste";
// async function get(): Promise<AnimeStorageModel[]> {
//     try {
//         console.log("service:");
//         const storage = await jsonService.get<AnimeStorageModel[]>(ANIMES_FILE_NAME, "animes");
//         console.log(storage);
//         if (storage === undefined)
//             return [];

//         return storage;
//     }
//     catch (error) {
//         throw error;
//     }
// }

function get(): AnimeStorageModel[] {
    try {
        const storage: AnimeStorageModel[] = animes as AnimeStorageModel[];

        if (storage === undefined)
            return [];

        return storage;
    }
    catch (error) {
        throw error;
    }
}


export const animeService = { get, imagens };