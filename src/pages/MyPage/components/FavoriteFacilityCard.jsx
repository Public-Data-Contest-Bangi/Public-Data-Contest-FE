import wheelchairIcon from "../../../assets/icons/wheelchair-icon.png";
import rampIcon from "../../../assets/icons/ramp-icon.png";
import elevatorIcon from "../../../assets/icons/elevator-icon.png";
import restroomIcon from "../../../assets/icons/restroom-icon.png";
import parkingIcon from "../../../assets/icons/parking-icon.png";
import sportTagIcon from "../../../assets/icons/sport-tag-icon.png";

import * as S from "./FavoriteFacilityCard.styled";

const ACCESS_ICON_MAP = {
    wheelchair: wheelchairIcon,
    ramp: rampIcon,
    elevator: elevatorIcon,
    restroom: restroomIcon,
    parking: parkingIcon,
};

function AccessIcon({ type }) {
    const icon = ACCESS_ICON_MAP[type];

    if (!icon) return null;

    return (
        <S.AccessIcon
            src={icon}
            alt=""
        />
    );
}

export default function FavoriteFacilityCard({
    facility,
    onClick,
    onFavoriteRemove,
}) {
    const {
        name,
        distance,
        sports,
        accessibility,
    } = facility;

    const handleHeartClick = (event) => {
        event.stopPropagation();
        onFavoriteRemove();
    };

    return (
        <S.Card onClick={onClick}>
            <S.CardImage />

            <S.CardBody>
                <S.CardTitleRow>
                    <S.CardName>
                        {name}
                    </S.CardName>

                    <S.CardRight>
                        <S.CardDistance>
                            {distance}
                        </S.CardDistance>

                        <S.HeartButton
                            type="button"
                            aria-label="즐겨찾기 취소"
                            onClick={handleHeartClick}
                        >
                            ♥
                        </S.HeartButton>
                    </S.CardRight>
                </S.CardTitleRow>

                <S.CardSports>
                    <S.SportIcon
                        src={sportTagIcon}
                        alt=""
                    />

                    {sports}
                </S.CardSports>

                <S.CardAccessRow>
                    {accessibility.map((type) => (
                        <AccessIcon
                            key={type}
                            type={type}
                        />
                    ))}

                    <S.CardChevron>
                        ›
                    </S.CardChevron>
                </S.CardAccessRow>
            </S.CardBody>
        </S.Card>
    );
}