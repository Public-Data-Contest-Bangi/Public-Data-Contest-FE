import {
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";

import RecommendResult from "../../assets/images/recommend-result.png";

import BottomNav from "../../components/BottomNav";

import {
    getFirstExerciseRecommendations,
} from "../../api/firstExercise";

import {
    getExerciseImage,
    SPORT_ROUTE_BY_ID,
} from "./data/sportRecommendData";

import * as S from "./ExerciseResult.styled";

const INITIAL_STATE = {
    recommendations: [],
    isLoading: true,
    isError: false,
};

function ExerciseResult() {
    const navigate = useNavigate();

    const [state, setState] =
        useState(INITIAL_STATE);

    useEffect(() => {
        const controller =
            new AbortController();

        const fetchRecommendations =
            async () => {
                try {
                    const {
                        data: response,
                    } =
                        await getFirstExerciseRecommendations(
                            {
                                signal:
                                    controller.signal,
                            }
                        );

                    if (
                        response?.success !==
                        true
                    ) {
                        throw new Error(
                            "추천 결과 조회 실패"
                        );
                    }

                    setState({
                        recommendations:
                            response?.data
                                ?.recommendations ??
                            [],
                        isLoading: false,
                        isError: false,
                    });
                } catch (error) {
                    if (
                        controller.signal
                            .aborted
                    ) {
                        return;
                    }

                    console.error(
                        "첫 운동 추천 조회 실패:",
                        error
                    );

                    setState({
                        recommendations: [],
                        isLoading: false,
                        isError: true,
                    });
                }
            };

        fetchRecommendations();

        return () => {
            controller.abort();
        };
    }, []);

    const {
        recommendations,
        isLoading,
        isError,
    } = state;

    const handleExerciseClick = (
        exercise
    ) => {
        const route =
            SPORT_ROUTE_BY_ID[
                exercise.sportId
            ];

        if (!route) {
            console.warn(
                "운동 상세 route가 없습니다:",
                exercise
            );
            return;
        }

        navigate(`/exercise/${route}`);
    };

    return (
        <S.Page>
            <S.Container>
                <S.Content>
                    <S.Title>
                        추천 결과
                    </S.Title>

                    <S.ResultBanner>
                        <S.BannerText>
                            <S.BannerBadge>
                                조건 기반 추천
                            </S.BannerBadge>

                            <S.BannerTitle>
                                나에게 맞는
                                <br />
                                첫 운동을 골라봤어요
                            </S.BannerTitle>

                            <S.BannerDescription>
                                등록한 조건과 선호를
                                반영한 추천이에요.
                            </S.BannerDescription>
                        </S.BannerText>

                        <S.BannerCharacter
                            src={RecommendResult}
                            alt="운동 추천 캐릭터"
                        />
                    </S.ResultBanner>

                    {!isLoading &&
                        !isError &&
                        recommendations.length >
                            0 && (
                            <S.MatchGuide>
                                <S.MatchDot />

                                <span>
                                    초록색은 내가 선택한
                                    조건과 일치하는
                                    특성이에요.
                                </span>
                            </S.MatchGuide>
                        )}

                    {isLoading ? (
                        <S.StatusText>
                            추천 운동을 불러오는
                            중이에요.
                        </S.StatusText>
                    ) : isError ? (
                        <S.StatusText>
                            추천 결과를
                            불러오지 못했어요.
                        </S.StatusText>
                    ) : recommendations.length ===
                      0 ? (
                        <S.StatusText>
                            추천 결과가 없어요.
                        </S.StatusText>
                    ) : (
                        <S.ExerciseList>
                            {recommendations.map(
                                (
                                    exercise
                                ) => (
                                    <S.ExerciseCard
                                        key={
                                            exercise.sportId
                                        }
                                        type="button"
                                        onClick={() =>
                                            handleExerciseClick(
                                                exercise
                                            )
                                        }
                                    >
                                        <S.ExerciseIcon
                                            src={getExerciseImage(
                                                exercise.sportId
                                            )}
                                            alt={`${exercise.sportName} 아이콘`}
                                        />

                                        <S.ExerciseInfo>
                                            <S.ExerciseName>
                                                {
                                                    exercise.sportName
                                                }
                                            </S.ExerciseName>

                                            <S.ExerciseCharacteristics>
                                                {exercise.exerciseCharacteristics?.map(
                                                    (
                                                        characteristic
                                                    ) => (
                                                        <S.Characteristic
                                                            key={
                                                                characteristic.code
                                                            }
                                                            $matched={
                                                                characteristic.matched
                                                            }
                                                        >
                                                            {
                                                                characteristic.label
                                                            }
                                                        </S.Characteristic>
                                                    )
                                                )}
                                            </S.ExerciseCharacteristics>
                                        </S.ExerciseInfo>

                                        <S.Arrow>
                                            ›
                                        </S.Arrow>
                                    </S.ExerciseCard>
                                )
                            )}
                        </S.ExerciseList>
                    )}

                    <S.MessageBox>
                        <S.MessageCharacter
                            src={
                                RecommendResult
                            }
                            alt=""
                        />

                        <S.MessageText>
                            <S.MessageTitle>
                                어떤 운동이 나와도 좋아요!
                            </S.MessageTitle>

                            <S.MessageDescription>
                                부담 없이 하나씩
                                시작해보세요.
                            </S.MessageDescription>
                        </S.MessageText>
                    </S.MessageBox>
                </S.Content>

                <BottomNav />
            </S.Container>
        </S.Page>
    );
}

export default ExerciseResult;