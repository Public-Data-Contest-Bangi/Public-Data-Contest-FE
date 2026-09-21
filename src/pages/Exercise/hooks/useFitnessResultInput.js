import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    getFitnessResult,
    saveFitnessResult,
    updateFitnessResult,
} from "../../../api/fitnessResult";

const INITIAL_RESULT = {
    근력: 2,
    근지구력: 1,
    심폐지구력: 3,
    유연성: 2,
    민첩성: 2,
    순발력: 1,
};

function useFitnessResultInput() {
    const navigate = useNavigate();

    const [results, setResults] =
        useState(INITIAL_RESULT);

    const [hasSavedResult, setHasSavedResult] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    useEffect(() => {
        const fetchExistingResult = async () => {
            try {
                const response =
                    await getFitnessResult();

                const data = response.data;

                setResults({
                    근력:
                        data.muscleStrengthGrade,
                    근지구력:
                        data.muscleEnduranceGrade,
                    심폐지구력:
                        data.cardioEnduranceGrade,
                    유연성:
                        data.flexibilityGrade,
                    민첩성:
                        data.agilityGrade,
                    순발력:
                        data.powerGrade,
                });

                setHasSavedResult(true);
            } catch (error) {
                // 저장된 체력결과가 없는 경우에만 최초 저장 상태
                if (
                    error.response?.status === 404
                ) {
                    setHasSavedResult(false);
                    return;
                }

                console.error(
                    "체력 결과 조회 실패:",
                    error.response?.data
                );
            }
        };

        fetchExistingResult();
    }, []);

    const handleSelect = (
        category,
        grade
    ) => {
        setResults((prev) => ({
            ...prev,
            [category]: grade,
        }));
    };

    const handleSubmit = async () => {
        if (isSubmitting) {
            return;
        }

        const requestData = {
            muscleStrengthGrade:
                results["근력"],

            muscleEnduranceGrade:
                results["근지구력"],

            cardioEnduranceGrade:
                results["심폐지구력"],

            flexibilityGrade:
                results["유연성"],

            agilityGrade:
                results["민첩성"],

            powerGrade:
                results["순발력"],
        };

        try {
            setIsSubmitting(true);

            if (hasSavedResult) {
                await updateFitnessResult(
                    requestData
                );

                console.log(
                    "체력 결과 수정 성공"
                );
            } else {
                await saveFitnessResult(
                    requestData
                );

                console.log(
                    "체력 결과 최초 저장 성공"
                );
            }

            navigate(
                "/fitness-result/recommend",
                {
                    state: {
                        results,
                    },
                }
            );
        } catch (error) {
            console.error(
                "체력 결과 저장 실패:",
                error.response?.data
            );

            console.error(
                "상태 코드:",
                error.response?.status
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        results,
        isSubmitting,

        handleSelect,
        handleSubmit,
    };
}

export default useFitnessResultInput;