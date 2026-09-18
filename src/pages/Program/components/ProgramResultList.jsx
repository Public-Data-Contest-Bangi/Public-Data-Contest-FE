import { PROGRAM_RESULTS } from "../constants/programResults";

import ProgramCard from "./ProgramCard";

import * as S from "./ProgramResultList.styled";

export default function ProgramResultList() {
    return (
        <S.Page>
            <S.Content>
                <S.ListHeader>
                    <S.ListTitle>
                        가까운 순
                    </S.ListTitle>

                    <S.SortIcon
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M8 5V19" />
                        <path d="M5 8L8 5L11 8" />

                        <path d="M16 19V5" />
                        <path d="M13 16L16 19L19 16" />
                    </S.SortIcon>
                </S.ListHeader>

                <S.ProgramList>
                    {PROGRAM_RESULTS.map(
                        (program) => (
                            <ProgramCard
                                key={program.id}
                                program={program}
                            />
                        )
                    )}
                </S.ProgramList>
            </S.Content>
        </S.Page>
    );
}