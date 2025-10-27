import { animeService, AnimeStorageModel } from '@/service/animes.service';
import { reviewService, ReviewStorageModel } from '@/service/reviews.service';
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

const SettingsContext = createContext<{animes?: AnimeStorageModel[], reviews?: ReviewStorageModel[]}>({});
export const useSettingsState = () => useContext(SettingsContext);

export function SettingsProvider({ children }: PropsWithChildren) {
  const [animes, setAnimes] = useState(([] as AnimeStorageModel[]));
  const [reviews, setReviews] = useState(([] as ReviewStorageModel[]));

  useEffect(() => {
    async function getAnime() {
        const allAnimes = await animeService.get();
        setAnimes(allAnimes);
    }

    getAnime();
  }, []);

  useEffect(() => {
    async function getReviews() {
        const allReviews = await reviewService.get();
        setReviews(allReviews);
    }

    getReviews();
  }, []);


  const value: any = useMemo(
    () => ({
      animes,
      reviews,
      setAnimes,
      setReviews,
    }),
    [animes, reviews]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
