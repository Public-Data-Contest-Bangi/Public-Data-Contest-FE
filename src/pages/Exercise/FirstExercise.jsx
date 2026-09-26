import { useNavigate } from "react-router-dom";

import FirstExerciseBanner from "./components/FirstExerciseBanner";
import FirstExerciseForm from "./components/FirstExerciseForm";

import useFirstExercise from "./hooks/useFirstExercise";

import * as S from "./FirstExercise.styled";

function FirstExercise() {
    const navigate = useNavigate();

    const firstExercise =
        useFirstExercise();

    return (
        <S.Page>
            <S.Container>
                <S.Header>
                    <S.BackButton
                        type="button"
                        onClick={() =>
                            navigate(-1)
                        }
                    >
                        ‹
                    </S.BackButton>

                    <S.Title>
                        첫 운동 발견하기
                    </S.Title>
                </S.Header>

                <FirstExerciseBanner />

                <FirstExerciseForm
                    {...firstExercise}
                />
            </S.Container>
        </S.Page>
    );
}

export default FirstExercise;