import { OPERATING_PROGRAMS } from "../constants/operatingPrograms";

import programCharacter from "../../../assets/images/prgram-character.png";

import OperatingProgramCard from "./OperatingProgramCard";

import * as S from "./OperatingProgramList.styled";

export default function OperatingProgramList() {
    return (
        <S.Page>
            <S.Content>
                <S.Banner>
                    <S.CharacterImage
                        src={programCharacter}
                        alt=""
                    />

                    <S.BannerText>
                        나에게 맞는
                        <br />
                        운동을 시작해요!
                    </S.BannerText>
                </S.Banner>

                <S.Section>
                    <S.SectionTitle>
                        개설 프로그램 정보
                    </S.SectionTitle>

                    <S.ProgramList>
                        {OPERATING_PROGRAMS.map(
                            (program) => (
                                <OperatingProgramCard
                                    key={program.id}
                                    program={program}
                                />
                            )
                        )}
                    </S.ProgramList>
                </S.Section>
            </S.Content>
        </S.Page>
    );
}