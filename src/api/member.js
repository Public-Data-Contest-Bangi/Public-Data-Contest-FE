import client from "./client";

const MEMBER_URL =
    "/api/members/me";

// 회원정보 조회
export const getMyProfile =
    async () => {
        const response =
            await client.get(
                MEMBER_URL
            );

        return response.data;
    };

// 회원정보 수정
export const updateMyProfile =
    async (data) => {
        const response =
            await client.patch(
                MEMBER_URL,
                data
            );

        return response.data;
    };