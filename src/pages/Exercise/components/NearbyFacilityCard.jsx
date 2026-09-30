import * as S from "../ExerciseDetailPage.styled";

function NearbyFacilityCard({ facility, onClick }) {
    return (
        <S.FacilityCard
            type="button"
            onClick={() => onClick(facility)}
        >

            <S.FacilityInfo>
                <S.FacilityTop>
                    <S.FacilityName>
                        {facility.name}
                    </S.FacilityName>

                    <S.Distance>
                        {facility.distance}
                    </S.Distance>
                </S.FacilityTop>

                <S.Address>
                    {facility.address}
                    <br />
                    {facility.detailAddress}
                </S.Address>
            </S.FacilityInfo>
        </S.FacilityCard>
    );
}

export default NearbyFacilityCard;