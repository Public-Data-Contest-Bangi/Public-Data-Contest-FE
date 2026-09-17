import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FavoriteFacilityCard from "./FavoriteFacilityCard";

import { FAVORITE_FACILITIES } from "../constants/favoriteFacilities";

import * as S from "../FavoritesPage.styled";

export default function FavoritesList() {
    const navigate = useNavigate();

    const [favorites, setFavorites] =
        useState(FAVORITE_FACILITIES);

    const handleFacilityClick = (id) => {
        navigate(`/facility-detail/${id}`);
    };

    const handleFavoriteRemove = (id) => {
        setFavorites((prev) =>
            prev.filter(
                (facility) =>
                    facility.id !== id
            )
        );
    };

    return (
        <>
            <S.InfoSection>
                <S.Count>
                    총 {favorites.length}개
                </S.Count>

                <S.Description>
                    내가 즐겨찾기한 시설을 한눈에 볼 수 있어요
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
                <S.EmptyMessage>
                    즐겨찾기한 시설이 없어요.
                </S.EmptyMessage>
            )}
        </>
    );
}