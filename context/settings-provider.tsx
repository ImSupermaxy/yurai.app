import { animeService } from '@/service/animes.service';
import { reviewService, ReviewStorageModel } from '@/service/reviews.service';
import { AnimeStorageModel } from '@/storage/anime-storage';
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

interface SettingsContextProps {
  animes: AnimeStorageModel[];
  reviews: ReviewStorageModel[];
  animeSelected: AnimeSelection | null;
  setAnimes: React.Dispatch<React.SetStateAction<AnimeStorageModel[]>>;
  setReviews: React.Dispatch<React.SetStateAction<ReviewStorageModel[]>>;
  setAnimeSelected: React.Dispatch<React.SetStateAction<AnimeSelection | null>>;
}

export type ModalsToOpenModel = "details" | "editReview" | "addReview" 

export interface AnimeSelection {
  anime: AnimeStorageModel
  modalToOpen: ModalsToOpenModel
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);
export const useSettingsState = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettingsState deve ser usado dentro de SettingsProvider');
  return context;
};

export function SettingsProvider({ children }: PropsWithChildren) {
  const [animes, setAnimes] = useState(([] as AnimeStorageModel[]));
  const [animeSelected, setAnimeSelected] = useState<AnimeSelection | null>(null);
  const [reviews, setReviews] = useState(([] as ReviewStorageModel[]));

  useEffect(() => {
    async function getAnime() {
        const allAnimes = await animeService.service.get();
        setAnimes(allAnimes);
    }

    getAnime();
  }, []);

  useEffect(() => {
    async function getReviews() {
        const allReviews = await reviewService.service.get();
        setReviews(allReviews);
    }

    getReviews();
  }, []);

  const value: any = useMemo(
    () => ({
      animes,
      reviews,
      animeSelected,
      setAnimes,
      setReviews,
      setAnimeSelected,
    }),
    [animes, reviews, animeSelected]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
