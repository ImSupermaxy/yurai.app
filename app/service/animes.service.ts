import { ImageSourcePropType } from "react-native";
// Importa o arquivo JSON diretamente
import animesTeste from '@/assets/data/animes/animes-teste.json';
import animes from '@/assets/data/animes/animes.json';

export interface AnimeStorageModel {
    id: number
    name: string,
    descricao?: string
    cardImage: "card" | "banner" | "fullmetalAlchemistCard" | "fullmetalBrotherhoodCard" | "onePieceCard" | "chainsawManCard" 
        | "bleachCard" | "blackCloverCard" | "attackOnTitanCard" | "narutoCard" | "blueLockCard" | "deathNoteCard" | "kikiDeliveryServiceCard" | "tokyoRevengersCard"
        | "linkClickCard" | "theSummerHikaruDiedCard" | "theSummerHikaruDiedCard" | "jujutsuKaisenCard" | "myHeroAcademiaCard" | "apothecaryDiariesCard"
        | "frierenBeyondJourneysEndCard" | "danDaDanCard" | "sk8InfinityCard" | "haikyuuCard"
    bannerImage?: string
    qtdEstrelas?: number
    review?: number
    periodoLancamento?: "Primavera" | "Outuno" | "Verão" | "Inverno",
    isFavorito?: boolean,
    tipoExibicao?: "Legendado" | "Dublado",
    anoLancamento?: number
}

// Adicionar aqui o caminho das outras imagens...
const imagens: {
    card: ImageSourcePropType,
    banner: ImageSourcePropType,
    fullmetalAlchemistCard: ImageSourcePropType,
    fullmetalBrotherhoodCard: ImageSourcePropType,
    onePieceCard: ImageSourcePropType,
    chainsawManCard: ImageSourcePropType,
    bleachCard: ImageSourcePropType,
    blackCloverCard: ImageSourcePropType,
    attackOnTitanCard: ImageSourcePropType,
    narutoCard: ImageSourcePropType,
    blueLockCard: ImageSourcePropType,
    deathNoteCard: ImageSourcePropType
    kikiDeliveryServiceCard: ImageSourcePropType,
    tokyoRevengersCard: ImageSourcePropType,
    linkClickCard: ImageSourcePropType,
    theSummerHikaruDiedCard: ImageSourcePropType,
    jujutsuKaisenCard: ImageSourcePropType,
    myHeroAcademiaCard: ImageSourcePropType,
    apothecaryDiariesCard: ImageSourcePropType,
    frierenBeyondJourneysEndCard: ImageSourcePropType,
    danDaDanCard: ImageSourcePropType,
    sk8InfinityCard: ImageSourcePropType,
    haikyuuCard: ImageSourcePropType,
} = {
    card: require('@/assets/images/cards/card.png'),
    banner: require('@/assets/images/banners/banner.png'),
    fullmetalAlchemistCard: require("@/assets/images/cards/FullmetalAlchemist.jpeg"),
    fullmetalBrotherhoodCard: require("@/assets/images/cards/fullmetalAchemistBrotherhood.png"),
    onePieceCard: require("@/assets/images/cards/OnePiece.jpeg"),
    chainsawManCard: require("@/assets/images/cards/ChainsawMan.jpeg"),
    bleachCard: require("@/assets/images/cards/Bleach.jpeg"),
    blackCloverCard: require("@/assets/images/cards/BlackClover.jpeg"),
    attackOnTitanCard: require("@/assets/images/cards/AttackOnTitan.jpeg"),
    narutoCard: require("@/assets/images/cards/Naruto.jpeg"),
    blueLockCard: require("@/assets/images/cards/BlueLock.jpeg"),
    deathNoteCard: require("@/assets/images/cards/DeathNote.jpeg"),
    kikiDeliveryServiceCard: require("@/assets/images/cards/KikiDeliveryService.jpeg"),
    tokyoRevengersCard: require("@/assets/images/cards/TokyoRevengers.jpeg"),
    linkClickCard: require("@/assets/images/cards/LinkClick.jpeg"),
    theSummerHikaruDiedCard: require("@/assets/images/cards/TheSummerHikaruDied.jpeg"),
    jujutsuKaisenCard: require("@/assets/images/cards/JujutsuKaisen.jpeg"),
    myHeroAcademiaCard: require("@/assets/images/cards/BokuNoHeroAcademia.jpeg"),
    apothecaryDiariesCard: require("@/assets/images/cards/TheApothecaryDiaries.jpeg"),
    frierenBeyondJourneysEndCard: require("@/assets/images/cards/SousouNoFriere.jpeg"),
    danDaDanCard: require("@/assets/images/cards/DanDaDan.jpeg"),
    sk8InfinityCard: require("@/assets/images/cards/Sk8TheInfinity.jpeg"),
    haikyuuCard: require("@/assets/images/cards/Haikyu.jpeg"),
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
        const testeJSONAnime = animesTeste as AnimeStorageModel[];
        const storage: AnimeStorageModel[] = animes as AnimeStorageModel[];

        if (storage === undefined)
            return [];

        return storage ?? testeJSONAnime ?? [];
    }
    catch (error) {
        throw error;
    }
}


export const animeService = { get, imagens };