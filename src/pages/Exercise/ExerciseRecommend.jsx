import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ExerciseRecommend.styled";
import Button from "../../components/common/Button";

import firstExerciseImg from "../../assets/images/first-exercise.png";
import fitnessExerciseImg from "../../assets/images/fitness-exercise.png";

function ExerciseRecommend() {
    const navigate = useNavigate();

    const [selected, setSelected] = useState("");

    const handleSelect = () => {
        if (!selected) {
            return;
        }

        if (selected === "first") {
            navigate("/first-exercise");
            return;
        }

        if (selected === "fitness") {
            navigate("/fitness-result");
        }
    };

    return (
        <S.Page>
            <S.Container>
                <S.Header>
                    <S.BackButton
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        ‹
                    </S.BackButton>

                    <S.Title>
                        운동 추천
                    </S.Title>
                </S.Header>

                <S.Content>
                    <S.OptionCard
                        type="button"
                        $selected={selected === "first"}
                        onClick={() =>
                            setSelected("first")
                        }
                    >
                        <S.CardText>
                            <S.CardTitle>
                                첫 운동 발견하기
                            </S.CardTitle>

                            <S.CardDescription>
                                입력한 조건을 기반으로
                                <br />
                                알맞은 운동을 추천해요
                            </S.CardDescription>
                        </S.CardText>

                        <S.CardImage
                            src={firstExerciseImg}
                            alt="첫 운동 발견하기"
                        />
                    </S.OptionCard>

                    <S.OptionCard
                        type="button"
                        $selected={selected === "fitness"}
                        onClick={() =>
                            setSelected("fitness")
                        }
                    >
                        <S.CardText>
                            <S.CardTitle>
                                체력 결과로 운동 찾기
                            </S.CardTitle>

                            <S.CardDescription>
                                국민체력100 체력측정 결과를 입력하고
                                <br />
                                생활체육 종목을 탐색해요
                            </S.CardDescription>
                        </S.CardText>

                        <S.CardImage
                            src={fitnessExerciseImg}
                            alt="체력 결과로 운동 찾기"
                        />
                    </S.OptionCard>
                </S.Content>

                <S.ButtonArea>
                    <Button
                        disabled={!selected}
                        onClick={handleSelect}
                    >
                        선택하기
                    </Button>
                </S.ButtonArea>
            </S.Container>
        </S.Page>
    );
}

export default ExerciseRecommend;