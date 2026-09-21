import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import MobileLayout from "../../components/layout/MobileLayout";

import useFitnessResultInput from "./hooks/useFitnessResultInput";

import * as S from "./FitnessResultInput.styled";

const FITNESS_ITEMS = [
    "근력",
    "근지구력",
    "심폐지구력",
    "유연성",
    "민첩성",
    "순발력",
];

function FitnessResultInput() {
    const {
        results,
        isSubmitting,
        handleSelect,
        handleSubmit,
    } = useFitnessResultInput();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="체력 결과로 추천" />

                <S.Content>
                    <S.Title>
                        국민 체력 100 측정 결과를
                        <br />
                        입력해주세요
                    </S.Title>

                    <S.Description>
                        각 항목의 등급을 선택해주세요
                    </S.Description>

                    <S.ResultList>
                        {FITNESS_ITEMS.map(
                            (category) => (
                                <S.ResultRow
                                    key={category}
                                >
                                    <S.Category>
                                        {category}
                                    </S.Category>

                                    <S.GradeArea>
                                        {[1, 2, 3].map(
                                            (grade) => (
                                                <S.GradeButton
                                                    key={grade}
                                                    type="button"
                                                    $selected={
                                                        results[
                                                            category
                                                        ] ===
                                                        grade
                                                    }
                                                    onClick={() =>
                                                        handleSelect(
                                                            category,
                                                            grade
                                                        )
                                                    }
                                                >
                                                    {grade}
                                                    등급
                                                </S.GradeButton>
                                            )
                                        )}
                                    </S.GradeArea>
                                </S.ResultRow>
                            )
                        )}
                    </S.ResultList>
                </S.Content>

                <S.BottomArea>
                    <S.Notice>
                        이 결과는 생활체육 종목을 탐색하는
                        참고 정보이며,
                        <br />
                        의학적 진단이나 운동 처방이 아닙니다.
                    </S.Notice>

                    <Button
                        height="52px"
                        radius="6px"
                        fontSize="16px"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "저장 중..."
                            : "체력 결과로 추천받기"}
                    </Button>
                </S.BottomArea>
            </S.Inner>
        </MobileLayout>
    );
}

export default FitnessResultInput;