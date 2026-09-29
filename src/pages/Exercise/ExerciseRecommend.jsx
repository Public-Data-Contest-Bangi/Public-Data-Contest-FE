import firstExerciseImg from "../../assets/images/first-exercise.png";
import fitnessExerciseImg from "../../assets/images/fitness-exercise.png";

import BottomNav from "../../components/BottomNav";
import Header from "../../components/common/Header";

import ExerciseRecommendCard from "./components/ExerciseRecommendCard";
import FitnessResultGuideModal from "./components/FitnessResultGuideModal";

import useExerciseRecommend from "./hooks/useExerciseRecommend";

import * as S from "./ExerciseRecommend.styled";

function ExerciseRecommend() {
    const {
        isFitnessModalOpen,

        handleBack,
        handleFirstExerciseClick,
        handleFitnessClick,
        handleCloseModal,
        handleConfirmFitness,
    } = useExerciseRecommend();

    return (
        <S.Page>
            <S.Container>
                <Header
                    title="운동 추천"
                    onBack={handleBack}
                />

                <S.Content>
                    <ExerciseRecommendCard
                        title="첫 운동 발견하기"
                        description={
                            <>
                                입력한 조건을 기반으로
                                <br />
                                알맞은 운동을 추천해요
                            </>
                        }
                        image={firstExerciseImg}
                        imageAlt="첫 운동 발견하기"
                        onClick={
                            handleFirstExerciseClick
                        }
                    />

                    <ExerciseRecommendCard
                        title="체력 결과로 운동 찾기"
                        description={
                            <>
                                국민체력100 체력측정 결과를
                                입력하고
                                <br />
                                생활체육 종목을 탐색해요
                            </>
                        }
                        image={fitnessExerciseImg}
                        imageAlt="체력 결과로 운동 찾기"
                        onClick={
                            handleFitnessClick
                        }
                    />
                </S.Content>

                <BottomNav />

                {isFitnessModalOpen && (
                    <FitnessResultGuideModal
                        onClose={
                            handleCloseModal
                        }
                        onConfirm={
                            handleConfirmFitness
                        }
                    />
                )}
            </S.Container>
        </S.Page>
    );
}

export default ExerciseRecommend;