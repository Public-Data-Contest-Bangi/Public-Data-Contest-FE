import {
    TransitResultCard,
    TransitSummary,
    TransitTime,
    TransitMeta,
    TransitNotice,
    TransitLegList,
    TransitLeg,
    TransitTimeline,
    TransitTimelineDot,
    TransitTimelineLine,
    TransitLegContent,
    TransitLegTop,
    TransitModeBadge,
    TransitLegTime,
    TransitLegRoute,
    TransitLegStops,
} from '../FacilityMap.styled';

function formatMinutes(seconds) {
    if (!seconds) return 0;
    return Math.ceil(seconds / 60);
}

function formatFare(fare) {
    if (!fare) return '0원';
    return `${Number(fare).toLocaleString('ko-KR')}원`;
}

function getModeIcon(mode) {
    switch (String(mode || '').toUpperCase()) {
        case 'WALK':
            return '🚶';
        case 'BUS':
            return '🚌';
        case 'SUBWAY':
            return '🚇';
        case 'TRAIN':
            return '🚆';
        default:
            return '●';
    }
}

function getModeLabel(mode) {
    switch (String(mode || '').toUpperCase()) {
        case 'WALK':
            return '도보';
        case 'BUS':
            return '버스';
        case 'SUBWAY':
            return '지하철';
        case 'TRAIN':
            return '열차';
        default:
            return mode || '이동';
    }
}

function getRouteColor(routeColor, mode) {
    if (String(mode || '').toUpperCase() === 'WALK') {
        return '#9EA4AA';
    }

    if (/^#[0-9A-Fa-f]{6}$/.test(routeColor || '')) {
        return routeColor;
    }

    if (/^[0-9A-Fa-f]{6}$/.test(routeColor || '')) {
        return `#${routeColor}`;
    }

    return '#40D293';
}

function TransitRouteCard({ data }) {
    if (!data) return null;

    const legs = data.legs || [];

    return (
        <TransitResultCard>
            <TransitSummary>
                <TransitTime>
                    {formatMinutes(data.totalTimeSeconds)}분
                </TransitTime>

                <TransitMeta>
                    도보 {formatMinutes(data.totalWalkTimeSeconds)}분
                    {' · '}
                    환승 {data.transferCount ?? 0}회
                    {' · '}
                    {formatFare(data.totalFareWon)}
                </TransitMeta>
            </TransitSummary>

            {data.accessibilityNotice && (
                <TransitNotice>
                    <span>ⓘ</span>
                    {data.accessibilityNotice}
                </TransitNotice>
            )}

            <TransitLegList>
                {legs.map((leg, index) => {
                    const mode = String(
                        leg.mode || ''
                    ).toUpperCase();

                    const isWalk = mode === 'WALK';

                    const routeColor = getRouteColor(
                        leg.routeColor,
                        mode
                    );

                    return (
                        <TransitLeg
                            key={`${mode}-${leg.routeName}-${index}`}
                        >
                            <TransitTimeline>
                                <TransitTimelineDot
                                    $color={routeColor}
                                />

                                {index < legs.length - 1 && (
                                    <TransitTimelineLine />
                                )}
                            </TransitTimeline>

                            <TransitLegContent>
                                <TransitLegTop>
                                    <TransitModeBadge
                                        $color={routeColor}
                                        $walk={isWalk}
                                    >
                                        <span>
                                            {getModeIcon(mode)}
                                        </span>

                                        {isWalk
                                            ? '도보'
                                            : leg.routeName ||
                                              getModeLabel(mode)}
                                    </TransitModeBadge>

                                    <TransitLegTime>
                                        {formatMinutes(
                                            leg.timeSeconds
                                        )}
                                        분
                                    </TransitLegTime>
                                </TransitLegTop>

                                <TransitLegRoute>
                                    {leg.start?.name || '출발'}
                                    <span>→</span>
                                    {leg.end?.name || '도착'}
                                </TransitLegRoute>

                                {!isWalk &&
                                    leg.stops?.length > 0 && (
                                        <TransitLegStops>
                                            {mode === 'BUS'
                                                ? `경유 정류장 ${leg.stops.length}개`
                                                : mode === 'SUBWAY'
                                                  ? `경유 역 ${leg.stops.length}개`
                                                  : `경유 ${leg.stops.length}곳`}
                                        </TransitLegStops>
                                    )}
                            </TransitLegContent>
                        </TransitLeg>
                    );
                })}
            </TransitLegList>
        </TransitResultCard>
    );
}

export default TransitRouteCard;