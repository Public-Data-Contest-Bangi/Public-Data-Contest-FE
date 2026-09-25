import client from "./client";

// 즐겨찾기 시설 목록 조회
export const getFavoriteFacilities = async ({
    latitude,
    longitude,
    page = 0,
    size = 20,
} = {}) => {
    const params = {
        page,
        size,
    };

    // 위도/경도는 둘 다 있을 때만 전달
    if (
        latitude !== undefined &&
        longitude !== undefined
    ) {
        params.latitude = latitude;
        params.longitude = longitude;
    }

    const response = await client.get(
        "/api/favorites/facilities",
        {
            params,
        }
    );

    return response.data;
};

// 시설 즐겨찾기 등록
export const addFavoriteFacility = async (
    facilityId
) => {
    const response = await client.post(
        `/api/favorites/facilities/${facilityId}`
    );

    return response.data;
};

// 시설 즐겨찾기 해제
export const removeFavoriteFacility = async (
    facilityId
) => {
    const response = await client.delete(
        `/api/favorites/facilities/${facilityId}`
    );

    return response.data;
};