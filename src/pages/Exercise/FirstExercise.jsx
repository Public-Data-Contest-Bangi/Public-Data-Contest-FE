import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FirstExerciseCharacter from "../../assets/images/firstexercise-character.png";
import Button from "../../components/common/Button";

import * as S from "./FirstExercise.styled";

const EXERCISE_TYPE_OPTIONS = [
    "실내",
    "실외",
    "개인",
    "단체",
    "경쟁 스포츠",
    "비경쟁 스포츠",
];

function FirstExercise() {
    const navigate = useNavigate();

    const [assistiveDevice, setAssistiveDevice] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [exerciseTypes, setExerciseTypes] = useState([]);

    const toggleExerciseType = (value) => {
        setExerciseTypes((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const isAllSelected =
        exerciseTypes.length === EXERCISE_TYPE_OPTIONS.length;

    const handleToggleAll = () => {
        if (isAllSelected) {
            setExerciseTypes([]);
            return;
        }

        setExerciseTypes(EXERCISE_TYPE_OPTIONS);
    };

    const handleSubmit = () => {
        if (exerciseTypes.length === 0) {
            alert("선호하는 운동 종류를 최소 한 개 이상 선택해주세요.");
            return;
        }

        const data = {
            assistiveDevice,
            bodyPart,
            exerciseTypes,
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

                {/* 1. 보조기구 */}
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

                {/* 2. 운동 부위 */}
                <S.QuestionSection>
                    <S.QuestionHeader>
                        <S.Number>2</S.Number>

                        <S.Question>
                            집중해서 운동하고 싶은 부위가 있나요?
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

                        <option value="whole">
                            전신
                        </option>

                        <option value="upper">
                            상체 중심
                        </option>

                        <option value="lower">
                            하체 중심
                        </option>

                        <option value="all">
                            상관 없음
                        </option>
                    </S.Select>
                </S.QuestionSection>

                {/* 3. 운동 종류 */}
                <S.QuestionSection>
                    <S.QuestionHeader>
                        <S.Number>3</S.Number>

                        <S.Question>
                            선호하는 운동의 종류가 있나요?
                        </S.Question>
                    </S.QuestionHeader>

                    <S.ExerciseTypeHeader>
                        <S.RequiredText>
                            최소 1개 이상 선택해주세요.
                        </S.RequiredText>

                        <S.SelectAllButton
                            type="button"
                            onClick={handleToggleAll}
                        >
                            {isAllSelected
                                ? "모두 해제"
                                : "모두 선택"}
                        </S.SelectAllButton>
                    </S.ExerciseTypeHeader>

                    <S.CheckGrid>
                        {EXERCISE_TYPE_OPTIONS.map((item) => {
                            const isSelected =
                                exerciseTypes.includes(item);

                            return (
                                <S.CheckItem
                                    type="button"
                                    key={item}
                                    $selected={isSelected}
                                    onClick={() =>
                                        toggleExerciseType(item)
                                    }
                                >
                                    <S.CheckBox
                                        $selected={isSelected}
                                    >
                                        {isSelected && "✓"}
                                    </S.CheckBox>

                                    {item}
                                </S.CheckItem>
                            );
                        })}
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