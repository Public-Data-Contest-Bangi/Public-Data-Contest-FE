import CurrentLocationIcon from '../../../components/common/CurrentLocationIcon';

import {
    MapPlaceholder,
    MapContainer,
    MapPlaceholderText,
    MapLocateButton,
    ResearchAreaButton,
} from '../FacilityMap.styled';

function MapArea({
    mapContainerRef,
    mapLoaded,
    mapError,
    markersLoading,
    locating,
    onReloadMarkers,
    onCurrentLocation,
}) {
    return (
        <MapPlaceholder>
            <MapContainer ref={mapContainerRef} />

            {(!mapLoaded || mapError) && (
                <>
                    <MapPlaceholderText>
                        {mapError
                            ? '지도를 불러오지 못했어요'
                            : '지도 불러오는 중...'}
                    </MapPlaceholderText>
                </>
            )}

            {mapLoaded && (
                <ResearchAreaButton
                    type="button"
                    onClick={onReloadMarkers}
                    disabled={markersLoading}
                >
                    {markersLoading
                        ? '검색 중...'
                        : '이 위치에서 다시 찾기'}
                </ResearchAreaButton>
            )}

            <MapLocateButton
                type="button"
                aria-label="현재 위치로 이동"
                onClick={onCurrentLocation}
                disabled={locating}
            >
                <CurrentLocationIcon />
            </MapLocateButton>
        </MapPlaceholder>
    );
}

export default MapArea;