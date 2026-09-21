import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { getFitnessResult } from "../../../api/fitnessResult";

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

    const [isLoading, setIsLoading] =
        useState(!location.state?.results);

    const [error, setError] = useState("");

    useEffect(() => {
        // 이전 페이지에서 결과를 받아왔다면
        // API를 다시 호출하지 않아도 됨
        if (location.state?.results) {
            return;
        }

        const fetchFitnessResult = async () => {
            try {
                setIsLoading(true);
                setError("");

                const response =
                    await getFitnessResult();

                setResults(
                    API_TO_RESULT(response.data)
                );
            } catch (error) {
                console.error(
                    "체력 결과 조회 실패:",
                    error.response?.data
                );

                setError(
                    error.response?.data?.message ||
                    "체력 결과를 불러오지 못했습니다."
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchFitnessResult();
    }, [location.state]);

    const weakestCategory = useMemo(() => {
        if (!results) {
            return null;
        }

        return Object.entries(results).reduce(
            (currentWeakest, current) =>
                current[1] >
                    currentWeakest[1]
                    ? current
                    : currentWeakest
        )[0];
    }, [results]);

    return {
        results,
        weakestCategory,
        isLoading,
        error,
    };
}

export default useFitnessResultRecommend;