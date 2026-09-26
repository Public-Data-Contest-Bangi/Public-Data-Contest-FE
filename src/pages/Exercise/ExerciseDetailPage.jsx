import {
    useNavigate,
} from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import Header from "../../components/common/Header";

import NearbyFacilityCard from "./components/NearbyFacilityCard";

import useExerciseDetail from "./hooks/useExerciseDetail";

import * as S from "./ExerciseDetailPage.styled";

function ExerciseDetailPage() {
    const navigate =
        useNavigate();

    const {
        exercise,
        tags,
        facilities,
        isLoading,
        error,
    } = useExerciseDetail();

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
                        "운동 상세"
                    }
                />

                <S.Content>
                    {tags.length > 0 && (
                        <S.Tags>
                            {tags.map(
                                (tag) => (
                                    <S.Tag
                                        key={
                                            tag
                                        }
                                    >
                                        {
                                            tag
                                        }
                                    </S.Tag>
                                )
                            )}
                        </S.Tags>
                    )}

                    <S.Intro>
                        <S.IntroTitle>
                            처음이라면
                            {"\n"}
                            기초부터 시작해요
                        </S.IntroTitle>

                        <S.IntroDescription>
                            {exercise?.supportGuide ||
                                "가까운 체험 가능 시설을 알려드릴게요."}
                        </S.IntroDescription>
                    </S.Intro>

                    {isLoading ? (
                        <S.StateText>
                            가까운 시설을
                            찾고 있어요.
                        </S.StateText>
                    ) : error ? (
                        <S.StateText>
                            {error}
                        </S.StateText>
                    ) : facilities.length ===
                      0 ? (
                        <S.StateText>
                            주변에 이용 가능한
                            시설이 없어요.
                        </S.StateText>
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
                </S.Content>
            </S.Container>
        </MobileLayout>
    );
}

export default ExerciseDetailPage;