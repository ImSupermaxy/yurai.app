import Buscar from "@/components/common/buscar/buscar";
import AnimeDetailModal from "@/components/modal/anime-detail-modal/anime-detail-modal";
import { useSettingsState } from "@/context/settings-provider";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function SearchScreen() {
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
      
      <AnimeDetailModal isVisible={openAnimeDetailModal} changeStateModal={() => { setAnimeSelected(null) }} />
    </View>
  );
}