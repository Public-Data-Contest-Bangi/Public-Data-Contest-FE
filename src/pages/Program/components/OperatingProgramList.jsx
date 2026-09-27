import {
    useEffect,
    useState,
} from "react";
import { useParams } from "react-router-dom";

import programCharacter from "../../../assets/images/prgram-character.png";

import {
    getFacilityPrograms,
} from "../../../api/facilities";

import OperatingProgramCard from "./OperatingProgramCard";

import * as S from "./OperatingProgramList.styled";

export default function OperatingProgramList() {
    const { id: facilityId } =
        useParams();

    const [programs, setPrograms] =
        useState([]);

    const [isLoading, setIsLoading] =
        useState(true);

    const [isError, setIsError] =
        useState(false);

    useEffect(() => {
        if (!facilityId) {
            setIsLoading(false);
            setIsError(true);
            return;
        }

        const controller =
            new AbortController();

        const fetchPrograms =
            async () => {
                try {
                    setIsLoading(true);
                    setIsError(false);

                    const response =
                        await getFacilityPrograms(
                            facilityId,
                            {
                                signal:
                                    controller.signal,
                            }
                        );

                    if (
                        response?.success !==
                        true
                    ) {
                        throw new Error(
                            "운영 프로그램 조회 실패"
                        );
                    }

                    const programList =
                        response?.data
                            ?.programs ?? [];

                    const mappedPrograms =
                        programList.map(
                            (
                                program,
                                index
                            ) => ({
                                id:
                                    `${facilityId}-${index}`,

                                title:
                                    program.programName,

                                className:
                                    program.sportName,

                                days:
                                    program.weekday,

                                time:
                                    program.time,

                                operatingPeriod:
                                    program.operatingStartDate &&
                                    program.operatingEndDate
                                        ? `${program.operatingStartDate} ~ ${program.operatingEndDate}`
                                        : "-",

                                price:
                                    program.price ||
                                    "-",

                                voucherAvailable:
                                    program.voucherAvailable,
                            })
                        );

                    setPrograms(
                        mappedPrograms
                    );
                } catch (error) {
                    if (
                        controller.signal
                            .aborted
                    ) {
                        return;
                    }

                    console.error(
                        "운영 프로그램 조회 실패:",
                        error
                    );

                    setPrograms([]);
                    setIsError(true);
                } finally {
                    if (
                        !controller.signal
                            .aborted
                    ) {
                        setIsLoading(
                            false
                        );
                    }
                }
            };

        fetchPrograms();

        return () => {
            controller.abort();
        };
    }, [facilityId]);

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
                        운영 프로그램 정보는
                        공공데이터를 기반으로
                        제공되며,
                        <br />
                        실제 운영 일정은 시설
                        홈페이지 또는 시설에
                        직접 확인해 주세요.
                    </S.Notice>

                    {isLoading ? (
                        <S.StatusText>
                            운영 프로그램을
                            불러오는 중이에요.
                        </S.StatusText>
                    ) : isError ? (
                        <S.StatusText>
                            운영 프로그램 정보를
                            불러오지 못했어요.
                        </S.StatusText>
                    ) : programs.length ===
                      0 ? (
                        <S.StatusText>
                            현재 운영 중인
                            프로그램이 없어요.
                        </S.StatusText>
                    ) : (
                        <S.ProgramList>
                            {programs.map(
                                (
                                    program
                                ) => (
                                    <OperatingProgramCard
                                        key={
                                            program.id
                                        }
                                        program={
                                            program
                                        }
                                    />
                                )
                            )}
                        </S.ProgramList>
                    )}
                </S.Section>
            </S.Content>
        </S.Page>
    );
}