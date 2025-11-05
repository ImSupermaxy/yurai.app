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
        | "frierenBeyondJourneysEndBanner" | "danDaDanBanner" | "sk8InfinityBanner" | "haikyuuBanner";

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

export class AnimeStorage extends BaseResourceService<AnimeStorageModel> {

    constructor () {
        const testeJSONAnime = animesTeste as AnimeStorageModel[];
        const storage: AnimeStorageModel[] = animes as AnimeStorageModel[];

        super("anime", storage);
    }
    
}