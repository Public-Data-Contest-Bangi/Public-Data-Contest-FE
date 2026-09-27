import Button from '../../../components/common/Button';

import swapIcon from '../../../assets/icons/swap-icon.png';
import locationIcon from '../../../assets/icons/location-icon.png';

import {
    RouteCard,
    Row,
    Dot,
    PinIconWrap,
    DashedLine,
    SwapButton,
    RowLabel,
    RowValue,
    GpsButton,
    RouteTabs,
    RouteTab,
    AvoidStairsRow,
    AvoidStairsToggle,
    SearchButtonWrap,
} from '../FacilityMap.styled';

function RouteSearchCard({
    departure,
    arrival,
    locating,
    routeLoading,
    routeMode,
    avoidStairs,
    onSwap,
    onArrivalSearch,
    onCurrentLocation,
    onRouteModeChange,
    onToggleAvoidStairs,
    onSearchRoute,
}) {
    return (
        <>
            <RouteCard>
                <Row>
                    <Dot />

                    <RowLabel>출발</RowLabel>

                    <RowValue
                        as="button"
                        type="button"
                        onClick={onCurrentLocation}
                        style={{
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                        }}
                    >
                        {departure}
                    </RowValue>

                    <GpsButton
                        type="button"
                        aria-label="현재 위치로"
                        onClick={onCurrentLocation}
                        disabled={locating}
                    >
                        <img
                            src={locationIcon}
                            alt=""
                            style={{
                                width: 24,
                                height: 24,
                                objectFit: 'contain',
                            }}
                        />
                    </GpsButton>
                </Row>

                <DashedLine>
                    <SwapButton
                        type="button"
                        aria-label="출발/도착 바꾸기"
                        onClick={onSwap}
                    >
                        <img
                            src={swapIcon}
                            alt=""
                            style={{
                                width: 14,
                                height: 16,
                                objectFit: 'contain',
                            }}
                        />
                    </SwapButton>
                </DashedLine>

                <Row>
                    <PinIconWrap>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 15S13.5 9.5 13.5 6a5.5 5.5 0 1 0-11 0C2.5 9.5 8 15 8 15Z"
                                fill="#FF5A5F"
                            />
                            <circle
                                cx="8"
                                cy="6"
                                r="2"
                                fill="#ffffff"
                            />
                        </svg>
                    </PinIconWrap>

                    <RowLabel>도착</RowLabel>

                    <RowValue
                        as="button"
                        type="button"
                        onClick={onArrivalSearch}
                        style={{
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            color: arrival
                                ? '#1a1a1a'
                                : '#b3b3b3',
                        }}
                    >
                        {arrival || '도착지를 검색해주세요'}
                    </RowValue>
                </Row>
            </RouteCard>

            <RouteTabs>
                <RouteTab
                    type="button"
                    $active={routeMode === 'WALK'}
                    onClick={() =>
                        onRouteModeChange('WALK')
                    }
                >
                    🚶 도보
                </RouteTab>

                <RouteTab
                    type="button"
                    $active={routeMode === 'TRANSIT'}
                    onClick={() =>
                        onRouteModeChange('TRANSIT')
                    }
                >
                    🚌 대중교통
                </RouteTab>
            </RouteTabs>

            {routeMode === 'WALK' && (
                <AvoidStairsRow>
                    <span>계단 회피 경로</span>

                    <AvoidStairsToggle
                        type="button"
                        role="switch"
                        aria-checked={avoidStairs}
                        $active={avoidStairs}
                        onClick={onToggleAvoidStairs}
                    >
                        <span />
                    </AvoidStairsToggle>
                </AvoidStairsRow>
            )}

            <SearchButtonWrap>
                <Button
                    type="button"
                    radius="16px"
                    onClick={onSearchRoute}
                    disabled={routeLoading}
                >
                    {routeLoading
                        ? '경로 검색 중...'
                        : routeMode === 'TRANSIT'
                            ? '🚌 대중교통 경로 검색'
                            : '➤ 도보 경로 검색'}
                </Button>
            </SearchButtonWrap>
        </>
    );
}

export default RouteSearchCard;