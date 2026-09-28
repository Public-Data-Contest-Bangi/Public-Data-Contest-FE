import client from "./client";

// 최근 저장된 첫 운동 입력값 조회
export const getFirstExercisePreferences = ({ signal } = {}) =>
    client.get("/api/first-exercise/preferences", {
        signal,
    });

// 첫 운동 입력값 저장 / 수정
export const updateFirstExercisePreferences = (
    data,
    { signal } = {}
) =>
    client.patch(
        "/api/first-exercise/preferences",
        data,
        {
            signal,
        }
    );

// 조건 기반 첫 운동 종목 추천
export const getFirstExerciseRecommendations = (
    { signal } = {}
) =>
    client.get(
        "/api/first-exercise/recommendations",
        {
            signal,
        }
    );