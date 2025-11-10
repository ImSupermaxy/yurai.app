import { ImageSourcePropType } from "react-native";
// Importa o arquivo JSON diretamente
import animesTeste from '@/assets/data/animes/animes-teste.json';
import animes from '@/assets/data/animes/animes.json';
import { BaseResourceService } from "../../shared/base-resource.service";

type ImagesCardAvaliable = "card" | "banner" | "fullmetalAlchemistCard" | "fullmetalBrotherhoodCard" | "onePieceCard" | "chainsawManCard" 
        | "bleachCard" | "blackCloverCard" | "attackOnTitanCard" | "narutoCard" | "blueLockCard" | "deathNoteCard" | "kikiDeliveryServiceCard" | "tokyoRevengersCard"
        | "linkClickCard" | "theSummerHikaruDiedCard" | "theSummerHikaruDiedCard" | "jujutsuKaisenCard" | "myHeroAcademiaCard" | "apothecaryDiariesCard"
        | "frierenBeyondJourneysEndCard" | "danDaDanCard" | "sk8InfinityCard" | "haikyuuCard";

type ImagesBannersAvaliable = "card" | "banner" | "fullmetalAlchemistBanner" | "fullmetalBrotherhoodBanner" | "onePieceBanner" | "chainsawManBanner" 
        | "bleachBanner" | "blackCloverBanner" | "attackOnTitanBanner" | "narutoBanner" | "blueLockBanner" | "deathNoteBanner" | "kikiDeliveryServiceBanner" 
        | "tokyoRevengersBanner" | "linkClickBanner" | "theSummerHikaruDiedBanner" | "theSummerHikaruDiedBanner" | "jujutsuKaisenBanner" | "myHeroAcademiaBanner" | "apothecaryDiariesBanner"
        | "frierenBeyondJourneysEndBanner" | "danDaDanBanner" | "sk8InfinityBanner" | "haikyuuBanner"

export interface AnimeStorageModel {
    id: number
    name: string,
    descricao?: string
    cardImage: ImagesCardAvaliable
    bannerImage: ImagesBannersAvaliable
    qtdEstrelas?: number
    review?: number
    periodoLancamento?: "Primavera" | "Outuno" | "Verão" | "Inverno",
    isFavorito?: boolean,
    tipoExibicao?: "Legendado" | "Dublado",
    anoLancamento?: number,
    qtdReviews?: number,
}

const cardDefault = require('@/assets/images/cards/card.png');
const bannerDefault = require('@/assets/images/banners/banner.png');

// Adicionar aqui o caminho das outras imagens...
export const cards: {
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
    gachiakutaCard: ImageSourcePropType,
} = {
    card: cardDefault,
    banner: bannerDefault,
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
    gachiakutaCard: require("@/assets/images/cards/Gachiakuta.jpeg"),
};

const kikisBanner = 1; // getRandomNumber(1, 4);
const frierenBanner = 1; // getRandomNumber(1, 3);
const danDaDanBanner = 1; // getRandomNumber(1, 2);

export const banners: {
    card: ImageSourcePropType,
    banner: ImageSourcePropType,
    fullmetalAlchemistBanner: ImageSourcePropType,
    fullmetalBrotherhoodBanner: ImageSourcePropType,
    onePieceBanner: ImageSourcePropType,
    chainsawManBanner: ImageSourcePropType,
    bleachBanner: ImageSourcePropType,
    blackCloverBanner: ImageSourcePropType,
    attackOnTitanBanner: ImageSourcePropType,
    narutoBanner: ImageSourcePropType,
    blueLockBanner: ImageSourcePropType,
    deathNoteBanner: ImageSourcePropType
    kikiDeliveryServiceBanner: ImageSourcePropType,
    tokyoRevengersBanner: ImageSourcePropType,
    linkClickBanner: ImageSourcePropType,
    theSummerHikaruDiedBanner: ImageSourcePropType,
    jujutsuKaisenBanner: ImageSourcePropType,
    myHeroAcademiaBanner: ImageSourcePropType,
    apothecaryDiariesBanner: ImageSourcePropType,
    frierenBeyondJourneysEndBanner: ImageSourcePropType,
    danDaDanBanner: ImageSourcePropType,
    sk8InfinityBanner: ImageSourcePropType,
    haikyuuBanner: ImageSourcePropType,
    gachiakutaBanner: ImageSourcePropType,
} = {
    card: cardDefault,
    banner: bannerDefault,
    fullmetalAlchemistBanner: require("@/assets/images/banners/FullmetalAlchemist.jpeg"),
    fullmetalBrotherhoodBanner: require("@/assets/images/banners/fullmetalAchemistBrotherhood.png"),
    onePieceBanner: require("@/assets/images/banners/OnePiece.jpeg"),
    chainsawManBanner: require("@/assets/images/banners/ChainsawMan.jpeg"),
    bleachBanner: require("@/assets/images/banners/Bleach.jpeg"),
    blackCloverBanner: require("@/assets/images/banners/BlackClover.jpeg"),
    attackOnTitanBanner: require("@/assets/images/banners/AttackOnTitan.jpeg"),
    narutoBanner: require("@/assets/images/banners/Naruto.jpeg"),
    blueLockBanner: require("@/assets/images/banners/BlueLock.jpeg"),
    deathNoteBanner: require("@/assets/images/banners/DeathNote.jpeg"),
    kikiDeliveryServiceBanner: 
        (kikisBanner == 1 ? require("@/assets/images/banners/KikiDeliveryService1.jpeg") 
        : kikisBanner == 2 ? require("@/assets/images/banners/KikiDeliveryService2.jpeg") 
        : kikisBanner == 3 ? require("@/assets/images/banners/KikiDeliveryService3.jpeg")
        : require("@/assets/images/banners/KikiDeliveryService4.jpeg")),
    tokyoRevengersBanner: require("@/assets/images/banners/TokyoRevengers.jpeg"),
    linkClickBanner: require("@/assets/images/banners/LinkClick.jpeg"),
    theSummerHikaruDiedBanner: require("@/assets/images/banners/TheSummerHikaruDied.jpeg"),
    jujutsuKaisenBanner: require("@/assets/images/banners/JujutsuKaisen.jpeg"),
    myHeroAcademiaBanner: require("@/assets/images/banners/BokuNoHeroAcademia.jpeg"),
    apothecaryDiariesBanner: require("@/assets/images/banners/TheApothecaryDiaries.jpeg"),
    frierenBeyondJourneysEndBanner: 
        (frierenBanner == 1 ? require("@/assets/images/banners/SousouNoFriere1.jpeg")
        : frierenBanner == 2 ? require("@/assets/images/banners/SousouNoFriere2.jpeg")
        : require("@/assets/images/banners/SousouNoFriere3.jpeg")),
    danDaDanBanner: 
        (danDaDanBanner == 1 ? require("@/assets/images/banners/DanDaDan2.jpeg") 
        :  require("@/assets/images/banners/DanDaDan1.jpeg")),
    sk8InfinityBanner: require("@/assets/images/banners/Sk8TheInfinity.jpeg"),
    haikyuuBanner: require("@/assets/images/banners/Haikyu.jpeg"),
    gachiakutaBanner: require("@/assets/images/banners/Gachiakuta.jpeg"),
};

export function getRandomNumber (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class AnimeService extends BaseResourceService<AnimeStorageModel> {

    constructor () {
        const testeJSONAnime = animesTeste as AnimeStorageModel[];
        const storage: AnimeStorageModel[] = animes as AnimeStorageModel[];

        super("anime", storage);
    }
    
}

const service = new AnimeService();

export const animeService = { service, cards, banners };