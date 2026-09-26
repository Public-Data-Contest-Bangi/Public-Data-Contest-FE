import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useExerciseRecommend() {
    const navigate = useNavigate();

    const [
        isFitnessModalOpen,
        setIsFitnessModalOpen,
    ] = useState(false);

    const handleFirstExerciseClick = () => {
        navigate("/first-exercise");
    };

    const handleFitnessClick = () => {
        setIsFitnessModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsFitnessModalOpen(false);
    };

    const handleConfirmFitness = () => {
        setIsFitnessModalOpen(false);

        navigate("/fitness-result/input");
    };

    const handleBack = () => {
        navigate(-1);
    };

    return {
        isFitnessModalOpen,

        handleBack,
        handleFirstExerciseClick,
        handleFitnessClick,
        handleCloseModal,
        handleConfirmFitness,
    };
}

export default useExerciseRecommend;