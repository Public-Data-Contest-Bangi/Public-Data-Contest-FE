import {
    FacilitySheet,
    SheetCloseButton,
    Thumbnail,
    SheetInfo,
    FacilityName,
    FacilityAddress,
    DetailButton,
} from '../FacilityMap.styled';

function FacilityPreviewSheet({
    facility,
    onClose,
    onDetail,
}) {
    if (!facility) {
        return null;
    }

    return (
        <FacilitySheet>
            <SheetCloseButton
                type="button"
                aria-label="닫기"
                onClick={onClose}
            >
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1l16 16M17 1L1 17"
                        stroke="#8C8C8C"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            </SheetCloseButton>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 18px 22px',
                }}
            >
                <Thumbnail />

                <SheetInfo>
                    <FacilityName>
                        {facility.name}
                    </FacilityName>

                    <FacilityAddress>
                        {facility.address}
                    </FacilityAddress>
                </SheetInfo>
            </div>

            <div
                style={{
                    padding: '0 18px 10px',
                }}
            >
                <DetailButton
                    type="button"
                    onClick={onDetail}
                >
                    상세보기
                </DetailButton>
            </div>
        </FacilitySheet>
    );
}

export default FacilityPreviewSheet;