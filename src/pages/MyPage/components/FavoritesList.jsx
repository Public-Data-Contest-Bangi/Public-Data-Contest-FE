import Pagination, {
    PAGE_SIZE,
} from "../../../components/common/Pagination";

import {
    getCurrentCoords,
} from "../../../utils/geolocation";

import {
    useEffect,
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    getFavoriteFacilities,
    removeFavoriteFacility,
} from "../../../api/favorite";

import FavoriteFacilityCard from "./FavoriteFacilityCard";

import * as S from "../FavoritesPage.styled";

const formatDistance = (
    distanceMeters
) => {
    if (
        distanceMeters === null ||
        distanceMeters === undefined
    ) {
        return "";
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
};

const normalizeAccessibility = (
    item
) => {
    if (!item) {
        return null;
    }

    const value = `
        ${item.code ?? ""}
        ${item.name ?? ""}
    `.toLowerCase();

    if (
        value.includes(
            "wheelchair"
        ) ||
        value.includes(
            "휠체어"
        )
    ) {
        return "wheelchair";
    }

    if (
        value.includes(
            "ramp"
        ) ||
        value.includes(
            "경사로"
        )
    ) {
        return "ramp";
    }

    if (
        value.includes(
            "elevator"
        ) ||
        value.includes(
            "엘리베이터"
        )
    ) {
        return "elevator";
    }

    if (
        value.includes(
            "restroom"
        ) ||
        value.includes(
            "toilet"
        ) ||
        value.includes(
            "화장실"
        )
    ) {
        return "restroom";
    }

    if (
        value.includes(
            "parking"
        ) ||
        value.includes(
            "주차"
        )
    ) {
        return "parking";
    }

    return null;
};

const normalizeFacility = (
    facility
) => {
    const accessibility = [
        ...new Set(
            (
                facility.accessibilities ??
                []
            )
                .filter(
                    (item) =>
                        item.availability ===
                        "AVAILABLE"
                )
                .map(
                    normalizeAccessibility
                )
                .filter(Boolean)
        ),
    ];

    return {
        id:
            facility.facilityId,

        name:
            facility.name,

        imageUrl:
            facility.representativeImageUrl,

        address:
            facility.address,

        distance:
            formatDistance(
                facility.distanceMeters
            ),

        sports:
            facility.sports
                ?.map(
                    (sport) =>
                        sport.name
                )
                .join(" · "),

        accessibility,

        voucherStatus:
            facility.voucherStatus,
    };
};

export default function FavoritesList() {
    const navigate =
        useNavigate();

    const [
        favorites,
        setFavorites,
    ] = useState([]);

    const [
        totalCount,
        setTotalCount,
    ] = useState(0);

    const [
        page,
        setPage,
    ] = useState(0);

    const [
        loading,
        setLoading,
    ] = useState(true);

    const [
        loadError,
        setLoadError,
    ] = useState(false);

    const [
        revision,
        setRevision,
    ] = useState(0);

    const [
        removing,
        setRemoving,
    ] = useState(false);

    useEffect(() => {
        let cancelled =
            false;

        async function load() {
            setLoading(true);
            setLoadError(false);

            try {
                const coords =
                    await getCurrentCoords();

                const response =
                    await getFavoriteFacilities({
                        ...coords,
                        page,
                        size:
                            PAGE_SIZE,
                    });

                if (cancelled) {
                    return;
                }

                if (
                    !response.success
                ) {
                    throw new Error(
                        "Favorites request failed"
                    );
                }

                const total =
                    response.data
                        ?.totalCount ??
                    0;

                setTotalCount(
                    total
                );

                const lastPage =
                    Math.max(
                        0,
                        Math.ceil(
                            total /
                                PAGE_SIZE
                        ) - 1
                    );

                if (
                    page > lastPage
                ) {
                    setPage(
                        lastPage
                    );

                    return;
                }

                const facilities =
                    response.data
                        ?.facilities ??
                    [];

                console.log(
                    "즐겨찾기 시설:",
                    facilities
                );

                setFavorites(
                    facilities.map(
                        normalizeFacility
                    )
                );
            } catch (error) {
                if (
                    !cancelled
                ) {
                    setLoadError(
                        true
                    );

                    console.error(
                        "즐겨찾기 목록 조회 실패:",
                        error
                    );
                }
            } finally {
                if (
                    !cancelled
                ) {
                    setLoading(
                        false
                    );
                }
            }
        }

        load();

        return () => {
            cancelled =
                true;
        };
    }, [
        page,
        revision,
    ]);

    const handleFacilityClick =
        (id) => {
            navigate(
                `/facility-detail/${id}`
            );
        };

    const handleFavoriteRemove =
        async (id) => {
            if (removing) {
                return;
            }

            setRemoving(
                true
            );

            try {
                const response =
                    await removeFavoriteFacility(
                        id
                    );

                if (
                    !response.success
                ) {
                    return;
                }

                setRevision(
                    (value) =>
                        value + 1
                );
            } catch (error) {
                console.error(
                    "즐겨찾기 해제 실패",
                    error
                );
            } finally {
                setRemoving(
                    false
                );
            }
        };

    return (
        <>
            <S.InfoSection>
                <S.Count>
                    총 {totalCount}개
                </S.Count>

                <S.Description>
                    내가 즐겨찾기한 시설을
                    한눈에 볼 수 있어요
                </S.Description>
            </S.InfoSection>

            {loading ? (
                <S.Description>
                    목록을 불러오는 중이에요.
                </S.Description>
            ) : loadError ? (
                <S.Description>
                    목록을 불러오지 못했어요.
                </S.Description>
            ) : favorites.length >
              0 ? (
                <S.List>
                    {favorites.map(
                        (
                            facility
                        ) => (
                            <FavoriteFacilityCard
                                key={
                                    facility.id
                                }
                                facility={
                                    facility
                                }
                                onClick={() =>
                                    handleFacilityClick(
                                        facility.id
                                    )
                                }
                                onFavoriteRemove={() =>
                                    handleFavoriteRemove(
                                        facility.id
                                    )
                                }
                            />
                        )
                    )}
                </S.List>
            ) : (
                <S.EmptyState>
                    <S.EmptyTitle>
                        아직 즐겨찾기한
                        시설이 없어요.
                    </S.EmptyTitle>

                    <S.EmptyDescription>
                        마음에 드는 시설을
                        즐겨찾기에 추가해보세요!
                    </S.EmptyDescription>
                </S.EmptyState>
            )}

            {!loadError && (
                <Pagination
                    page={page}
                    totalCount={
                        totalCount
                    }
                    onPageChange={
                        setPage
                    }
                    disabled={
                        loading ||
                        removing
                    }
                />
            )}
        </>
    );
}