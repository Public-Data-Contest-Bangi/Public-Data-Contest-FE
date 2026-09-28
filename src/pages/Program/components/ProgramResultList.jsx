import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    useLocation,
} from "react-router-dom";

import {
    searchProgramFacilities,
} from "../../../api/facilities";

import ProgramCard from "./ProgramCard";
import BottomNav from "../../../components/BottomNav";

import * as S from "./ProgramResultList.styled";

export default function ProgramResultList() {
    const location = useLocation();

    const {
        sports = [],
        sportIds: stateSportIds = [],
        regionCode,
        latitude,
        longitude,
        searchMode = "REGION",
    } = location.state ?? {};

    const sportIds = useMemo(() => {
        if (
            Array.isArray(stateSportIds) &&
            stateSportIds.length > 0
        ) {
            return stateSportIds;
        }

        return sports
            .map((sport) =>
                typeof sport === "object"
                    ? sport.sportId ??
                      sport.id
                    : sport
            )
            .filter(
                (id) =>
                    id !== null &&
                    id !== undefined
            );
    }, [
        sports,
        stateSportIds,
    ]);

    const [
        programs,
        setPrograms,
    ] = useState([]);

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    const [
        isError,
        setIsError,
    ] = useState(false);

    useEffect(() => {
        if (
            latitude == null ||
            longitude == null
        ) {
            setIsLoading(false);
            setIsError(true);

            console.error(
                "프로그램 시설 검색에 위도/경도가 필요합니다."
            );

            return;
        }

        if (
            sportIds.length === 0
        ) {
            setIsLoading(false);
            setIsError(true);

            console.error(
                "프로그램 시설 검색에 종목 ID가 필요합니다."
            );

            return;
        }

        if (
            searchMode ===
                "REGION" &&
            !regionCode
        ) {
            setIsLoading(false);
            setIsError(true);

            console.error(
                "지역 검색에는 regionCode가 필요합니다."
            );

            return;
        }

        const controller =
            new AbortController();

        const fetchFacilities =
            async () => {
                try {
                    setIsLoading(true);
                    setIsError(false);

                    const data =
                        await searchProgramFacilities({
                            searchMode,
                            latitude,
                            longitude,

                            regionCode:
                                searchMode ===
                                "REGION"
                                    ? regionCode
                                    : undefined,

                            sportIds,

                            page: 0,
                            size: 20,

                            signal:
                                controller.signal,
                        });

                    const mappedPrograms =
                        (
                            data?.facilities ??
                            []
                        ).map(
                            (facility) => ({
                                id:
                                    facility.facilityId,

                                name:
                                    facility.name,

                                image:
                                    facility.representativeImageUrl,

                                address:
                                    facility.address,

                                distance:
                                    formatDistance(
                                        facility.distanceMeters
                                    ),

                                tags:
                                    facility.sports?.map(
                                        (
                                            sport
                                        ) =>
                                            sport.name
                                    ) ?? [],
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
                        "프로그램 운영 시설 검색 실패:",
                        error.response?.data ??
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

        fetchFacilities();

        return () => {
            controller.abort();
        };
    }, [
        sportIds,
        regionCode,
        latitude,
        longitude,
        searchMode,
    ]);

    return (
        <S.Page>
            <S.Content>
                <S.ListHeader>
                    <S.ListTitle>
                        가까운 순
                    </S.ListTitle>
                </S.ListHeader>

                {isLoading ? (
                    <S.StatusText>
                        프로그램이 있는
                        시설을 찾고 있어요.
                    </S.StatusText>
                ) : isError ? (
                    <S.StatusText>
                        시설 정보를
                        불러오지 못했어요.
                    </S.StatusText>
                ) : programs.length ===
                  0 ? (
                    <S.StatusText>
                        선택한 종목의
                        운영 프로그램이 있는
                        시설이 없어요.
                    </S.StatusText>
                ) : (
                    <S.ProgramList>
                        {programs.map(
                            (program) => (
                                <ProgramCard
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
            </S.Content>

            <BottomNav />
        </S.Page>
    );
}

function formatDistance(
    distanceMeters
) {
    if (
        distanceMeters === null ||
        distanceMeters === undefined
    ) {
        return "-";
    }

    if (distanceMeters < 1000) {
        return `${Math.round(
            distanceMeters
        )}m`;
    }

    return `${(
        distanceMeters / 1000
    ).toFixed(1)}km`;
}