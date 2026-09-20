import { useNavigate, useParams } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import Header from "../../components/common/Header";

import NearbyFacilityCard from "./components/NearbyFacilityCard";
import {
    EXERCISE_DETAIL_COMMON,
    EXERCISE_DETAIL_DATA,
} from "./data/exerciseDetailData";

import * as S from "./ExerciseDetailPage.styled";

function ExerciseDetailPage() {
    const navigate = useNavigate();
    const { exerciseId } = useParams();

    const exercise =
        EXERCISE_DETAIL_DATA[exerciseId] ??
        EXERCISE_DETAIL_DATA["wheelchair-badminton"];

    const handleFacilityClick = (facility) => {
        navigate(`/facility-detail/${facility.id}`);
    };

    return (
        <MobileLayout>
            <S.Container>
                <Header title={exercise.name} />

                <S.Content>
                    <S.Tags>
                        {exercise.tags.map((tag) => (
                            <S.Tag key={tag}>
                                {tag}
                            </S.Tag>
                        ))}
                    </S.Tags>

                    <S.Intro>
                        <S.IntroTitle>
                            {EXERCISE_DETAIL_COMMON.title}
                        </S.IntroTitle>

                        <S.IntroDescription>
                            {EXERCISE_DETAIL_COMMON.description}
                        </S.IntroDescription>
                    </S.Intro>

                    <S.FacilityList>
                        {exercise.facilities.map(
                            (facility) => (
                                <NearbyFacilityCard
                                    key={facility.id}
                                    facility={facility}
                                    onClick={
                                        handleFacilityClick
                                    }
                                />
                            )
                        )}
                    </S.FacilityList>
                </S.Content>
            </S.Container>
        </MobileLayout>
    );
}

export default ExerciseDetailPage;