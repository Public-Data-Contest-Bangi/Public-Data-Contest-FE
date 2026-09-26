import Button from "../../../components/common/Button";

import {
    EXERCISE_TYPE_OPTIONS,
} from "../data/firstExerciseData";

import * as S from "./FirstExerciseForm.styled";

function FirstExerciseForm({
    assistiveDevice,
    bodyPart,
    exerciseTypes,

    isLoading,
    isSubmitting,

    assistiveError,
    bodyPartError,
    exerciseTypeError,

    isAllSelected,

    setAssistiveDevice,
    setBodyPart,

    toggleExerciseType,
    handleToggleAll,
    handleSubmit,
}) {
    return (
        <>
            <S.QuestionSection>
                <S.QuestionHeader>
                    <S.Number>
                        1
                    </S.Number>

                    <S.Question>
                        이동에 보조기구를
                        사용하나요?
                    </S.Question>
                </S.QuestionHeader>

                <S.Select
                    value={
                        assistiveDevice
                    }
                    disabled={
                        isLoading
                    }
                    $error={
                        assistiveError
                    }
                    onChange={(e) =>
                        setAssistiveDevice(
                            e.target.value
                        )
                    }
                >
                    <option
                        value=""
                        disabled
                    >
                        {isLoading
                            ? "불러오는 중..."
                            : "선택해주세요"}
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

                {assistiveError && (
                    <S.ErrorText>
                        보조기구 사용 여부를
                        선택해주세요.
                    </S.ErrorText>
                )}
            </S.QuestionSection>

            <S.QuestionSection>
                <S.QuestionHeader>
                    <S.Number>
                        2
                    </S.Number>

                    <S.Question>
                        집중해서 운동하고
                        싶은 부위가 있나요?
                    </S.Question>
                </S.QuestionHeader>

                <S.Select
                    value={bodyPart}
                    disabled={
                        isLoading
                    }
                    $error={
                        bodyPartError
                    }
                    onChange={(e) =>
                        setBodyPart(
                            e.target.value
                        )
                    }
                >
                    <option
                        value=""
                        disabled
                    >
                        {isLoading
                            ? "불러오는 중..."
                            : "선택해주세요"}
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

                {bodyPartError && (
                    <S.ErrorText>
                        운동하고 싶은 부위를
                        선택해주세요.
                    </S.ErrorText>
                )}
            </S.QuestionSection>

            <S.QuestionSection>
                <S.QuestionHeader>
                    <S.Number>
                        3
                    </S.Number>

                    <S.Question>
                        선호하는 운동의
                        종류가 있나요?
                    </S.Question>
                </S.QuestionHeader>

                <S.ExerciseTypeHeader>
                    <S.RequiredText>
                        최소 1개 이상
                        선택해주세요.
                    </S.RequiredText>

                    <S.SelectAllButton
                        type="button"
                        disabled={
                            isLoading
                        }
                        onClick={
                            handleToggleAll
                        }
                    >
                        {isAllSelected
                            ? "모두 해제"
                            : "모두 선택"}
                    </S.SelectAllButton>
                </S.ExerciseTypeHeader>

                <S.CheckGrid>
                    {EXERCISE_TYPE_OPTIONS.map(
                        (item) => {
                            const isSelected =
                                exerciseTypes.includes(
                                    item
                                );

                            return (
                                <S.CheckItem
                                    key={
                                        item
                                    }
                                    type="button"
                                    disabled={
                                        isLoading
                                    }
                                    $selected={
                                        isSelected
                                    }
                                    onClick={() =>
                                        toggleExerciseType(
                                            item
                                        )
                                    }
                                >
                                    <S.CheckBox
                                        $selected={
                                            isSelected
                                        }
                                    >
                                        {isSelected &&
                                            "✓"}
                                    </S.CheckBox>

                                    {item}
                                </S.CheckItem>
                            );
                        }
                    )}
                </S.CheckGrid>

                {exerciseTypeError && (
                    <S.ErrorText>
                        운동 종류를 최소 1개 이상
                        선택해주세요.
                    </S.ErrorText>
                )}
            </S.QuestionSection>

            <Button
                variant="primary"
                disabled={
                    isLoading ||
                    isSubmitting
                }
                onClick={
                    handleSubmit
                }
            >
                {isLoading
                    ? "불러오는 중..."
                    : isSubmitting
                        ? "저장 중..."
                        : "첫 운동 찾기"}
            </Button>
        </>
    );
}

export default FirstExerciseForm;