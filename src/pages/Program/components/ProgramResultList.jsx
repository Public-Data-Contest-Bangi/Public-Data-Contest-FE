import fetchAllFacilities from '../../../utils/fetchAllFacilities';
import Pagination from '../../../components/common/Pagination';
import useListPagination from '../../../utils/useListPagination';
import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    useLocation,
} from "react-router-dom";

import {
    fetchRegions,
    searchProgramFacilities,
} from "../../../api/facilities";

import {
    searchPlaces,
} from "../../../api/places";

import ProgramCard from "./ProgramCard";
import BottomNav from "../../../components/BottomNav";

import * as S from "./ProgramResultList.styled";

/*
 * 장소 검색 응답에서
 * 첫 번째 장소 추출
 */
function getFirstPlace(result) {
    const data =
        result?.data ?? result;

    if (Array.isArray(data)) {
        return data[0] ?? null;
    }

    const list =
        data?.places ??
        data?.results ??
        data?.items ??
        data?.pois ??
        data?.content ??
        [];

    if (Array.isArray(list)) {
        return list[0] ?? null;
    }

    return data ?? null;
}

/*
 * 장소 응답에서 위도/경도 추출
 */
function getPlaceCoord(place) {
    if (!place) {
        return null;
    }

    const coordinate =
        place.coordinate ??
        place.coord ??
        place.location ??
        {};

    const latitude = Number(
        place.latitude ??
            place.lat ??
            place.frontLat ??
            place.noorLat ??
            coordinate.latitude ??
            coordinate.lat
    );

    const longitude = Number(
        place.longitude ??
            place.lng ??
            place.lon ??
            place.frontLon ??
            place.noorLon ??
            coordinate.longitude ??
            coordinate.lng ??
            coordinate.lon
    );

    if (
        !Number.isFinite(latitude) ||
        !Number.isFinite(longitude)
    ) {
        return null;
    }

    return {
        latitude,
        longitude,
    };
}

/*
 * "서울특별시"
 * "강원특별자치도 강릉시"
 * 등을 좌표로 변환
 */
async function getSearchCoord(keyword) {
    let result;

    try {
        result =
            await searchPlaces(
                keyword
            );
    } catch (firstError) {
        try {
            result =
                await searchPlaces({
                    keyword,
                });
        } catch {
            throw firstError;
        }
    }

    return getPlaceCoord(
        getFirstPlace(result)
    );
}

/*
 * 여러 지역에서 중복으로 잡힌 시설 제거
 */
function removeDuplicateFacilities(
    facilities
) {
    const map = new Map();

    facilities.forEach(
        (facility) => {
            if (
                facility?.facilityId ==
                null
            ) {
                return;
            }

            if (
                !map.has(
                    facility.facilityId
                )
            ) {
                map.set(
                    facility.facilityId,
                    facility
                );
            }
        }
    );

    return [...map.values()];
}

