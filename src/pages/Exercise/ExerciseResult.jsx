import { useLocation, useNavigate } from "react-router-dom";

import RecommendResult from "../../assets/images/recommend-result.png";

import BadmintonIcon from "../../assets/images/exercisename/badminton.png";
import TableTennisIcon from "../../assets/images/exercisename/table-tennis.png";
import BocciaIcon from "../../assets/images/exercisename/boccia.png";

import BottomNav from "../../components/BottomNav";

import * as S from "./ExerciseResult.styled";

function ExerciseResult() {
    const location = useLocation();
    const navigate = useNavigate();

    // 앞 페이지에서 넘어온 선택 정보
    const formData = location.state;

    console.log("운동 추천 조건:", formData);

    const exercises = [
        {
            id: "wheelchair-badminton",
            icon: BadmintonIcon,
            name: "휠체어 배드민턴",
            description: "실내 상체활동",
        },
        {
            id: "table-tennis",
            icon: TableTennisIcon,
            name: "탁구",
            description: "실내 상체활동 개인",
        },
        {
            id: "boccia",
            icon: BocciaIcon,
            name: "보치아",
            description: "실내 비경쟁 단체",
        },
    ];

    const handleExerciseClick = (exerciseId) => {
        navigate(`/exercise/${exerciseId}`);
    };

    return (
        <S.Page>
            <S.Container>
                <S.Content>
                    <S.Title>추천 결과</S.Title>

                    <S.ResultBanner>
                        <S.BannerText>
                            <S.BannerTitle>
                                혜원님에게 맞는
                                <br />
                                첫 운동을 골라봤어요
                            </S.BannerTitle>

                            <S.BannerDescription>
                                등록한 조건과 선호를 반영했어요!
                            </S.BannerDescription>
                        </S.BannerText>

                        <S.BannerCharacter
                            src={RecommendResult}
                            alt="운동 추천 캐릭터"
                        />
                    </S.ResultBanner>

                    <S.ExerciseList>
                        {exercises.map((exercise) => (
                            <S.ExerciseCard
                                key={exercise.id}
                                type="button"
                                onClick={() =>
                                    handleExerciseClick(exercise.id)
                                }
                            >
                                <S.ExerciseIcon
                                    src={exercise.icon}
                                    alt={`${exercise.name} 아이콘`}
                                />

                                <S.ExerciseInfo>
                                    <S.ExerciseName>
                                        {exercise.name}
                                    </S.ExerciseName>

                                    <S.ExerciseDescription>
                                        {exercise.description}
                                    </S.ExerciseDescription>
                                </S.ExerciseInfo>

                                <S.Arrow>›</S.Arrow>
                            </S.ExerciseCard>
                        ))}
                    </S.ExerciseList>

                    <S.MessageBox>
                        <S.MessageCharacter
                            src={RecommendResult}
                            alt=""
                        />

                        <S.MessageText>
                            <S.MessageTitle>
                                어떤 운동이 나와도 좋아요!
                            </S.MessageTitle>

                            <S.MessageDescription>
                                지금은 가볍게 시작해보세요.
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
