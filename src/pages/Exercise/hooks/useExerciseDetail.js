// src/pages/Exercise/hooks/useExerciseDetail.js

import {
    useEffect,
    useState,
} from "react";

import {
    useLocation,
    useParams,
} from "react-router-dom";

import {
    searchFacilities,
} from "../../../api/facilities";

import {
    fetchFacilityDetail,
} from "../../../api/facilityDetail";

function formatDistance(meters) {
    if (
        meters === null ||
        meters === undefined
    ) {
        return "";
    }

    if (meters < 1000) {
        return `${meters}m`;
    }

    return `${(
        meters / 1000
    ).toFixed(1)}km`;
}

function useExerciseDetail() {
    const location = useLocation();
    const { exerciseId } = useParams();

    const exercise =
        location.state ?? null;

    const [
        facilities,
        setFacilities,
    ] = useState([]);

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    const [
        error,
        setError,
    ] = useState("");

    useEffect(() => {
        if (!exercise?.sportId) {
            console.error(
                "운동 상세 정보 없음:",
                {
                    exerciseId,
                    state:
                        location.state,
                }
            );

            setFacilities([]);
            setIsLoading(false);
            setError(
                "운동 정보를 불러올 수 없어요."
            );

            return;
        }

        const controller =
            new AbortController();

        if (!navigator.geolocation) {
            setIsLoading(false);
            setError(
                "현재 위치를 확인할 수 없어요."
            );

            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    setIsLoading(true);
                    setError("");

                    const {
                        latitude,
                        longitude,
                    } =
                        position.coords;

                    const result =
                        await searchFacilities({
                            searchMode:
                                "CURRENT_LOCATION",

                            latitude,
                            longitude,

                            sportIds: [
                                exercise.sportId,
                            ],

                            voucherStatus:
                                "ALL",

                            page: 0,
                            size: 10,

                            signal:
                                controller.signal,
                        });

                    const facilityList =
                        result?.facilities ??
                        [];

                    const mappedFacilities =
                        await Promise.all(
                            facilityList.map(
                                async (
                                    facility
                                ) => {
                                    let image =
                                        facility
                                            .representativeImageUrl ??
                                        null;

                                    try {
                                        const detail =
                                            await fetchFacilityDetail(
                                                facility.facilityId,
                                                {
                                                    latitude,
                                                    longitude,
                                                }
                                            );

                                        image =
                                            detail
                                                ?.imageUrls?.[0] ??
                                            image;
                                    } catch (
                                        detailError
                                    ) {
                                        if (
                                            controller
                                                .signal
                                                .aborted
                                        ) {
                                            return null;
                                        }

                                        console.warn(
                                            "시설 상세 이미지 조회 실패:",
                                            facility.facilityId,
                                            detailError
                                        );
                                    }

                                    return {
                                        id:
                                            facility.facilityId,

                                        name:
                                            facility.name,

                                        image,

                                        address:
                                            facility.address,

                                        distance:
                                            formatDistance(
                                                facility.distanceMeters
                                            ),

                                        sports:
                                            facility.sports ??
                                            [],
                                    };
                                }
                            )
                        );

                    if (
                        controller.signal
                            .aborted
                    ) {
                        return;
                    }

                    setFacilities(
                        mappedFacilities.filter(
                            Boolean
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
                        "운동 시설 조회 실패:",
                        error
                    );

                    setFacilities([]);

                    setError(
                        "주변 시설을 불러오지 못했어요."
                    );
                } finally {
                    if (
                        !controller.signal
                            .aborted
                    ) {
                        setIsLoading(false);
                    }
                }
            },

            (error) => {
                console.error(
                    "위치 조회 실패:",
                    error
                );

                if (
                    controller.signal
                        .aborted
                ) {
                    return;
                }

                setIsLoading(false);

                setError(
                    "주변 시설을 보려면 위치 권한이 필요해요."
                );
            }
        );

        return () => {
            controller.abort();
        };
    }, [
        exercise?.sportId,
        exerciseId,
        location.state,
    ]);

    const tags =
        exercise
            ?.exerciseCharacteristics
            ?.map(
                (item) =>
                    item.label
            ) ?? [];

    return {
        exercise,
        tags,
        facilities,
        isLoading,
        error,
    };
}

export default useExerciseDetail;