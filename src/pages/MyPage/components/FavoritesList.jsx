import { useNavigate } from "react-router-dom";

import FavoriteFacilityCard from "./FavoriteFacilityCard";

import { FAVORITE_FACILITIES } from "../constants/favoriteFacilities";

import * as S from "../FavoritesPage.styled";

export default function FavoritesList() {
    const navigate = useNavigate();

    const handleFacilityClick = (id) => {
        navigate(`/facility-detail/${id}`);
    };

    return (
        <>
            <S.InfoSection>
                <S.Count>
                    총 {FAVORITE_FACILITIES.length}개
                </S.Count>

                <S.Description>
                    내가 즐겨찾기한 시설을 한눈에 볼 수 있어요
                </S.Description>
            </S.InfoSection>

            <S.List>
                {FAVORITE_FACILITIES.map((facility) => (
                    <FavoriteFacilityCard
                        key={facility.id}
                        facility={facility}
                        onClick={() =>
                            handleFacilityClick(facility.id)
                        }
                    />
                ))}
            </S.List>
        </>
    );
}