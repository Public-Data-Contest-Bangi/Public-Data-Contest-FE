import {
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";

import {
    getFavoriteFacilities,
    removeFavoriteFacility,
} from "../../../api/favorite";

import FavoriteFacilityCard from "./FavoriteFacilityCard";

import * as S from "../FavoritesPage.styled";

const formatDistance = (distanceMeters) => {
    if (
        distanceMeters === null ||
        distanceMeters === undefined
    ) {
        return "";
    }

    if (distanceMeters < 1000) {
        return `${Math.round(distanceMeters)}m`;
    }

    return `${(
        distanceMeters / 1000
    ).toFixed(1)}km`;
};

const normalizeAccessibilityCode = (code) => {
    if (!code) return null;

    return code.toLowerCase();
};

const normalizeFacility = (facility) => {
    return {
        id: facility.facilityId,
        name: facility.name,

        imageUrl:
            facility.representativeImageUrl,

        address: facility.address,

        distance: formatDistance(
            facility.distanceMeters
        ),

        sports: facility.sports
            ?.map((sport) => sport.name)
            .join(" · "),

        accessibility:
            facility.accessibilities
                ?.filter(
                    (item) =>
                        item.availability ===
                        "AVAILABLE"
                )
                .map((item) =>
                    normalizeAccessibilityCode(
                        item.code
                    )
                )
                .filter(Boolean) ?? [],

        voucherStatus:
            facility.voucherStatus,
    };
};

export default function FavoritesList() {
    const navigate = useNavigate();

    const [favorites, setFavorites] =
        useState([]);

    const [totalCount, setTotalCount] =
        useState(0);

    const fetchFavorites = async (
        latitude,
        longitude
    ) => {
        try {
            const response =
                await getFavoriteFacilities({
                    latitude,
                    longitude,
                    page: 0,
                    size: 20,
                });

            const facilities =
                response.data?.facilities ?? [];

            setFavorites(
                facilities.map(
                    normalizeFacility
                )
            );

            setTotalCount(
                response.data?.totalCount ?? 0
            );
        } catch (error) {
            console.error(
                "즐겨찾기 목록 조회 실패",
                error
            );
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            fetchFavorites();
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {
                    latitude,
                    longitude,
                } = position.coords;

                fetchFavorites(
                    latitude,
                    longitude
                );
            },

            () => {
                // 위치 권한을 허용하지 않아도
                // 즐겨찾기 목록 자체는 조회
                fetchFavorites();
            }
        );
    }, []);

    const handleFacilityClick = (id) => {
        navigate(`/facility-detail/${id}`);
    };

    const handleFavoriteRemove = async (
        id
    ) => {
        try {
            const response =
                await removeFavoriteFacility(id);

            if (!response.success) return;

            setFavorites((prev) =>
                prev.filter(
                    (facility) =>
                        facility.id !== id
                )
            );

            setTotalCount((prev) =>
                Math.max(prev - 1, 0)
            );
        } catch (error) {
            console.error(
                "즐겨찾기 해제 실패",
                error
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

            {favorites.length > 0 ? (
                <S.List>
                    {favorites.map(
                        (facility) => (
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
        </>
    );
}