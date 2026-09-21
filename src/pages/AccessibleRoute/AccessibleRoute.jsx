import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import BottomNav from '../../components/BottomNav';
import { useAccessibleRoute } from './hooks/useAccessibleRoute';
import { ACCESSIBILITY_ITEMS, FACILITY } from './utils/accessibleRouteConstants';
import swapIcon from '../../assets/icons/swap-icon.png';
import locationIcon from '../../assets/icons/location-icon.png';
import {
  Container,
  RouteCard,
  Row,
  Dot,
  PinIconWrap,
  DashedLine,
  SwapButton,
  RowLabel,
  RowValue,
  GpsButton,
  SearchButtonWrap,
  MapPlaceholder,
  MapPlaceholderText,
  MapLocateButton,
  FacilitySheet,
  SheetToggle,
  Thumbnail,
  SheetInfo,
  FacilityName,
  FacilityAddress,
  ChevronButton,
  SheetExpanded,
  AccessibilityLabelRow,
  AccessibilityDot,
  AccessibilityLabelText,
  AccessibilityGrid,
  AccessibilityItem,
  AccessibilityIconWrap,
  AccessibilityItemLabel,
} from './AccessibleRoute.styled';

function AccessibleRoute() {
  const {
    departure,
    arrival,
    sheetExpanded,
    handleSwap,
    handleSearchRoute,
    toggleSheet,
    goDepartureSearch,
  } = useAccessibleRoute();

  return (
    <Container>
      <Header title="무장애 경로 안내" />

      <RouteCard>
        <Row>
          <Dot />
          <RowLabel>출발</RowLabel>
          <RowValue
            as="button"
            type="button"
            style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={goDepartureSearch}
          >
            {departure}
          </RowValue>
          <GpsButton type="button" aria-label="현재 위치로">
            <img src={locationIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />
          </GpsButton>
        </Row>

        <DashedLine>
          <SwapButton type="button" aria-label="출발/도착 바꾸기" onClick={handleSwap}>
            <img src={swapIcon} alt="" style={{ width: 14, height: 16, objectFit: 'contain' }} />
          </SwapButton>
        </DashedLine>

        <Row>
          <PinIconWrap>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 15S13.5 9.5 13.5 6a5.5 5.5 0 1 0-11 0C2.5 9.5 8 15 8 15Z"
                fill="#FF5A5F"
              />
              <circle cx="8" cy="6" r="2" fill="#ffffff" />
            </svg>
          </PinIconWrap>
          <RowLabel>도착</RowLabel>
          <RowValue>{arrival}</RowValue>
        </Row>
      </RouteCard>

      <SearchButtonWrap>
        <Button type="button" radius="16px" onClick={handleSearchRoute}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 8l6 2 2 6 6-14Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            경로 검색
          </span>
        </Button>
      </SearchButtonWrap>

      <MapPlaceholder>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22s7-6.2 7-11.5A7 7 0 0 0 5 10.5C5 15.8 12 22 12 22Z"
            stroke="#B3C2C2"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10.5" r="2.3" stroke="#B3C2C2" strokeWidth="1.8" />
        </svg>
        <MapPlaceholderText>지도 영역 (준비 중)</MapPlaceholderText>

        <MapLocateButton type="button" aria-label="현재 위치로 이동">
          <img src={locationIcon} alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} />
        </MapLocateButton>
      </MapPlaceholder>

      <FacilitySheet>
        <SheetToggle type="button" onClick={toggleSheet}>
          <Thumbnail />
          <SheetInfo>
            <FacilityName>{FACILITY.name}</FacilityName>
            <FacilityAddress>{FACILITY.address}</FacilityAddress>
          </SheetInfo>
          <ChevronButton $expanded={sheetExpanded} aria-label="상세정보 펼치기/접기">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.5L6 1.5L11 6.5" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ChevronButton>
        </SheetToggle>

        {sheetExpanded && (
          <SheetExpanded>
            <AccessibilityLabelRow>
              <AccessibilityDot />
              <AccessibilityLabelText>접근성 정보</AccessibilityLabelText>
            </AccessibilityLabelRow>

            <AccessibilityGrid>
              {ACCESSIBILITY_ITEMS.map((item) => (
                <AccessibilityItem key={item.label}>
                  <AccessibilityIconWrap>
                    <img src={item.icon} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                  </AccessibilityIconWrap>
                  <AccessibilityItemLabel>{item.label}</AccessibilityItemLabel>
                </AccessibilityItem>
              ))}
            </AccessibilityGrid>
          </SheetExpanded>
        )}
      </FacilitySheet>

      <BottomNav />
    </Container>
  );
}

export default AccessibleRoute;