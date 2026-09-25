import BodyweightExerciseCard from "./BodyweightExerciseCard";

import * as S from "./BodyweightRecommendationTab.styled";

export default function BodyweightRecommendationTab({
    bodyweightResult,
    isLoading,
    error,
}) {
    if (isLoading) {
        return (
            <S.StateText>
                맞춤 맨몸 운동을 불러오는 중이에요.
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

    const recommendations =
        bodyweightResult?.recommendations ??
        [];

    if (!recommendations.length) {
        return (
            <S.StateText>
                추천할 수 있는 맨몸 운동이 없어요.
            </S.StateText>
        );
    }

    return (
        <>
            <S.Intro>
                <S.IntroTitle>
                    체력 맞춤 맨몸 운동
                </S.IntroTitle>

                <S.IntroDescription>
                    현재 체력 결과를 바탕으로 추천했어요.
                </S.IntroDescription>
            </S.Intro>

            {bodyweightResult?.notice && (
                <S.NoticeBox>
                    <S.NoticeIcon>
                        !
                    </S.NoticeIcon>

                    <S.NoticeText>
                        {
                            bodyweightResult.notice
                        }
                    </S.NoticeText>
                </S.NoticeBox>
            )}

            <S.List>
                {recommendations.map(
                    (
                        exercise,
                        index
                    ) => (
                        <BodyweightExerciseCard
                            key={
                                exercise.exerciseCode
                            }
                            exercise={
                                exercise
                            }
                            index={index}
                        />
                    )
                )}
            </S.List>
        </>
    );
}