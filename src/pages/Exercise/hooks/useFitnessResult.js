import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    saveFitnessResult,
    getFitnessResult,
} from "../../../api/fitnessResult";

function useFitnessResult() {
    const navigate = useNavigate();

    const [grades, setGrades] = useState({
        muscleStrengthGrade: "",
        muscleEnduranceGrade: "",
        cardioEnduranceGrade: "",
        flexibilityGrade: "",
        agilityGrade: "",
        powerGrade: "",
    });

    const [isLoading, setIsLoading] =
        useState(false);

    const handleGradeChange = (
        name,
        value
    ) => {
        setGrades((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);

            const response =
                await saveFitnessResult(
                    grades
                );

            console.log(
                "체력결과 저장 성공:",
                response
            );

            navigate(
                "/fitness-result/recommend"
            );
        } catch (error) {
            console.error(
                "체력결과 저장 실패:",
                error.response?.data
            );

            console.error(
                "상태 코드:",
                error.response?.status
            );
        } finally {
            setIsLoading(false);
        }
    };

    const fetchFitnessResult =
        async () => {
            try {
                setIsLoading(true);

                const response =
                    await getFitnessResult();

                setGrades(response.data);

                return response.data;
            } catch (error) {
                console.error(
                    "체력결과 조회 실패:",
                    error.response?.data
                );

                return null;
            } finally {
                setIsLoading(false);
            }
        };

    return {
        grades,
        isLoading,

        handleGradeChange,
        handleSubmit,
        fetchFitnessResult,
    };
}

export default useFitnessResult;