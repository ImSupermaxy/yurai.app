import { animeService } from "@/service/animes.service";
import { Image } from "react-native";
import { Card, Text } from 'react-native-paper';
import { styles } from "./card-custom.styles";

export type CardModel = {
    // title?: string 
    image: "card" | "banner" | "fullmetalAlchemistCard" | "fullmetalBrotherhoodCard" | "onePieceCard" | "chainsawManCard" 
        | "bleachCard" | "blackCloverCard" | "attackOnTitanCard" | "narutoCard" | "blueLockCard" | "deathNoteCard" | "kikiDeliveryServiceCard" | "tokyoRevengersCard"
        | "linkClickCard" | "theSummerHikaruDiedCard" | "theSummerHikaruDiedCard" | "jujutsuKaisenCard" | "myHeroAcademiaCard" | "apothecaryDiariesCard"
        | "frierenBeyondJourneysEndCard" | "danDaDanCard" | "sk8InfinityCard" | "haikyuuCard"
    subTitle?: string,
    estrelas?: number,
    // estrelas?: number,...
    // estrelas?: number,...
    // estrelas?: number,...
    forma?: "simples" | "detalhado"
    onPress: () => void
}

export default function CardCustom({ image, subTitle, onPress, forma = "simples" }: CardModel) {
    return (
        <Card style={styles.stylesSimples.container}>
            <Image source={ animeService.imagens[image] } style={styles.stylesSimples.image} />
            <Card.Content style={styles.stylesSimples.content}>
                <Text variant="bodyMedium" style={styles.stylesSimples.text}>{ subTitle }</Text>
            </Card.Content>
        </Card>

        // <Card style={styles.stylesDetalhado.container}>
        //     <Image source={ animeService.imagens["card"] } style={styles.stylesDetalhado.image} />
        //     <Card.Content style={styles.stylesDetalhado.content}>
        //         <Text variant="bodyMedium" style={styles.stylesDetalhado.text}>{ subTitle }: Brotherhood</Text>
        //     </Card.Content>
        // </Card>
    );
}