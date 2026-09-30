import {
    useNavigate,
} from "react-router-dom";

import * as S from "./ProgramCard.styled";

import {
    getSportIcon,
    getSportDisplayName,
} from "../../FacilityDetail/utils/sportIcons";

export default function ProgramCard({
    program,
}) {
    const navigate =
        useNavigate();

    const handleDetail = () => {
        navigate(
            `/facility-detail/${program.id}`
        );
    };

    const sports =
        program.sports ?? [];

    return (
        <S.Card>
            <S.Info>
                <S.TopRow>
                    <S.Name>
                        {program.name}
                    </S.Name>

                    {program.distance && (
                        <S.Distance>
                            {
                                program.distance
                            }
                        </S.Distance>
                    )}
                </S.TopRow>

                <S.Address>
                    {program.address}
                </S.Address>

                {sports.length > 0 && (
                    <S.TagList>
                        {sports.map(
                            (sport) => {
                                const icon =
                                    getSportIcon(
                                        sport.name
                                    );

                                const label =
                                    getSportDisplayName(
                                        sport.name
                                    );

                                return (
                                    <S.Tag
                                        key={
                                            sport.sportId ??
                                            sport.name
                                        }
                                    >
                                        {icon && (
                                            <S.SportIcon
                                                src={
                                                    icon
                                                }
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        )}

                                        <span>
                                            {
                                                label
                                            }
                                        </span>
                                    </S.Tag>
                                );
                            }
                        )}
                    </S.TagList>
                )}

                <S.DetailButton
                    type="button"
                    onClick={
                        handleDetail
                    }
                >
                    시설 상세

                    <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M1 1L6 6L1 11"
                            stroke="#222222"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </S.DetailButton>
            </S.Info>
        </S.Card>
    );
}