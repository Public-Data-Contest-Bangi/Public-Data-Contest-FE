import {
    useEffect,
    useMemo,
    useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
    getFitnessResult,
    saveFitnessResult,
    updateFitnessResult,
} from "../../../api/fitnessResult";

const INITIAL_RESULT = {
    근력: null,
    근지구력: null,
    심폐지구력: null,
    유연성: null,
    민첩성: null,
    순발력: null,
};

function useFitnessResultInput() {
    const navigate = useNavigate();

    const [results, setResults] =
        useState(INITIAL_RESULT);

    const [
        hasSavedResult,
        setHasSavedResult,
    ] = useState(false);

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    const [
        isSubmitting,
        setIsSubmitting,
    ] = useState(false);

    useEffect(() => {
        const fetchExistingResult =
            async () => {
                try {
                    setIsLoading(true);

                    const response =
                        await getFitnessResult();

                    const data =
                        response.data;

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
                    // 최초 입력 사용자
                    if (
                        error.response
                            ?.status === 404
                    ) {
                        setResults(
                            INITIAL_RESULT
                        );

                        setHasSavedResult(
                            false
                        );

                        return;
                    }

                    console.error(
                        "체력 결과 조회 실패:",
                        error.response?.data
                    );
                } finally {
                    setIsLoading(false);
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

    const isComplete = useMemo(
        () =>
            Object.values(
                results
            ).every(
                (grade) =>
                    grade !== null
            ),
        [results]
    );

    const handleSubmit =
        async () => {
            if (
                isSubmitting ||
                !isComplete
            ) {
                return;
            }

            const requestData = {
                muscleStrengthGrade:
                    results["근력"],

                muscleEnduranceGrade:
                    results["근지구력"],

                cardioEnduranceGrade:
                    results[
                        "심폐지구력"
                    ],

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
        isLoading,
        isSubmitting,
        isComplete,

        handleSelect,
        handleSubmit,
    };
}

export default useFitnessResultInput;