// useRouteSearch.js

import { useEffect, useRef, useState } from 'react';

import {
    searchRoute,
    searchTransitRoute,
} from '../../../api/routes';

function normalizeRouteColor(color) {
    if (!color) {
        return '#2F7BFF';
    }

    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
        return color;
    }

    if (/^[0-9A-Fa-f]{6}$/.test(color)) {
        return `#${color}`;
    }

    return '#2F7BFF';
}

export function useRouteSearch({
    mapRef,
    departureCoord,
    arrivalCoord,
}) {
    const routePolylinesRef = useRef([]);
    const requestIdRef = useRef(0);

    useEffect(() => {
        return () => {
            requestIdRef.current += 1;
        };
    }, []);

    const [
        routeLoading,
        setRouteLoading,
    ] = useState(false);

    const [
        routeMessage,
        setRouteMessage,
    ] = useState('');

    const [
        walkRouteData,
        setWalkRouteData,
    ] = useState(null);

    const [
        transitRouteData,
        setTransitRouteData,
    ] = useState(null);

    const clearRouteLines = () => {
        routePolylinesRef.current.forEach(
            (polyline) => {
                polyline.setMap(null);
            }
        );

        routePolylinesRef.current = [];
    };

    const clearRoute = () => {
        requestIdRef.current += 1;

        clearRouteLines();

        setWalkRouteData(null);
        setTransitRouteData(null);
        setRouteMessage('');
        setRouteLoading(false);
    };

    const drawRoute = async (
        routeType
    ) => {
        const map = mapRef.current;
        const Tmapv2 = window.Tmapv2;

        if (!map || !Tmapv2) {
            return;
        }

        if (
            !departureCoord ||
            !arrivalCoord
        ) {
            return;
        }

        clearRoute();

        const requestId =
            requestIdRef.current;

        setRouteLoading(true);

        try {
            const data =
                await searchRoute({
                    startLatitude:
                        departureCoord.latitude,

                    startLongitude:
                        departureCoord.longitude,

                    endLatitude:
                        arrivalCoord.latitude,

                    endLongitude:
                        arrivalCoord.longitude,

                    routeType,
                });

            if (
                requestId !==
                requestIdRef.current
            ) {
                return;
            }

            setWalkRouteData({
                routeType:
                    data.routeType ??
                    routeType,

                totalTimeSeconds:
                    data.totalTimeSeconds,

                totalDistanceMeters:
                    data.totalDistanceMeters,
            });

            const coords = (
                data.pathSegments || []
            ).flatMap(
                (segment) =>
                    segment.coordinates ||
                    []
            );

            if (coords.length === 0) {
                setRouteMessage(
                    '도보 경로를 찾지 못했어요. 출발지와 도착지를 확인해주세요.'
                );

                return;
            }

            const path = coords.map(
                (coord) =>
                    new Tmapv2.LatLng(
                        coord.latitude,
                        coord.longitude
                    )
            );

            const bounds =
                new Tmapv2.LatLngBounds(
                    path[0]
                );

            path.forEach((point) => {
                bounds.extend(point);
            });

            const polyline =
                new Tmapv2.Polyline({
                    path,

                    strokeColor:
                        routeType ===
                        'AVOID_STAIRS'
                            ? '#9B59FF'
                            : '#2F7BFF',

                    strokeWeight: 8,
                    strokeOpacity: 1,
                    map,
                });

            routePolylinesRef.current =
                [polyline];

            map.fitBounds(bounds, {
                left: 30,
                top: 30,
                right: 30,
                bottom: 30,
            });
        } catch (err) {
            if (
                requestId !==
                requestIdRef.current
            ) {
                return;
            }

            clearRouteLines();
            setWalkRouteData(null);

            setRouteMessage(
                '도보 경로 검색에 실패했어요. 잠시 후 다시 시도해주세요.'
            );

            console.error(
                '도보 경로 검색 실패:',
                err.response?.status,
                err.response?.data ||
                    err.message
            );
        } finally {
            if (
                requestId ===
                requestIdRef.current
            ) {
                setRouteLoading(false);
            }
        }
    };

    const drawTransitRoute =
        async () => {
            const map =
                mapRef.current;

            const Tmapv2 =
                window.Tmapv2;

            if (!map || !Tmapv2) {
                return;
            }

            if (
                !departureCoord ||
                !arrivalCoord
            ) {
                return;
            }

            clearRoute();

            const requestId =
                requestIdRef.current;

            setRouteLoading(true);

            try {
                const data =
                    await searchTransitRoute({
                        startLatitude:
                            departureCoord.latitude,

                        startLongitude:
                            departureCoord.longitude,

                        endLatitude:
                            arrivalCoord.latitude,

                        endLongitude:
                            arrivalCoord.longitude,

                        count: 1,
                    });

                if (
                    requestId !==
                    requestIdRef.current
                ) {
                    return;
                }

                const itinerary =
                    data.itineraries?.[0];

                if (!itinerary) {
                    setRouteMessage(
                        '대중교통 경로를 찾지 못했어요. 출발지와 도착지를 확인해주세요.'
                    );

                    return;
                }

                setTransitRouteData({
                    accessibilityNotice:
                        data.accessibilityNotice,

                    ...itinerary,
                });

                const newPolylines =
                    [];

                routePolylinesRef.current =
                    newPolylines;

                const allPath = [];

                (
                    itinerary.legs || []
                ).forEach((leg) => {
                    const coords = (
                        leg.pathSegments ||
                        []
                    ).flatMap(
                        (segment) =>
                            segment.coordinates ||
                            []
                    );

                    if (
                        coords.length <
                        2
                    ) {
                        return;
                    }

                    const path =
                        coords.map(
                            (coord) =>
                                new Tmapv2.LatLng(
                                    coord.latitude,
                                    coord.longitude
                                )
                        );

                    allPath.push(
                        ...path
                    );

                    const mode =
                        String(
                            leg.mode || ''
                        ).toUpperCase();

                    const isWalk =
                        mode ===
                        'WALK';

                    const strokeColor =
                        isWalk
                            ? '#9EA4AA'
                            : normalizeRouteColor(
                                  leg.routeColor
                              );

                    const polyline =
                        new Tmapv2.Polyline(
                            {
                                path,
                                strokeColor,

                                strokeWeight:
                                    isWalk
                                        ? 6
                                        : 8,

                                strokeOpacity:
                                    1,

                                map,
                            }
                        );

                    newPolylines.push(
                        polyline
                    );
                });

                routePolylinesRef.current =
                    newPolylines;

                if (
                    allPath.length ===
                    0
                ) {
                    setRouteMessage(
                        '경로의 지도 좌표가 없어 상세 안내만 표시합니다.'
                    );

                    return;
                }

                const bounds =
                    new Tmapv2.LatLngBounds(
                        allPath[0]
                    );

                allPath.forEach(
                    (point) => {
                        bounds.extend(
                            point
                        );
                    }
                );

                map.fitBounds(
                    bounds,
                    {
                        left: 30,
                        top: 30,
                        right: 30,
                        bottom: 30,
                    }
                );
            } catch (err) {
                if (
                    requestId !==
                    requestIdRef.current
                ) {
                    return;
                }

                clearRouteLines();
                setTransitRouteData(
                    null
                );

                const errorData =
                    err.response?.data;

                if (
                    errorData?.code ===
                    'ROUTE_SEARCH_LIMIT_EXCEEDED'
                ) {
                    setRouteMessage(
                        errorData.message ||
                            '대중교통 경로 검색 횟수를 초과했어요. 잠시 후 다시 시도해주세요.'
                    );

                    return;
                }

                setRouteMessage(
                    '대중교통 경로 검색에 실패했어요. 잠시 후 다시 시도해주세요.'
                );

                console.error(
                    '대중교통 경로 검색 실패:',
                    err.response
                        ?.status,
                    errorData ||
                        err.message
                );
            } finally {
                if (
                    requestId ===
                    requestIdRef.current
                ) {
                    setRouteLoading(
                        false
                    );
                }
            }
        };

    return {
        routeLoading,
        routeMessage,

        walkRouteData,
        transitRouteData,

        drawRoute,
        drawTransitRoute,

        clearRoute,
        clearRouteLines,
    };
}