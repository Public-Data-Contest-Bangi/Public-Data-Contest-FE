import programCharacter from "../../../assets/images/prgram-character.png";

import { OPERATING_PROGRAMS } from "../constants/operatingPrograms";

import OperatingProgramCard from "./OperatingProgramCard";

import * as S from "./OperatingProgramList.styled";

export default function OperatingProgramList() {
    return (
        <S.Page>
            <S.Content>
                <S.Banner>
                    <S.BannerText>
                        원하는 운동을 골라
                        <br />
                        가볍게 시작해보세요!
                    </S.BannerText>

                    <S.CharacterImage
                        src={programCharacter}
                        alt=""
                    />
                </S.Banner>

                <S.Section>
                    <S.SectionTitle>
                        운영 프로그램 정보
                    </S.SectionTitle>

                    <S.Notice>
                        운영 프로그램 정보는 공공데이터를 기반으로
                        제공되며, 
                        <br />
                        실제 운영 일정은 시설 홈페이지 또는 시설에 직접 확인해 주세요.
                    </S.Notice>

                    <S.ProgramList>
                        {OPERATING_PROGRAMS.map((program) => (
                            <OperatingProgramCard
                                key={program.id}
                                program={program}
                            />
                        ))}
                    </S.ProgramList>
                </S.Section>
            </S.Content>
        </S.Page>
    );
}