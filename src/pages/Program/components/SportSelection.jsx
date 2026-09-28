import { useState } from "react";
import {
    useLocation,
    useNavigate,
} from "react-router-dom";

import Button from "../../../components/common/Button";
import { SPORTS_OPTIONS } from "../constants/sportsOptions";

import * as S from "./SportSelection.styled";

export default function SportSelection() {
    const navigate = useNavigate();
    const location = useLocation();

    const [
        selectedSportIds,
        setSelectedSportIds,
    ] = useState(
        location.state?.sportIds ?? []
    );

    const handleSportToggle = (
        sportId
    ) => {
        setSelectedSportIds(
            (prev) => {
                const next =
                    prev.includes(sportId)
                        ? prev.filter(
                              (id) =>
                                  id !==
                                  sportId
                          )
                        : [
                              ...prev,
                              sportId,
                          ];

                navigate(
                    location.pathname,
                    {
                        replace: true,
                        state: {
                            ...location.state,
                            sportIds:
                                next,
                        },
                    }
                );

                return next;
            }
        );
    };

    const handleComplete = () => {
        navigate(
            "/program-browse/region",
            {
                state: {
                    ...location.state,
                    sportIds:
                        selectedSportIds,
                },
            }
        );
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
                                selectedSportIds.includes(
                                    sport.id
                                );

                            return (
                                <S.SportButton
                                    key={
                                        sport.id
                                    }
                                    type="button"
                                    $selected={
                                        isSelected
                                    }
                                    onClick={() =>
                                        handleSportToggle(
                                            sport.id
                                        )
                                    }
                                >
                                    {sport.icon && (
                                        <S.SportIcon
                                            src={
                                                sport.icon
                                            }
                                            alt=""
                                        />
                                    )}

                                    {
                                        sport.name
                                    }
                                </S.SportButton>
                            );
                        }
                    )}
                </S.SportGrid>
            </S.Content>

            <S.BottomArea>
                <Button
                    disabled={
                        selectedSportIds.length ===
                        0
                    }
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