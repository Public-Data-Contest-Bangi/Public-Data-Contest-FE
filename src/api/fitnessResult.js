import client from "./client";

const FITNESS_RESULT_URL =
    "/api/members/me/fitness-result";

const SPORTS_RECOMMEND_URL =
    "/api/fitness/recommendations/sports";

const BODYWEIGHT_RECOMMEND_URL =
    "/api/fitness/recommendations/bodyweight";

// 체력 등급 최초 저장
export const saveFitnessResult = async (data) => {
    const response = await client.post(
        FITNESS_RESULT_URL,
        data
    );

    return response.data;
};

// 체력 등급 수정
export const updateFitnessResult = async (data) => {
    const response = await client.patch(
        FITNESS_RESULT_URL,
        data
    );

    return response.data;
};

// 최근 체력 등급 조회
export const getFitnessResult = async () => {
    const response = await client.get(
        FITNESS_RESULT_URL
    );

    return response.data;
};

// 운동 종목 추천
export const getFitnessRecommendations = async () => {
    const response = await client.get(
        SPORTS_RECOMMEND_URL
    );

    return response.data;
};

// 맨몸 운동 추천
export const getBodyweightRecommendations = async () => {
    const response = await client.get(
        BODYWEIGHT_RECOMMEND_URL
    );

    return response.data;
};