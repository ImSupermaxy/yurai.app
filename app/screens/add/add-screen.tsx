import Buscar from "@/components/common/buscar/buscar";
import ReviewEditModal from "@/components/modal/review-edit-modal/review-edit-modal";
import { useSettingsState } from "@/context/settings-provider";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function AddScreen() {
  const isFocused = useIsFocused();
  const { animeSelected, setAnimeSelected } = useSettingsState();
  const [openAnimeDetailModal, setOpenAnimeDetailModal] = useState(false);

  function changeVisibiltyModal() {
    setOpenAnimeDetailModal(animeSelected !== null && isFocused);
  }

  useEffect(() => {
    changeVisibiltyModal();
  }, [isFocused, animeSelected]);
  
  return (
    <View>
      <Buscar />
      
      <ReviewEditModal isVisible={openAnimeDetailModal} onCloseModal={() => { setAnimeSelected(null) }}/>
    </View>
  );
}