export default function ProgramResultList() {
    const location =
        useLocation();

    const {
        sports = [],

        sportIds:
            stateSportIds = [],

        province,
        city,
        subDistrict,

        regionName,

        regionCode,

        latitude,
        longitude,

        searchMode =
            "REGION",
    } = location.state ?? {};

    const sportIds =
        useMemo(() => {
            if (
                Array.isArray(
                    stateSportIds
                ) &&
                stateSportIds.length >
                    0
            ) {
                return stateSportIds;
            }

            return sports
                .map((sport) =>
                    typeof sport ===
                    "object"
                        ? sport.sportId ??
                          sport.id
                        : sport
                )
                .filter(
                    (id) =>
                        id !== null &&
                        id !==
                            undefined
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

    const { page, setPage, pageItems } = useListPagination(programs);

    useEffect(() => {
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
            !province &&
            !regionCode
        ) {
            setIsLoading(false);
            setIsError(true);

            console.error(
                "지역 검색 정보가 없습니다."
            );

            return;
        }

        if (
            searchMode ===
                "CURRENT_LOCATION" &&
            (
                latitude == null ||
                longitude == null
            )
        ) {
            setIsLoading(false);
            setIsError(true);

            console.error(
                "현재 위치 검색에는 위도/경도가 필요합니다."
            );

            return;
        }

        const controller =
            new AbortController();

        const fetchFacilities =
            async () => {
                try {
                    setIsLoading(
                        true
                    );

                    setIsError(
                        false
                    );

                    /*
                     * 1. 검색 기준 좌표 결정
                     *
                     * 현재 위치 검색
                     * → 전달받은 좌표 사용
                     *
                     * 지역 검색
                     * → 좌표가 없으면 지역명으로 검색
                     */
                    let searchLatitude =
                        latitude;

                    let searchLongitude =
                        longitude;

                    if (
                        searchMode ===
                            "REGION" &&
                        (
                            searchLatitude ==
                                null ||
                            searchLongitude ==
                                null
                        )
                    ) {
                        const targetRegionName =
                            regionName ||
                            [
                                province,
                                city,
                                subDistrict,
                            ]
                                .filter(
                                    Boolean
                                )
                                .join(
                                    " "
                                );

                        const coord =
                            await getSearchCoord(
                                targetRegionName
                            );

                        if (!coord) {
                            throw new Error(
                                "선택한 지역의 좌표를 찾을 수 없습니다."
                            );
                        }

                        searchLatitude =
                            coord.latitude;

                        searchLongitude =
                            coord.longitude;
                    }

                    /*
                     * 2. 현재 위치 검색
                     */
                    if (
                        searchMode ===
                        "CURRENT_LOCATION"
                    ) {
                        const data =
                            await fetchAllFacilities(searchProgramFacilities, {
                                searchMode:
                                    "CURRENT_LOCATION",

                                latitude:
                                    searchLatitude,

                                longitude:
                                    searchLongitude,

                                sportIds,

                                page: 0,
                                size: 20,

                                signal:
                                    controller.signal,
                            });

                        const facilities =
                            data?.facilities ??
                            [];

                        setPrograms(
                            mapFacilities(
                                facilities
                            )
                        );

                        return;
                    }

                    /*
                     * 3. 상세 지역까지 선택해서
                     * regionCode가 있는 경우
                     */
                    if (regionCode) {
                        const data =
                            await fetchAllFacilities(searchProgramFacilities, {
                                searchMode:
                                    "REGION",

                                latitude:
                                    searchLatitude,

                                longitude:
                                    searchLongitude,

                                regionCode,

                                sportIds,

                                page: 0,
                                size: 20,

                                signal:
                                    controller.signal,
                            });

                        const facilities =
                            data?.facilities ??
                            [];

                        setPrograms(
                            mapFacilities(
                                facilities
                            )
                        );

                        return;
                    }

                    /*
                     * 4. 도/시만 선택한 경우
                     *
                     * ex)
                     * 서울특별시만 선택
                     *
                     * 서울에 속한 모든 regionCode로
                     * 프로그램 시설 검색
                     */
                    const regions =
                        await fetchRegions();

                    const regionCodes =
                        [
                            ...new Set(
                                regions
                                    .filter(
                                        (
                                            region
                                        ) =>
                                            region.provinceName ===
                                                province &&
                                            region.regionCode
                                    )
                                    .map(
                                        (
                                            region
                                        ) =>
                                            region.regionCode
                                    )
                            ),
                        ];

                    if (
                        regionCodes.length ===
                        0
                    ) {
                        throw new Error(
                            "선택한 지역의 regionCode를 찾을 수 없습니다."
                        );
                    }

                    const results =
                        await Promise.allSettled(
                            regionCodes.map(
                                (
                                    code
                                ) =>
                                    fetchAllFacilities(searchProgramFacilities, {
                                        searchMode:
                                            "REGION",

                                        latitude:
                                            searchLatitude,

                                        longitude:
                                            searchLongitude,

                                        regionCode:
                                            code,

                                        sportIds,

                                        page: 0,
                                        size: 20,

                                        signal:
                                            controller.signal,
                                    })
                            )
                        );

                    if (
                        controller.signal
                            .aborted
                    ) {
                        return;
                    }

                    const failed = results.find(result => result.status === 'rejected');
                    if (failed) throw failed.reason;

                    const facilities =
                        results.flatMap(
                            (result) => {
                                if (
                                    result.status !==
                                    "fulfilled"
                                ) {
                                    return [];
                                }

                                return (
                                    result.value
                                        ?.facilities ??
                                    []
                                );
                            }
                        );

                    const uniqueFacilities =
                        removeDuplicateFacilities(
                            facilities
                        );

                    /*
                     * distanceMeters가 있는 경우
                     * 가까운 순 정렬
                     */
                    uniqueFacilities.sort(
                        (a, b) => {
                            const aDistance =
                                a.distanceMeters ??
                                Number.MAX_SAFE_INTEGER;

                            const bDistance =
                                b.distanceMeters ??
                                Number.MAX_SAFE_INTEGER;

                            return (
                                aDistance -
                                bDistance
                            );
                        }
                    );

                    setPrograms(
                        mapFacilities(
                            uniqueFacilities
                        )
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
                        error.response
                            ?.data ??
                            error
                    );

                    setPrograms(
                        []
                    );

                    setIsError(
                        true
                    );
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
        province,
        city,
        subDistrict,
        regionName,
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
                        {pageItems.map(
                            (
                                program
                            ) => (
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
                {!isLoading && !isError && <Pagination page={page} totalCount={programs.length} onPageChange={setPage} />}
            </S.Content>

            <BottomNav />
        </S.Page>
    );
}

/*
 * API → 화면 데이터 변환
 *
 * 이미지 필드 완전히 제거
 */
function mapFacilities(
    facilities
) {
    return facilities.map(
        (facility) => ({
            id:
                facility.facilityId,

            name:
                facility.name,

            address:
                facility.address,

            distance:
                formatDistance(
                    facility.distanceMeters
                ),

            tags:
                facility.sports?.map(
                    (sport) =>
                        sport.name
                ) ?? [],
        })
    );
}

function formatDistance(
    distanceMeters
) {
    if (
        distanceMeters === null ||
        distanceMeters === undefined
    ) {
        return null;
    }

    if (
        distanceMeters < 1000
    ) {
        return `${Math.round(
            distanceMeters
        )}m`;
    }

    return `${(
        distanceMeters / 1000
    ).toFixed(1)}km`;
}