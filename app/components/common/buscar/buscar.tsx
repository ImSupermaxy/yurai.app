import CardList from "@/components/common/card-list/card-list";
import TopTitle from "@/components/common/top-title/top-title";
import { InputCustom } from "@/components/custom/input-custom/input-custom";
import { useSettingsState } from "@/context/settings-provider";
import scree_styles from "@/screens/screen-default.styles";
import { AnimeStorageModel } from "@/service/animes.service";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./buscar.styles";

interface BuscarModel {
  //...
}

export default function Buscar() {
    const titleDefault = "Buscas Recentes";

    const [animesFiltred, setAnimesFiltred] = useState<AnimeStorageModel[] | []>([]);
    const [search, setSearch] = useState<string | null>(null);
    const [title, setTitle] = useState(titleDefault);
    const { animes, reviews } = useSettingsState();

    useEffect(() => {
      changeAnimesFiltred(search);
    }, [search, animes]);
    
    useFocusEffect(
      useCallback(() => {
        // Limpa o campo de busca e reseta o título
        setSearch(null);
        setTitle(titleDefault);
        changeAnimesFiltred();
    
      }, [])
    );

    function changeAnimesFiltred(text: string | null = null) {
      if (text !== null && text !== undefined && text.trim() !== '') {
        setAnimesFiltred(
          animes?.filter(a =>
            a.name.toLowerCase().includes(text.toLowerCase())
          ) ?? []
        );
      } else {
        setAnimesFiltred(animes?.filter(a => [1, 4, 6].includes(a.id!)) ?? []);
      }

    }

    function onChangeSearch(text: string | undefined | null) {//event: TextInputSubmitEditingEvent
        // const text = event.nativeEvent.text;

        if (text !== undefined && text !== null && text !== '')
        {
            setSearch(text);
            setTitle("Resultados");
            return;
        }
        
        setSearch(null);
        setTitle(titleDefault);
    }

    return (
      <View style={scree_styles.mainContainer}>
        <View style={[styles.container]}>
            <InputCustom placeholder={"Buscar..."} value={search ?? ''} onChangeText={onChangeSearch} />
            
            <View style={styles.content}>
                <TopTitle fontSize={20} title={title} width={300} padding={16} />
                {(animesFiltred.length > 0) ? (
                  <CardList animes={animesFiltred} forma={"detalhado"} horizontal={false} applyPaddingBottom={true} />
                ) : (
                    <View style={styles.notFound}>
                        <Text style={styles.text}>{"Desculpe, mas não conseguimos encontrar nenhum resultado"}</Text>
                        <Text style={styles.text}>{":("}</Text>
                    </View>
                )}
            </View>
        </View>
      </View>
    );
}