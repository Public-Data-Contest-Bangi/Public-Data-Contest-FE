import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FirstExerciseCharacter from "../../assets/images/firstexercise-character.png";
import Button from "../../components/common/Button";

import * as S from "./FirstExercise.styled";

function FirstExercise() {
    const navigate = useNavigate();

    const [assistiveDevice, setAssistiveDevice] = useState("");
    const [bodyPart, setBodyPart] = useState("");

    const [exerciseTypes, setExerciseTypes] = useState([]);
    const [days, setDays] = useState([]);
    const [times, setTimes] = useState([]);
    const [conditions, setConditions] = useState([]);

    const toggleValue = (value, setter) => {
        setter((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = () => {
        const data = {
            assistiveDevice,
            bodyPart,
            exerciseTypes,
            days,
            times,
            conditions,
        };

        console.log("첫 운동 찾기 입력값:", data);

        navigate("/exercise-result", {
            state: data,
        });
    };

    return (
        <S.Page>
            <S.Container>
                <S.Header>
                    <S.BackButton onClick={() => navigate(-1)}>
                        ‹
                    </S.BackButton>

                    <S.Title>첫 운동 발견하기</S.Title>
                </S.Header>

                <S.Banner>
                    <S.BannerText>
                        <S.BannerTitle>
                            나에게 맞는
                            <br />
                            운동을 찾아볼까요?
                        </S.BannerTitle>

                        <S.BannerDescription>
                            간단한 질문을 통해
                            <br />
                            취향에 맞는 운동을 추천해드려요!
                        </S.BannerDescription>
                    </S.BannerText>

                    <S.BannerImage
                        src={FirstExerciseCharacter}
                        alt="운동 추천 캐릭터"
                    />
                </S.Banner>

                {/* 1 */}
                <S.QuestionSection>
                    <S.QuestionHeader>
                        <S.Number>1</S.Number>
                        <S.Question>
                            이동에 보조기구를 사용하나요?
                        </S.Question>
                    </S.QuestionHeader>

                    <S.Select
                        value={assistiveDevice}
                        onChange={(e) =>
                            setAssistiveDevice(e.target.value)
                        }
                    >
                        <option value="" disabled>
                            선택해주세요
                        </option>
                        <option value="wheelchair">
                            휠체어 사용
                        </option>
                        <option value="assistive">
                            보조기구 사용
                        </option>
                        <option value="none">
                            해당사항 없음
                        </option>
                    </S.Select>
                </S.QuestionSection>

                {/* 2 */}
                <S.QuestionSection>
                    <S.QuestionHeader>
                        <S.Number>2</S.Number>
                        <S.Question>
                            운동하고 싶은 부위가 있나요?
                        </S.Question>
                    </S.QuestionHeader>

                    <S.Select
                        value={bodyPart}
                        onChange={(e) =>
                            setBodyPart(e.target.value)
                        }
                    >
                        <option value="" disabled>
                            선택해주세요
                        </option>
                        <option value="all">상관 없음</option>
                        <option value="upper">상체 중심</option>
                        <option value="lower">하체 중심</option>
                    </S.Select>
                </S.QuestionSection>

                {/* 3 */}
                <S.QuestionSection>
                    <S.QuestionHeader>
                        <S.Number>3</S.Number>
                        <S.Question>
                            선호하는 운동의 종류가 있나요?
                        </S.Question>
                    </S.QuestionHeader>

                    <S.CheckGrid>
                        {[
                            "실내",
                            "실외",
                            "개인",
                            "단체",
                            "경쟁 스포츠",
                            "비경쟁 스포츠",
                        ].map((item) => (
                            <S.CheckItem
                                key={item}
                                $selected={exerciseTypes.includes(item)}
                                onClick={() =>
                                    toggleValue(
                                        item,
                                        setExerciseTypes
                                    )
                                }
                            >
                                <S.CheckBox
                                    $selected={exerciseTypes.includes(item)}
                                >
                                    {exerciseTypes.includes(item) && "✓"}
                                </S.CheckBox>

                                {item}
                            </S.CheckItem>
                        ))}
                    </S.CheckGrid>
                </S.QuestionSection>

                <Button
                    variant="primary"
                    onClick={handleSubmit}
                >
                    첫 운동 찾기
                </Button>
            </S.Container>
        </S.Page>
    );
}

export default FirstExercise;