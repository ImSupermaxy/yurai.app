import reviews from "@/assets/data/reviews/reviews-teste.json"

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

// const REVIEWS_STORAGE_KEY = "review-teste";
// async function get(): Promise<ReviewStorageModel[]> {
//     try {
//         console.log("service:");
//         const storage = await jsonService.get<ReviewStorageModel[]>(REVIEWS_STORAGE_KEY, "reviews");
//         console.log(storage);
//         if (storage === undefined)
//             return [];

//         return storage;
//     }
//     catch (error) {
//         throw error;
//     }
// }

// async function getOtherUsers(userName: string): Promise<ReviewStorageModel[]> {
//     const storage = await get();

//     return storage.filter(review =>
//         review.nomeUser.toLowerCase() !== userName.toLowerCase()
//     );
// }

// async function getUser(userName: string): Promise<ReviewStorageModel[]> {
//     const storage = await get();

//     return storage.filter(review =>
//         review.nomeUser.toLowerCase() === userName.toLowerCase()
//     );
// }

function get(): ReviewStorageModel[] {
    try {
        const storage: ReviewStorageModel[] = reviews as ReviewStorageModel[];

        if (storage === undefined)
            return [];

        return storage;
    }
    catch (error) {
        throw error;
    }
}

function getOtherUsers(userName: string): ReviewStorageModel[] {
    const storage = get();

    return storage.filter(review =>
        review.nomeUser.toLowerCase() !== userName.toLowerCase()
    );
}

function getUser(userName: string): ReviewStorageModel[] {
    const storage = get();

    return storage.filter(review =>
        review.nomeUser.toLowerCase() === userName.toLowerCase()
    );
}

export const reviewService = { get, getOtherUsers, getUser };