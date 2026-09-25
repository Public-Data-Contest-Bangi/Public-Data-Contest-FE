import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import {
    getFitnessResult,
    getFitnessRecommendations,
} from "../../../api/fitnessResult";

const API_TO_RESULT = (data) => ({
    근력: data.muscleStrengthGrade,
    근지구력: data.muscleEnduranceGrade,
    심폐지구력: data.cardioEnduranceGrade,
    유연성: data.flexibilityGrade,
    민첩성: data.agilityGrade,
    순발력: data.powerGrade,
});

function useFitnessResultRecommend() {
    const location = useLocation();

    const [results, setResults] = useState(
        location.state?.results || null
    );

    const [recommendations, setRecommendations] =
        useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError("");

                // 체력 결과
                if (location.state?.results) {
                    setResults(location.state.results);
                } else {
                    const fitnessResponse =
                        await getFitnessResult();

                    console.log(
                        "체력 결과 응답:",
                        fitnessResponse
                    );

                    setResults(
                        API_TO_RESULT(
                            fitnessResponse.data
                        )
                    );
                }

                // 추천 운동
                const recommendationResponse =
                    await getFitnessRecommendations();

                console.log(
                    "운동 추천 응답:",
                    recommendationResponse
                );

                setRecommendations(
                    recommendationResponse.data
                        ?.recommendations ?? []
                );
            } catch (error) {
                console.error(
                    "체력 추천 조회 실패:",
                    error
                );

                console.error(
                    "서버 응답:",
                    error.response?.data
                );

                setError(
                    error.response?.data?.message ||
                        "추천 운동을 불러오지 못했습니다."
                );

                setRecommendations([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [location.state]);

    const weakestCategory = useMemo(() => {
        if (!results) {
            return null;
        }

        return Object.entries(results).reduce(
            (currentWeakest, current) =>
                current[1] > currentWeakest[1]
                    ? current
                    : currentWeakest
        )[0];
    }, [results]);

    return {
        results,
        weakestCategory,
        recommendations,
        isLoading,
        error,
    };
}

export default useFitnessResultRecommend;