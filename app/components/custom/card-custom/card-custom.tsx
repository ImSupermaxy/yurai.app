import { animeService } from "@/service/animes.service";
import { Image } from "react-native";
import { Card, Text } from 'react-native-paper';
import styles from "./card-custom.styles";

export type CardModel = {
    // title?: string 
    image: string
    subTitle?: string
}

export default function CardCustom({ image, subTitle }: CardModel) {
    console.log(subTitle);
    return (
        <Card style={styles.container}>
            <Image source={ animeService.imagens["card"] } style={styles.image} />
            <Card.Content style={styles.content}>
                <Text variant="bodyMedium" style={styles.text}>{ subTitle }: Brotherhood</Text>
            </Card.Content>
        </Card>
    );
}