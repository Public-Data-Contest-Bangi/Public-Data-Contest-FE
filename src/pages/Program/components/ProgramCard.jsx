import { useNavigate } from "react-router-dom";

import * as S from "./ProgramCard.styled";

export default function ProgramCard({
    program,
}) {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(
            `/facility-detail/${program.id}`
        );
    };

    return (
        <S.Card>
            <S.Info>
                <S.TopRow>
                    <S.Name>
                        {program.name}
                    </S.Name>

                    <S.Distance>
                        {program.distance}
                    </S.Distance>
                </S.TopRow>

                <S.Address>
                    {program.address}
                </S.Address>

                <S.TagList>
                    {program.tags.map(
                        (tag) => (
                            <S.Tag key={tag}>
                                {tag}
                            </S.Tag>
                        )
                    )}
                </S.TagList>

                <S.DetailButton
                    type="button"
                    onClick={handleDetail}
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