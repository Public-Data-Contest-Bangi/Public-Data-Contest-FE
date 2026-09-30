import { useNavigate } from "react-router-dom";

import Header from "../../components/common/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import InfoBanner from "../../components/common/InfoBanner";

import mascot from "../../assets/images/findidcharacter.png";
import bannerMascot from "../../assets/images/fitness-recommend.png";

import * as S from "./FitnessResultIntro.styled";

function FitnessResultIntro() {
    const navigate = useNavigate();

    return (
        <MobileLayout>
            <S.Inner>
                <Header inset={16} title="체력 결과로 추천" />

                <S.Content>
                    <S.Mascot
                        src={mascot}
                        alt="디딤핏 캐릭터"
                    />

                    <S.Title>
                        국민 체력 100 측정
                        <br />
                        결과가 있나요?
                    </S.Title>

                    <S.SelectArea>
                        <S.SelectButton
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/fitness-result/input"
                                )
                            }
                        >
                            <span>
                                국민체력100 결과가 있어요
                            </span>

                            <S.Arrow />
                        </S.SelectButton>

                        <S.SelectButton
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/exercise-recommend"
                                )
                            }
                        >
                            <span>
                                아직 없어요
                            </span>

                            <S.Arrow />
                        </S.SelectButton>
                    </S.SelectArea>
                </S.Content>

                <InfoBanner
                    image={bannerMascot}
                    imageSize="120px"
                    imageOffsetY="4px"
                    contentOffsetX="-18px"
                >
                    국민체력 100 결과를 바탕으로
                    <br />
                    나에게 딱 맞는 운동을 추천해드려요!
                </InfoBanner>
            </S.Inner>
        </MobileLayout>
    );
}

export default FitnessResultIntro;