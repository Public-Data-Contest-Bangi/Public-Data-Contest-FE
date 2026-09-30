import elevatorIcon from "../../../assets/icons/elevator-icon.png";
import parkingIcon from "../../../assets/icons/parking-icon.png";
import rampIcon from "../../../assets/icons/ramp-icon.png";
import restroomIcon from "../../../assets/icons/restroom-icon.png";
import sportTagIcon from "../../../assets/icons/sport-tag-icon.png";
import wheelchairIcon from "../../../assets/icons/wheelchair-icon.png";

import * as S from "./FavoriteFacilityCard.styled";

const ACCESS_ICON_MAP = {
    wheelchair:
        wheelchairIcon,

    ramp:
        rampIcon,

    elevator:
        elevatorIcon,

    restroom:
        restroomIcon,

    parking:
        parkingIcon,
};

const ACCESS_LABEL_MAP = {
    wheelchair:
        "휠체어 접근",

    ramp:
        "경사로",

    elevator:
        "엘리베이터",

    restroom:
        "장애인 화장실",

    parking:
        "장애인 주차",
};

function AccessIcon({
    type,
}) {
    const icon =
        ACCESS_ICON_MAP[
            type
        ];

    if (!icon) {
        return null;
    }

    return (
        <S.AccessIcon
            src={icon}
            alt={
                ACCESS_LABEL_MAP[
                    type
                ] ?? ""
            }
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
        address,
        distance,
        sports,
        accessibility = [],
    } = facility;

    const handleHeartClick =
        (event) => {
            event.stopPropagation();

            onFavoriteRemove();
        };

    return (
        <S.Card
            type="button"
            onClick={onClick}
        >
            <S.CardBody>
                <S.TopRow>
                    <S.CardName>
                        {name}
                    </S.CardName>

                    <S.HeartButton
                        type="button"
                        aria-label="즐겨찾기 취소"
                        onClick={
                            handleHeartClick
                        }
                    >
                        ♥
                    </S.HeartButton>
                </S.TopRow>

                <S.MetaRow>
                    {address && (
                        <S.Address>
                            {
                                address
                            }
                        </S.Address>
                    )}

                    {distance && (
                        <S.Distance>
                            {
                                distance
                            }
                        </S.Distance>
                    )}
                </S.MetaRow>

                {sports && (
                    <S.SportRow>
                        <S.SportIcon
                            src={
                                sportTagIcon
                            }
                            alt=""
                        />

                        <span>
                            {
                                sports
                            }
                        </span>
                    </S.SportRow>
                )}

                <S.BottomRow>
                    <S.AccessList>
                        {accessibility.map(
                            (type) => (
                                <S.AccessBadge
                                    key={
                                        type
                                    }
                                >
                                    <AccessIcon
                                        type={
                                            type
                                        }
                                    />
                                </S.AccessBadge>
                            )
                        )}
                    </S.AccessList>

                    <S.CardChevron
                        aria-hidden="true"
                    >
                        ›
                    </S.CardChevron>
                </S.BottomRow>
            </S.CardBody>
        </S.Card>
    );
}