import CardCustom from "@/components/custom/card-custom/card-custom";
import screen_styles from "@/screens/screen-default.styles";
import { AnimeStorageModel } from "@/service/animes.service";
import { Button, Modal, View } from "react-native";
import ModalDefaultModel from "../modal-default.model";
import styles from "./review-edit-modal.styles";

interface ReviewModalModel {
    anime: AnimeStorageModel | null
}

export default function ReviewEditModal({ anime, isVisible, changeStateModal: changeState }: ReviewModalModel & ModalDefaultModel) {
    const animeDefault: AnimeStorageModel = {
        id: -1,
        name: "legal",
        cardImage: "apothecaryDiariesCard",
        bannerImage: "apothecaryDiariesBanner"
    } 
    return (
        <Modal
                visible={isVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={changeState} // Necessário no Android
            >
            <View style={styles.container}>
                <View style={styles.header}>
                    header
                </View>

                <View style={screen_styles.mainContainer}>
                    <CardCustom anime={anime ?? animeDefault} forma={"detalhado"} />
                </View>

                <Button title="Fechar" onPress={changeState} />
            </View>
        </Modal>
    );
}