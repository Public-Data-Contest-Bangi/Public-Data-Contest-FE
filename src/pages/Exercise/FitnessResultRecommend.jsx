import { useState } from "react";

import BottomNav from "../../components/BottomNav";
import Header from "../../components/common/Header";
import MobileLayout from "../../components/layout/MobileLayout";

import BodyweightRecommendationTab from "./components/BodyweightRecommendationTab";
import SportRecommendationTab from "./components/SportRecommendationTab";

import useBodyweightRecommend from "./hooks/useBodyweightRecommend";
import useFitnessResultRecommend from "./hooks/useFitnessResultRecommend";

import * as S from "./FitnessResultRecommend.styled";

function FitnessResultRecommend() {
    const [activeTab, setActiveTab] =
        useState("sport");

    const {
        weakestCategory,
        recommendations,
        isLoading: isSportLoading,
        error: sportError,
    } = useFitnessResultRecommend();

    const {
        bodyweightResult,
        isLoading: isBodyweightLoading,
        error: bodyweightError,
    } = useBodyweightRecommend();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="체력 결과로 추천" />

                <S.Content>
                    <S.Title>
                        추천 결과
                    </S.Title>

                    <S.TabContainer>
                        <S.TabButton
                            type="button"
                            $active={
                                activeTab ===
                                "sport"
                            }
                            onClick={() =>
                                setActiveTab(
                                    "sport"
                                )
                            }
                        >
                            운동 종목
                        </S.TabButton>

                        <S.TabButton
                            type="button"
                            $active={
                                activeTab ===
                                "bodyweight"
                            }
                            onClick={() =>
                                setActiveTab(
                                    "bodyweight"
                                )
                            }
                        >
                            맨몸 운동
                        </S.TabButton>
                    </S.TabContainer>

                    {activeTab === "sport" ? (
                        <> <S.DetailGuide>
                            <S.GuideIcon>i</S.GuideIcon>

                            <span>
                                추천 종목을 눌러 가까운 체험 시설을 확인해보세요.
                            </span>
                        </S.DetailGuide>
                            <SportRecommendationTab
                                weakestCategory={
                                    weakestCategory
                                }
                                recommendations={
                                    recommendations
                                }
                                isLoading={
                                    isSportLoading
                                }
                                error={
                                    sportError
                                }
                            />
                        </>
                    ) : (
                        <BodyweightRecommendationTab
                            bodyweightResult={
                                bodyweightResult
                            }
                            isLoading={
                                isBodyweightLoading
                            }
                            error={
                                bodyweightError
                            }
                        />
                    )}
                </S.Content>

                <BottomNav />
            </S.Inner>
        </MobileLayout>
    );
}

export default FitnessResultRecommend;