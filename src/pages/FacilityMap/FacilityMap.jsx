import Header from '../../components/common/Header';
import BottomNav from '../../components/BottomNav';
import { useFacilityMap } from './hooks/useFacilityMap';
import {
  Container,
  MapPlaceholder,
  MapContainer,
  MapPlaceholderText,
  MapLocateButton,
  ResearchAreaButton,
} from './FacilityMap.styled';

function FacilityMap() {
  const { mapContainerRef, mapLoaded, mapError, markersLoading, loadFacilityMarkers } = useFacilityMap();

  return (
    <Container>
      <Header title="지도" />

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

        <MapLocateButton type="button" aria-label="현재 위치로 이동">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="#1A1A1A" strokeWidth="1.8" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </MapLocateButton>
      </MapPlaceholder>

      <BottomNav />
    </Container>
  );
}

export default FacilityMap;