import client from "./client";

const MY_CONDITION_URL =
    "/api/members/me/conditions";

// 내 조건 조회
export const getMyCondition = async () => {
    const response = await client.get(
        MY_CONDITION_URL
    );

    return response.data;
};

// 내 조건 최초 저장
export const saveMyCondition = async (data) => {
    const response = await client.post(
        MY_CONDITION_URL,
        data
    );

    return response.data;
};

// 내 조건 수정
export const updateMyCondition = async (data) => {
    const response = await client.patch(
        MY_CONDITION_URL,
        data
    );

    return response.data;
};