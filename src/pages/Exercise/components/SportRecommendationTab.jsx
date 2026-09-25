import { useNavigate } from "react-router-dom";

import InfoBanner from "../../../components/common/InfoBanner";

import bannerMascot from "../../../assets/images/fitness-recommend.png";

import {
    getExerciseImage,
    SPORT_ROUTE,
} from "../data/sportRecommendData";

import * as S from "./SportRecommendationTab.styled";

export default function SportRecommendationTab({
    weakestCategory,
    recommendations,
    isLoading,
    error,
}) {
    const navigate = useNavigate();

    const handleExerciseClick = (
        recommendation
    ) => {
        const routeId =
            SPORT_ROUTE[
            recommendation.sportCode
            ];

        if (!routeId) {
            console.warn(
                "운동 상세 페이지 경로가 없습니다:",
                recommendation.sportCode
            );

            return;
        }

        navigate(`/exercise/${routeId}`);
    };

    if (isLoading) {
        return (
            <S.StateText>
                추천 운동을 불러오는 중이에요.
            </S.StateText>
        );
    }

    if (error) {
        return (
            <S.StateText>
                {error}
            </S.StateText>
        );
    }

    if (!recommendations?.length) {
        return (
            <S.StateText>
                추천할 수 있는 운동이 없습니다.
            </S.StateText>
        );
    }

    return (
        <>
            <S.Intro>
                <S.IntroTitle>
                    체력에 맞는 운동을 골라봤어요
                </S.IntroTitle>

                <S.IntroDescription>
                    각 운동으로 보완할 수 있는 체력 요소를 확인해보세요.
                </S.IntroDescription>
            </S.Intro>

            <S.ExerciseList>
                {recommendations.map(
                    (recommendation) => {
                        const sportName =
                            recommendation.adaptedSportName ||
                            recommendation.sportName;

                        const image =
                            getExerciseImage(
                                recommendation.sportCode
                            );

                        return (
                            <S.ExerciseCard
                                key={
                                    recommendation.sportCode
                                }
                                type="button"
                                onClick={() =>
                                    handleExerciseClick(
                                        recommendation
                                    )
                                }
                            >
                                <S.CardLeft>
                                    <S.ExerciseImage
                                        src={image}
                                        alt={sportName}
                                    />

                                    <S.ExerciseInfo>
                                        <S.ExerciseName>
                                            {sportName}
                                        </S.ExerciseName>

                                        <S.FitnessChipList>
                                            {recommendation.targetFitnessAreas?.map(
                                                (area) => (
                                                    <S.FitnessChip key={area}>
                                                        {area}
                                                    </S.FitnessChip>
                                                )
                                            )}
                                        </S.FitnessChipList>
                                    </S.ExerciseInfo>
                                </S.CardLeft>

                                <S.Arrow />
                            </S.ExerciseCard>
                        );
                    }
                )}
            </S.ExerciseList>

            <S.BannerArea>
                <InfoBanner
                    image={bannerMascot}
                >
                    지금, 나에게 딱 맞는 운동으로
                    <br />
                    건강한 변화를 시작해보세요!
                </InfoBanner>
            </S.BannerArea>
        </>
    );
}