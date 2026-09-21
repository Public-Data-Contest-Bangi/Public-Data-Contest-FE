import client from "./client";

const FITNESS_RESULT_URL =
    "/api/members/me/fitness-result";

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