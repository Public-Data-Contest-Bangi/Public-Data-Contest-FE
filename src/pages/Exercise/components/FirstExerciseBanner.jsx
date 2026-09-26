import FirstExerciseCharacter from "../../../assets/images/firstexercise-character.png";

import * as S from "./FirstExerciseBanner.styled";

function FirstExerciseBanner() {
    return (
        <S.Banner>
            <S.BannerText>
                <S.Badge>
                    취향 기반 추천
                </S.Badge>

                <S.Title>
                    나에게 맞는
                    <br />
                    운동을 찾아볼까요?
                </S.Title>

                <S.Description>
                    간단한 질문에 답하면
                    <br />
                    딱 맞는 운동을 추천해드려요.
                </S.Description>
            </S.BannerText>

            <S.Image
                src={
                    FirstExerciseCharacter
                }
                alt="운동 추천 캐릭터"
            />
        </S.Banner>
    );
}

export default FirstExerciseBanner;