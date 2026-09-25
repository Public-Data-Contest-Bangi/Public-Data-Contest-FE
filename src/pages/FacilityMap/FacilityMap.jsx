import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import BottomNav from '../../components/BottomNav';
import swapIcon from '../../assets/icons/swap-icon.png';
import locationIcon from '../../assets/icons/location-icon.png';
import { useFacilityMap } from './hooks/useFacilityMap';
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
  AvoidStairsRow,
  AvoidStairsToggle,
  MapPlaceholder,
  MapContainer,
  MapPlaceholderText,
  MapLocateButton,
  ResearchAreaButton,
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
} from './FacilityMap.styled';

function FacilityMap() {
  const {
    mapContainerRef,
    mapLoaded,
    mapError,
    markersLoading,
    loadFacilityMarkers,
    departure,
    arrival,
    locating,
    routeLoading,
    avoidStairs,
    handleSwap,
    goArrivalSearch,
    moveToCurrentLocation,
    goSearchRoute,
    toggleAvoidStairs,
    selectedFacility,
    sheetExpanded,
    toggleSheet,
    closeSheet,
    goSelectedFacilityDetail,
  } = useFacilityMap();

  return (
    <Container>
      <Header title="지도" />

      <RouteCard>
        <Row>
          <Dot />
          <RowLabel>출발</RowLabel>
          <RowValue
            as="button"
            type="button"
            style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={moveToCurrentLocation}
          >
            {departure}
          </RowValue>
          <GpsButton type="button" aria-label="현재 위치로" onClick={moveToCurrentLocation} disabled={locating}>
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
          <RowValue
            as="button"
            type="button"
            style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: arrival ? '#1a1a1a' : '#b3b3b3' }}
            onClick={goArrivalSearch}
          >
            {arrival || '도착지를 검색해주세요'}
          </RowValue>
        </Row>
      </RouteCard>

      <AvoidStairsRow>
        <span>계단 회피 경로</span>
        <AvoidStairsToggle
          type="button"
          role="switch"
          aria-checked={avoidStairs}
          $active={avoidStairs}
          onClick={toggleAvoidStairs}
        >
          <span />
        </AvoidStairsToggle>
      </AvoidStairsRow>

      <SearchButtonWrap>
        <Button type="button" radius="16px" onClick={goSearchRoute} disabled={routeLoading}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 8l6 2 2 6 6-14Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            {routeLoading ? '경로 검색 중...' : '경로 검색'}
          </span>
        </Button>
      </SearchButtonWrap>

      <MapPlaceholder>
        <MapContainer ref={mapContainerRef} />

        {(!mapLoaded || mapError) && (
          <>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22s7-6.2 7-11.5A7 7 0 0 0 5 10.5C5 15.8 12 22 12 22Z"
                stroke="#B3C2C2"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10.5" r="2.3" stroke="#B3C2C2" strokeWidth="1.8" />
            </svg>
            <MapPlaceholderText>
              {mapError ? '지도를 불러오지 못했어요' : '지도 불러오는 중...'}
            </MapPlaceholderText>
          </>
        )}

        {mapLoaded && (
          <ResearchAreaButton type="button" onClick={loadFacilityMarkers} disabled={markersLoading}>
            {markersLoading ? '검색 중...' : '이 위치에서 다시 찾기'}
          </ResearchAreaButton>
        )}

        <MapLocateButton type="button" aria-label="현재 위치로 이동" onClick={moveToCurrentLocation} disabled={locating}>
          <img src={locationIcon} alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} />
        </MapLocateButton>
      </MapPlaceholder>

      {selectedFacility && (
        <FacilitySheet>
          <SheetCloseButton type="button" aria-label="닫기" onClick={closeSheet}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1l16 16M17 1L1 17" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </SheetCloseButton>

          <SheetToggle type="button" onClick={toggleSheet}>
            <Thumbnail />
            <SheetInfo>
              <FacilityName>{selectedFacility.name}</FacilityName>
              <FacilityAddress>{selectedFacility.address}</FacilityAddress>
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

              <AccessibilityEmptyText>상세 페이지에서 확인할 수 있어요</AccessibilityEmptyText>

              <DetailButton type="button" onClick={goSelectedFacilityDetail}>
                상세보기
              </DetailButton>
            </SheetExpanded>
          )}
        </FacilitySheet>
      )}

      <BottomNav />
    </Container>
  );
}

export default FacilityMap;