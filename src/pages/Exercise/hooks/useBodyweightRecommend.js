import { useEffect, useState } from "react";

import { getBodyweightRecommendations } from "../../../api/fitnessResult";

export default function useBodyweightRecommend() {
    const [
        bodyweightResult,
        setBodyweightResult,
    ] = useState(null);

    const [isLoading, setIsLoading] =
        useState(true);

    const [error, setError] =
        useState(null);

    useEffect(() => {
        const fetchBodyweightRecommendations =
            async () => {
                try {
                    setIsLoading(true);
                    setError(null);

                    const response =
                        await getBodyweightRecommendations();

                    if (!response?.success) {
                        throw new Error(
                            response?.message ||
                                "맨몸 운동 추천 조회에 실패했습니다."
                        );
                    }

                    setBodyweightResult(
                        response.data
                    );
                } catch (err) {
                    console.error(
                        "맨몸 운동 추천 조회 실패:",
                        err
                    );

                    setError(
                        err.response?.data?.message ||
                            err.message ||
                            "맨몸 운동 추천을 불러오지 못했습니다."
                    );
                } finally {
                    setIsLoading(false);
                }
            };

        fetchBodyweightRecommendations();
    }, []);

    return {
        bodyweightResult,
        isLoading,
        error,
    };
}