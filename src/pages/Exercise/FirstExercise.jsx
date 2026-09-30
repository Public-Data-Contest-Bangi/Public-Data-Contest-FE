import Header from "../../components/common/Header";

import FirstExerciseBanner from "./components/FirstExerciseBanner";
import FirstExerciseForm from "./components/FirstExerciseForm";

import useFirstExercise from "./hooks/useFirstExercise";

import * as S from "./FirstExercise.styled";

function FirstExercise() {
    const firstExercise =
        useFirstExercise();

    return (
        <S.Page>
            <S.Container>
                <Header inset={16} title="첫 운동 발견하기" />

                <FirstExerciseBanner />

                <FirstExerciseForm
                    {...firstExercise}
                />
            </S.Container>
        </S.Page>
    );
}

export default FirstExercise;