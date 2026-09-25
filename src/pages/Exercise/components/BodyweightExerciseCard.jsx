import { useState } from "react";

import * as S from "./BodyweightExerciseCard.styled";

export default function BodyweightExerciseCard({
    exercise,
    index,
}) {
    const [isOpen, setIsOpen] =
        useState(false);

    const {
        exerciseName,
        targetFitnessAreas = [],
        reason,
        dose = {},
        method,
        precautions,
        supportGuide,
    } = exercise;

    return (
        <S.Card>
            <S.TopButton
                type="button"
                onClick={() =>
                    setIsOpen(
                        (prev) => !prev
                    )
                }
            >
                <S.Main>
                    <S.TitleRow>
                        <S.Number>
                            {String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </S.Number>

                        <S.Title>
                            {exerciseName}
                        </S.Title>
                    </S.TitleRow>

                    <S.TagList>
                        {targetFitnessAreas.map(
                            (area) => (
                                <S.Tag
                                    key={area}
                                >
                                    {area}
                                </S.Tag>
                            )
                        )}
                    </S.TagList>
                </S.Main>

                <S.Arrow $open={isOpen} />
            </S.TopButton>

            <S.Reason>
                {reason}
            </S.Reason>

            <S.DoseBox>
                <S.DoseItem>
                    <S.DoseValue>
                        {dose.sets ?? "-"}
                    </S.DoseValue>

                    <S.DoseLabel>
                        세트
                    </S.DoseLabel>
                </S.DoseItem>

                <S.DoseDivider />

                <S.DoseItem>
                    <S.DoseValue>
                        {dose.repetitions ?? "-"}
                    </S.DoseValue>

                    <S.DoseLabel>
                        횟수
                    </S.DoseLabel>
                </S.DoseItem>

                <S.DoseDivider />

                <S.DoseItem>
                    <S.DoseValue>
                        {dose.restSeconds ?? "-"}
                    </S.DoseValue>

                    <S.DoseLabel>
                        초 휴식
                    </S.DoseLabel>
                </S.DoseItem>
            </S.DoseBox>

            {isOpen && (
                <S.DetailArea>
                    {method && (
                        <S.DetailItem>
                            <S.DetailLabel>
                                운동 방법
                            </S.DetailLabel>

                            <S.DetailText>
                                {method}
                            </S.DetailText>
                        </S.DetailItem>
                    )}

                    {precautions && (
                        <S.DetailItem>
                            <S.DetailLabel>
                                주의사항
                            </S.DetailLabel>

                            <S.DetailText>
                                {precautions}
                            </S.DetailText>
                        </S.DetailItem>
                    )}

                    {supportGuide && (
                        <S.DetailItem>
                            <S.DetailLabel>
                                맞춤 가이드
                            </S.DetailLabel>

                            <S.DetailText>
                                {supportGuide}
                            </S.DetailText>
                        </S.DetailItem>
                    )}
                </S.DetailArea>
            )}
        </S.Card>
    );
}