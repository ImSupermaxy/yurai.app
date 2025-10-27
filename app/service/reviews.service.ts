import { useAsyncStorage } from "@react-native-async-storage/async-storage"

export type ReviewStorageModel = {
    id: number
    nomeUser: string
    arrobaUser: string
    comentario: string
    nota: number
    qtdEstrelas: number
    likes: number
    disLikes: number
    isUserReview: boolean,
    animeId: number
}

const REVIEWS_STORAGE_KEY = "yurai-app@reviews";

async function get(): Promise<ReviewStorageModel[]> {
    const storage = await useAsyncStorage(REVIEWS_STORAGE_KEY).getItem();

    const response: ReviewStorageModel[] = storage ? JSON.parse(storage) : [];

    return response;
}

async function getOtherUsers(userName: string): Promise<ReviewStorageModel[]> {
    const storage = await useAsyncStorage(REVIEWS_STORAGE_KEY).getItem();

    const response: ReviewStorageModel[] = storage ? JSON.parse(storage) : [];

    return response.filter(review =>
        review.nomeUser.toLowerCase() !== userName.toLowerCase()
    );
}

async function getUser(userName: string): Promise<ReviewStorageModel[]> {
    const storage = await useAsyncStorage(REVIEWS_STORAGE_KEY).getItem();

    const response: ReviewStorageModel[] = storage ? JSON.parse(storage) : [];

    return response.filter(review =>
        review.nomeUser.toLowerCase() === userName.toLowerCase()
    );
}

async function save(link: ReviewStorageModel) {
    try {
        const storage = await get();
        const updated = [...storage, link];

        await useAsyncStorage(REVIEWS_STORAGE_KEY).setItem(JSON.stringify(updated));
    }
    catch (error) {
        throw error;
    }
}

export const reviewService = { get, getOtherUsers, getUser, save };