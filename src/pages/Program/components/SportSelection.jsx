import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/common/Button";

import { SPORTS_OPTIONS } from "../constants/sportsOptions";

import * as S from "./SportSelection.styled";

export default function SportSelection() {
    const navigate = useNavigate();

    const [selectedSports, setSelectedSports] =
        useState([]);

    const handleSportToggle = (sport) => {
        setSelectedSports((prev) =>
            prev.includes(sport)
                ? prev.filter(
                      (item) =>
                          item !== sport
                  )
                : [...prev, sport]
        );
    };

    const handleComplete = () => {
        console.log(
            "선택한 종목:",
            selectedSports
        );

        // 프로그램 목록 페이지 만들어지면
        // 여기 경로만 변경하면 됨.
        // navigate("/program-list", {
        //     state: {
        //         sports: selectedSports,
        //     },
        // });
    };

    return (
        <S.Page>
            <S.Content>
                <S.Intro>
                    <S.Title>
                        관심있는 종목을
                        <br />
                        선택하세요
                    </S.Title>

                    <S.Description>
                        여러 개를 선택할 수 있어요!
                    </S.Description>
                </S.Intro>

                <S.SportGrid>
                    {SPORTS_OPTIONS.map(
                        (sport) => {
                            const isSelected =
                                selectedSports.includes(
                                    sport
                                );

                            return (
                                <S.SportButton
                                    key={sport}
                                    type="button"
                                    $selected={
                                        isSelected
                                    }
                                    onClick={() =>
                                        handleSportToggle(
                                            sport
                                        )
                                    }
                                >
                                    {sport}
                                </S.SportButton>
                            );
                        }
                    )}
                </S.SportGrid>
            </S.Content>

            <S.BottomArea>
                <Button
                    disabled={
                        selectedSports.length ===
                        0
                    }
                    height="52px"
                    radius="8px"
                    fontSize="17px"
                    onClick={
                        handleComplete
                    }
                >
                    선택 완료
                </Button>
            </S.BottomArea>
        </S.Page>
    );
}