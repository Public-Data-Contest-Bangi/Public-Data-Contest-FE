import {
    useLocation,
    useNavigate,
} from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import Header from "../../components/common/Header";
import BottomNav from "../../components/BottomNav";

import NearbyFacilityCard from "./components/NearbyFacilityCard";

import useExerciseDetail from "./hooks/useExerciseDetail";

import * as S from "./ExerciseDetailPage.styled";

function ExerciseDetailPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        exercise,
        tags,
        facilities,
        isLoading,
        error,
    } = useExerciseDetail();

    // 추천 결과 화면에서 넘겨준 특성
    // 새로고침 등으로 location.state가 없어질 경우
    // exercise에 포함된 값이 있다면 그것을 사용
    const exerciseCharacteristics =
        exercise?.exerciseCharacteristics ??
        location.state
            ?.exerciseCharacteristics ??
        [];

    const matchedTagSet = new Set(
        exerciseCharacteristics
            .filter(
                (characteristic) =>
                    characteristic.matched
            )
            .map(
                (characteristic) =>
                    characteristic.label
            )
    );

    const handleFacilityClick = (
        facility
    ) => {
        navigate(
            `/facility-detail/${facility.id}`
        );
    };

    return (
        <MobileLayout>
            <S.Container>
                <Header
                    title={
                        exercise?.sportName ??
                        location.state
                            ?.sportName ??
                        "운동 상세"
                    }
                />

                <S.Content>
                    {tags.length > 0 && (
                        <S.TagSection>
                            <S.Tags>
                                {tags.map(
                                    (tag) => {
                                        const matched =
                                            matchedTagSet.has(
                                                tag
                                            );

                                        return (
                                            <S.Tag
                                                key={
                                                    tag
                                                }
                                                $matched={
                                                    matched
                                                }
                                            >
                                                {
                                                    tag
                                                }
                                            </S.Tag>
                                        );
                                    }
                                )}
                            </S.Tags>

                            {matchedTagSet.size >
                                0 && (
                                    <S.MatchGuide>
                                        <S.MatchDot />

                                        <span>
                                            초록색은 내가
                                            선택한 조건과
                                            일치하는
                                            특성이에요.
                                        </span>
                                    </S.MatchGuide>
                                )}
                        </S.TagSection>
                    )}


                    <S.FacilitySection>
                        <S.FacilityHeader>
                            <div>
                                <S.FacilityTitle>
                                    가까운 체험 시설
                                </S.FacilityTitle>

                                <S.FacilityDescription>
                                    부담 없이 가까운
                                    곳부터 찾아보세요.
                                </S.FacilityDescription>
                            </div>

                            {!isLoading &&
                                !error &&
                                facilities.length >
                                0 && (
                                    <S.FacilityCount>
                                        {
                                            facilities.length
                                        }
                                        곳
                                    </S.FacilityCount>
                                )}
                        </S.FacilityHeader>

                        {isLoading ? (
                            <S.StateText>
                                가까운 시설을 찾고
                                있어요.
                            </S.StateText>
                        ) : error ? (
                            <S.StateText>
                                {error}
                            </S.StateText>
                        ) : facilities.length ===
                            0 ? (
                            <S.EmptyBox>
                                <S.EmptyTitle>
                                    주변 시설을 찾지
                                    못했어요.
                                </S.EmptyTitle>

                                <S.EmptyDescription>
                                    다른 운동이나
                                    지역의 시설도
                                    둘러보세요.
                                </S.EmptyDescription>
                            </S.EmptyBox>
                        ) : (
                            <S.FacilityList>
                                {facilities.map(
                                    (
                                        facility
                                    ) => (
                                        <NearbyFacilityCard
                                            key={
                                                facility.id
                                            }
                                            facility={
                                                facility
                                            }
                                            onClick={
                                                handleFacilityClick
                                            }
                                        />
                                    )
                                )}
                            </S.FacilityList>
                        )}
                    </S.FacilitySection>
                </S.Content>
                <BottomNav />
            </S.Container>
        </MobileLayout>
    );
}

export default ExerciseDetailPage;