import { useLocation } from "react-router-dom";

import BottomNav from "../../components/BottomNav";
import MobileLayout from "../../components/layout/MobileLayout";

import * as S from "./FitnessResultRecommend.styled";

import bannerMascot from "../../assets/images/fitness-recommend.png";
import InfoBanner from "../../components/common/InfoBanner";
import fitness from "../../assets/images/exercisename/fitness.png";
import swim from "../../assets/images/exercisename/swim.png";
import tabletennis from "../../assets/images/exercisename/table-tennis.png";
import yoga from "../../assets/images/exercisename/yoga.png";
import badminton from "../../assets/images/exercisename/badminton.png";
import jumpRope from "../../assets/images/exercisename/jump-rope.png";


const RECOMMEND_DATA = {
    근력: {
        exercise: "웨이트 트레이닝",
        image: fitness,
        description: "실내 근력활동 개인",
    },

    근지구력: {
        exercise: "수영",
        image: swim,
        description: "실내 전신활동 개인",
    },

    심폐지구력: {
        exercise: "탁구",
        image: tabletennis,
        description: "실내 상체활동 개인",
    },

    유연성: {
        exercise: "요가",
        image: yoga,
        description: "실내 유연성활동 개인",
    },

    민첩성: {
        exercise: "배드민턴",
        image: badminton,
        description: "실내 전신활동 개인",
    },

    순발력: {
        exercise: "줄넘기",
        image: jumpRope,
        description: "실내 전신활동 개인",
    },
};

function FitnessResultRecommend() {
    const location = useLocation();

    const results =
        location.state?.results;

    let weakestCategory = "심폐지구력";

    if (results) {
        weakestCategory =
            Object.entries(results).reduce(
                (
                    currentWeakest,
                    current
                ) => {
                    return current[1] >
                        currentWeakest[1]
                        ? current
                        : currentWeakest;
                }
            )[0];
    }

    const recommendation =
        RECOMMEND_DATA[weakestCategory];

    return (
        <MobileLayout>
            <S.Inner>
                <S.Content>
                    <S.Title>
                        추천 결과
                    </S.Title>

                    <S.ResultText>
                        <strong>
                            {weakestCategory}
                        </strong>{" "}
                        활동을
                        <br />
                        함께 경험해볼 수 있는
                        <br />
                        운동이에요
                    </S.ResultText>

                    <S.ExerciseCard>
                        <S.CardLeft>
                            <S.ExerciseImage
                                src={recommendation.image}
                                alt={recommendation.exercise}
                            />

                            <S.ExerciseInfo>
                                <S.ExerciseName>
                                    {recommendation.exercise}
                                </S.ExerciseName>

                                <S.ExerciseDescription>
                                    {recommendation.description}
                                </S.ExerciseDescription>
                            </S.ExerciseInfo>
                        </S.CardLeft>

                        <S.Arrow />
                    </S.ExerciseCard>
                </S.Content>

                <S.BannerArea>
                    <InfoBanner image={bannerMascot}>
                        지금, 나에게 딱 맞는 운동으로
                        <br />
                        건강한 변화를 시작해보세요!
                    </InfoBanner>
                </S.BannerArea>

                <BottomNav />
            </S.Inner>
        </MobileLayout>
    );
}

export default FitnessResultRecommend;
