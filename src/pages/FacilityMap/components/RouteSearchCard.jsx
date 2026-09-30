// RouteSearchCard.jsx

import Button from '../../../components/common/Button';

import swapIcon from '../../../assets/icons/swap-icon.png';
import CurrentLocationIcon from '../../../components/common/CurrentLocationIcon';

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

function formatWalkTime(
    seconds
) {
    if (
        seconds === null ||
        seconds === undefined
    ) {
        return '';
    }

    const totalMinutes =
        Math.ceil(
            seconds / 60
        );

    if (
        totalMinutes <
        60
    ) {
        return `${totalMinutes}분`;
    }

    const hours =
        Math.floor(
            totalMinutes /
            60
        );

    const minutes =
        totalMinutes % 60;

    if (
        minutes === 0
    ) {
        return `${hours}시간`;
    }

    return `${hours}시간 ${minutes}분`;
}

function formatWalkDistance(
    meters
) {
    if (
        meters === null ||
        meters === undefined
    ) {
        return '';
    }

    if (
        meters < 1000
    ) {
        return `${Math.round(
            meters
        )}m`;
    }

    return `${(
        meters / 1000
    ).toFixed(1)}km`;
}

function RouteSearchCard({
    departure,
    arrival,

    locating,
    routeLoading,
    routeMode,
    avoidStairs,
    walkRouteData,

    onSwap,

    onDepartureSearch,
    onArrivalSearch,

    onCurrentLocation,

    onRouteModeChange,
    onToggleAvoidStairs,
    onSearchRoute,
}) {
    const walkTime =
        formatWalkTime(
            walkRouteData
                ?.totalTimeSeconds
        );

    const walkDistance =
        formatWalkDistance(
            walkRouteData
                ?.totalDistanceMeters
        );

    const walkSummary = [
        walkTime,
        walkDistance,
    ]
        .filter(Boolean)
        .join(' · ');

    return (
        <>
            <RouteCard>
                <Row>
                    <Dot />

                    <RowLabel>
                        출발
                    </RowLabel>

                    <RowValue
                        as="button"
                        type="button"
                        style={{
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,

                            color: departure
                                ? '#1a1a1a'
                                : '#b3b3b3',
                        }}
                        onClick={
                            onDepartureSearch
                        }
                    >
                        {departure ||
                            '출발지를 검색해주세요'}
                    </RowValue>

                    <GpsButton
                        type="button"
                        aria-label="현재 위치로"
                        onClick={
                            onCurrentLocation
                        }
                        disabled={
                            locating
                        }
                    >
                        <CurrentLocationIcon />
                    </GpsButton>
                </Row>

                <DashedLine>
                    <SwapButton
                        type="button"
                        aria-label="출발/도착 바꾸기"
                        onClick={
                            onSwap
                        }
                    >
                        <img
                            src={
                                swapIcon
                            }
                            alt=""
                            style={{
                                width: 14,
                                height: 16,

                                objectFit:
                                    'contain',
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

                    <RowLabel>
                        도착
                    </RowLabel>

                    <RowValue
                        as="button"
                        type="button"
                        onClick={
                            onArrivalSearch
                        }
                        style={{
                            textAlign:
                                'left',

                            background:
                                'none',

                            border:
                                'none',

                            cursor:
                                'pointer',

                            padding: 0,

                            color:
                                arrival
                                    ? '#1a1a1a'
                                    : '#b3b3b3',
                        }}
                    >
                        {arrival ||
                            '도착지를 검색해주세요'}
                    </RowValue>
                </Row>
            </RouteCard>

            <RouteTabs>
                <RouteTab
                    type="button"
                    $active={
                        routeMode ===
                        'WALK'
                    }
                    onClick={() =>
                        onRouteModeChange(
                            'WALK'
                        )
                    }
                >
                    🚶 도보
                </RouteTab>

                <RouteTab
                    type="button"
                    $active={
                        routeMode ===
                        'TRANSIT'
                    }
                    onClick={() =>
                        onRouteModeChange(
                            'TRANSIT'
                        )
                    }
                >
                    🚌 대중교통
                </RouteTab>
            </RouteTabs>

            {routeMode ===
                'WALK' && (
                    <AvoidStairsRow>
                        <span>
                            계단 회피 경로
                        </span>

                        <AvoidStairsToggle
                            type="button"
                            role="switch"
                            aria-checked={
                                avoidStairs
                            }
                            $active={
                                avoidStairs
                            }
                            onClick={
                                onToggleAvoidStairs
                            }
                        >
                            <span />
                        </AvoidStairsToggle>
                    </AvoidStairsRow>
                )}

            {routeMode ===
                'WALK' &&
                walkRouteData &&
                walkSummary && (
                    <div
                        style={{
                            margin:
                                '10px 20px 0',

                            padding:
                                '12px 14px',

                            borderRadius:
                                '12px',

                            background:
                                '#F1FBF7',

                            color:
                                '#333333',

                            fontSize:
                                '14px',

                            fontWeight:
                                600,

                            lineHeight:
                                1.4,
                        }}
                    >
                        🚶 약{' '}
                        {
                            walkSummary
                        }
                    </div>
                )}

            <SearchButtonWrap>
                <Button
                    type="button"
                    radius="16px"
                    onClick={
                        onSearchRoute
                    }
                    disabled={
                        routeLoading
                    }
                >
                    {routeLoading
                        ? '경로 검색 중...'
                        : routeMode ===
                            'TRANSIT'
                            ? '🚌 대중교통 경로 검색'
                            : '➤ 도보 경로 검색'}
                </Button>
            </SearchButtonWrap>
        </>
    );
}

export default RouteSearchCard;