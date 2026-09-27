import {
    FacilitySheet,
    SheetToggle,
    SheetCloseButton,
    Thumbnail,
    SheetInfo,
    FacilityName,
    FacilityAddress,
    ChevronButton,
    SheetExpanded,
    AccessibilityLabelRow,
    AccessibilityDot,
    AccessibilityLabelText,
    AccessibilityEmptyText,
    DetailButton,
} from '../FacilityMap.styled';

function FacilityPreviewSheet({
    facility,
    expanded,
    onToggle,
    onClose,
    onDetail,
}) {
    if (!facility) return null;

    return (
        <FacilitySheet>
            <SheetCloseButton
                type="button"
                aria-label="닫기"
                onClick={onClose}
            >
                ✕
            </SheetCloseButton>

            <SheetToggle
                type="button"
                onClick={onToggle}
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

                <ChevronButton
                    $expanded={expanded}
                >
                    ▲
                </ChevronButton>
            </SheetToggle>

            {expanded && (
                <SheetExpanded>
                    <AccessibilityLabelRow>
                        <AccessibilityDot />

                        <AccessibilityLabelText>
                            접근성 정보
                        </AccessibilityLabelText>
                    </AccessibilityLabelRow>

                    <AccessibilityEmptyText>
                        상세 페이지에서 확인할 수 있어요
                    </AccessibilityEmptyText>

                    <DetailButton
                        type="button"
                        onClick={onDetail}
                    >
                        상세보기
                    </DetailButton>
                </SheetExpanded>
            )}
        </FacilitySheet>
    );
}

export default FacilityPreviewSheet;