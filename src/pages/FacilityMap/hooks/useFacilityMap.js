// useFacilityMap.js

import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    useLocation,
    useNavigate,
} from 'react-router-dom';

import {
    fetchFacilityMarkers,
} from '../../../api/facilities';

import {
    getCurrentCoords,
} from '../../../utils/geolocation';

import {
    useRouteSearch,
} from './useRouteSearch';

import {
    estimateDelta,
    latLngToWorldPixel,
} from '../utils/mapUtils';

export function useFacilityMap() {
    const navigate =
        useNavigate();

    const location =
        useLocation();

    const mapContainerRef =
        useRef(null);

    const mapRef =
        useRef(null);

    const facilityMarkersRef =
        useRef([]);

    const currentLocationMarkerRef =
        useRef(null);

    const arrivalMarkerRef =
        useRef(null);

    const facilitiesDataRef =
        useRef([]);

    const clustersDataRef =
        useRef([]);

    const [
        mapLoaded,
        setMapLoaded,
    ] = useState(false);

    const [
        mapError,
        setMapError,
    ] = useState(false);

    const [
        markersLoading,
        setMarkersLoading,
    ] = useState(false);

    const [
        locating,
        setLocating,
    ] = useState(false);

    const [
        avoidStairs,
        setAvoidStairs,
    ] = useState(false);

    const [
        departure,
        setDeparture,
    ] = useState(
        '현재 위치'
    );

    const [
        arrival,
        setArrival,
    ] = useState(
        location.state
            ?.arrival || ''
    );

    const [
        arrivalCoord,
        setArrivalCoord,
    ] = useState(
        location.state
            ?.arrivalCoord ||
            null
    );

    const [
        departureCoord,
        setDepartureCoord,
    ] = useState(null);

    const [
        selectedFacility,
        setSelectedFacility,
    ] = useState(null);

    const {
        routeLoading,
        routeMessage,

        walkRouteData,
        transitRouteData,

        drawRoute,
        drawTransitRoute,

        clearRoute,
        clearRouteLines,
    } = useRouteSearch({
        mapRef,
        departureCoord,
        arrivalCoord,
    });

    const clearFacilityMarkers =
        () => {
            facilityMarkersRef.current.forEach(
                (marker) => {
                    marker.setMap(
                        null
                    );
                }
            );

            facilityMarkersRef.current =
                [];
        };

    const loadFacilityMarkers =
        async () => {
            const map =
                mapRef.current;

            const Tmapv2 =
                window.Tmapv2;

            if (
                !map ||
                !Tmapv2
            ) {
                return;
            }

            setMarkersLoading(
                true
            );

            let south;
            let north;
            let west;
            let east;
            let zoom;

            try {
                zoom =
                    map.getZoom();

                const bounds =
                    map.getBounds();

                const sw =
                    bounds.getSouthWest
                        ? bounds.getSouthWest()
                        : bounds.getSW();

                const ne =
                    bounds.getNorthEast
                        ? bounds.getNorthEast()
                        : bounds.getNE();

                south = sw.lat();
                west = sw.lng();

                north = ne.lat();
                east = ne.lng();
            } catch {
                const center =
                    map.getCenter();

                zoom =
                    map.getZoom();

                const delta =
                    estimateDelta(
                        zoom
                    );

                south =
                    center.lat() -
                    delta;

                north =
                    center.lat() +
                    delta;

                west =
                    center.lng() -
                    delta;

                east =
                    center.lng() +
                    delta;
            }

            try {
                const data =
                    await fetchFacilityMarkers(
                        {
                            south,
                            north,
                            west,
                            east,
                            zoom,
                        }
                    );

                clearFacilityMarkers();

                facilitiesDataRef.current =
                    data.facilities ||
                    [];

                clustersDataRef.current =
                    data.clusters ||
                    [];

                const newMarkers =
                    [];

                (
                    data.facilities ||
                    []
                ).forEach(
                    (
                        facility
                    ) => {
                        const marker =
                            new Tmapv2.Marker(
                                {
                                    position:
                                        new Tmapv2.LatLng(
                                            facility.latitude,
                                            facility.longitude
                                        ),

                                    icon:
                                        'data:image/svg+xml;charset=UTF-8,' +
                                        encodeURIComponent(
                                            '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><circle cx="13" cy="13" r="9" fill="#FFFFFF" stroke="#40D293" stroke-width="3"/></svg>'
                                        ),

                                    iconSize:
                                        new Tmapv2.Size(
                                            26,
                                            26
                                        ),

                                    map,
                                }
                            );

                        newMarkers.push(
                            marker
                        );
                    }
                );

                (
                    data.clusters ||
                    []
                ).forEach(
                    (
                        cluster
                    ) => {
                        const marker =
                            new Tmapv2.Marker(
                                {
                                    position:
                                        new Tmapv2.LatLng(
                                            cluster.latitude,
                                            cluster.longitude
                                        ),

                                    icon:
                                        'data:image/svg+xml;charset=UTF-8,' +
                                        encodeURIComponent(
                                            `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="18" cy="18" r="16" fill="#40D293" opacity="0.9"/><text x="18" y="23" font-size="14" font-weight="700" fill="white" text-anchor="middle" font-family="sans-serif">${cluster.count}</text></svg>`
                                        ),

                                    iconSize:
                                        new Tmapv2.Size(
                                            36,
                                            36
                                        ),

                                    map,
                                }
                            );

                        newMarkers.push(
                            marker
                        );
                    }
                );

                facilityMarkersRef.current =
                    newMarkers;
            } catch (err) {
                console.error(
                    '시설 마커 조회 실패:',
                    err.response
                        ?.status,

                    err.response
                        ?.data ||
                        err.message
                );
            } finally {
                setMarkersLoading(
                    false
                );
            }
        };

    const showCurrentLocationMarker =
        (
            Tmapv2,
            map,
            coords
        ) => {
            if (
                currentLocationMarkerRef.current
            ) {
                currentLocationMarkerRef.current.setMap(
                    null
                );
            }

            const marker =
                new Tmapv2.Marker(
                    {
                        position:
                            new Tmapv2.LatLng(
                                coords.latitude,
                                coords.longitude
                            ),

                        icon:
                            'data:image/svg+xml;charset=UTF-8,' +
                            encodeURIComponent(
                                '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="14" fill="#4A90E2" opacity="0.2"/><circle cx="16" cy="16" r="8" fill="#2F7BFF" stroke="white" stroke-width="3"/></svg>'
                            ),

                        iconSize:
                            new Tmapv2.Size(
                                32,
                                32
                            ),

                        map,
                    }
                );

            currentLocationMarkerRef.current =
                marker;
        };

    const showArrivalMarker =
        (
            Tmapv2,
            map,
            coord
        ) => {
            if (
                arrivalMarkerRef.current
            ) {
                arrivalMarkerRef.current.setMap(
                    null
                );
            }

            if (!coord) {
                return;
            }

            const marker =
                new Tmapv2.Marker(
                    {
                        position:
                            new Tmapv2.LatLng(
                                coord.latitude,
                                coord.longitude
                            ),

                        icon:
                            'data:image/svg+xml;charset=UTF-8,' +
                            encodeURIComponent(
                                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 16 20"><path d="M8 19S14 12 14 7A6 6 0 1 0 2 7C2 12 8 19 8 19Z" fill="#FF5A5F"/><circle cx="8" cy="7" r="2.4" fill="white"/></svg>'
                            ),

                        iconSize:
                            new Tmapv2.Size(
                                28,
                                32
                            ),

                        map,
                    }
                );

            arrivalMarkerRef.current =
                marker;

            map.setCenter(
                new Tmapv2.LatLng(
                    coord.latitude,
                    coord.longitude
                )
            );
        };

    const handleContainerClick =
        (domEvent) => {
            const map =
                mapRef.current;

            const container =
                mapContainerRef.current;

            if (
                !map ||
                !container
            ) {
                return;
            }

            const zoom =
                map.getZoom();

            const center =
                map.getCenter();

            const centerLat =
                typeof center.lat ===
                'function'
                    ? center.lat()
                    : center.lat;

            const centerLng =
                typeof center.lng ===
                'function'
                    ? center.lng()
                    : center.lng;

            const centerPixel =
                latLngToWorldPixel(
                    centerLat,
                    centerLng,
                    zoom
                );

            const rect =
                container.getBoundingClientRect();

            const clickX =
                domEvent.clientX -
                rect.left;

            const clickY =
                domEvent.clientY -
                rect.top;

            const clickWorldX =
                centerPixel.x +
                (clickX -
                    container.clientWidth /
                        2);

            const clickWorldY =
                centerPixel.y +
                (clickY -
                    container.clientHeight /
                        2);

            let closestFacility =
                null;

            let closestFacilityDist =
                Infinity;

            facilitiesDataRef.current.forEach(
                (
                    facility
                ) => {
                    const point =
                        latLngToWorldPixel(
                            facility.latitude,
                            facility.longitude,
                            zoom
                        );

                    const distance =
                        Math.hypot(
                            point.x -
                                clickWorldX,

                            point.y -
                                clickWorldY
                        );

                    if (
                        distance <
                        closestFacilityDist
                    ) {
                        closestFacilityDist =
                            distance;

                        closestFacility =
                            facility;
                    }
                }
            );

            if (
                closestFacility &&
                closestFacilityDist <=
                    16
            ) {
                const Tmapv2 =
                    window.Tmapv2;

                const coord = {
                    latitude:
                        closestFacility.latitude,

                    longitude:
                        closestFacility.longitude,
                };

                setSelectedFacility(
                    closestFacility
                );

                setArrival(
                    closestFacility.name
                );

                setArrivalCoord(
                    coord
                );

                clearRoute();

                showArrivalMarker(
                    Tmapv2,
                    map,
                    coord
                );

                return;
            }

            let closestCluster =
                null;

            let closestClusterDist =
                Infinity;

            clustersDataRef.current.forEach(
                (
                    cluster
                ) => {
                    const point =
                        latLngToWorldPixel(
                            cluster.latitude,
                            cluster.longitude,
                            zoom
                        );

                    const distance =
                        Math.hypot(
                            point.x -
                                clickWorldX,

                            point.y -
                                clickWorldY
                        );

                    if (
                        distance <
                        closestClusterDist
                    ) {
                        closestClusterDist =
                            distance;

                        closestCluster =
                            cluster;
                    }
                }
            );

            if (
                closestCluster &&
                closestClusterDist <=
                    20
            ) {
                const Tmapv2 =
                    window.Tmapv2;

                map.setCenter(
                    new Tmapv2.LatLng(
                        closestCluster.latitude,
                        closestCluster.longitude
                    )
                );

                map.setZoom(
                    (
                        map.getZoom() ||
                        15
                    ) + 2
                );
            }
        };

    const moveToCurrentLocation =
        async () => {
            const map =
                mapRef.current;

            const Tmapv2 =
                window.Tmapv2;

            if (
                !map ||
                !Tmapv2
            ) {
                return;
            }

            setLocating(true);
            setDeparture(
                '현재 위치'
            );

            try {
                const coords =
                    await getCurrentCoords();

                setDepartureCoord(
                    coords
                );

                clearRoute();

                map.setCenter(
                    new Tmapv2.LatLng(
                        coords.latitude,
                        coords.longitude
                    )
                );

                map.setZoom(16);

                showCurrentLocationMarker(
                    Tmapv2,
                    map,
                    coords
                );
            } catch (err) {
                console.error(
                    '현재 위치 조회 실패:',
                    err
                );
            } finally {
                setLocating(false);
            }
        };

    useEffect(() => {
        let cancelled =
            false;

        let initTimer =
            null;

        async function tryInitMap() {
            if (cancelled) {
                return;
            }

            if (
                mapRef.current
            ) {
                return;
            }

            if (
                !window.Tmapv2
            ) {
                initTimer =
                    setTimeout(
                        tryInitMap,
                        100
                    );

                return;
            }

            if (
                !mapContainerRef.current
            ) {
                return;
            }

            if (
                mapRef.current
            ) {
                return;
            }

            try {
                const Tmapv2 =
                    window.Tmapv2;

                const regionCoord =
                    location.state
                        ?.regionCoord;

                const initialCoord =
                    regionCoord ||
                    (await getCurrentCoords());

                if (
                    cancelled ||
                    mapRef.current
                ) {
                    return;
                }

                const map =
                    new Tmapv2.Map(
                        mapContainerRef.current,
                        {
                            center:
                                new Tmapv2.LatLng(
                                    initialCoord.latitude,
                                    initialCoord.longitude
                                ),

                            width:
                                '100%',

                            height:
                                '100%',

                            zoom:
                                regionCoord
                                    ? 14
                                    : 15,

                            zoomControl:
                                true,

                            scrollwheel:
                                false,
                        }
                    );

                mapRef.current =
                    map;

                mapContainerRef.current.addEventListener(
                    'click',
                    handleContainerClick
                );

                const myCoords =
                    await getCurrentCoords();

                if (
                    !cancelled
                ) {
                    setDepartureCoord(
                        myCoords
                    );

                    showCurrentLocationMarker(
                        Tmapv2,
                        map,
                        myCoords
                    );
                }

                if (
                    location.state
                        ?.arrivalCoord
                ) {
                    showArrivalMarker(
                        Tmapv2,
                        map,

                        location.state
                            .arrivalCoord
                    );
                }

                setMapError(false);
                setMapLoaded(true);
            } catch (err) {
                console.error(
                    '지도 초기화 실패:',
                    err
                );

                setMapError(true);
            }
        }

        tryInitMap();

        return () => {
            cancelled = true;

            if (
                initTimer
            ) {
                clearTimeout(
                    initTimer
                );
            }

            if (
                mapContainerRef.current
            ) {
                mapContainerRef.current.removeEventListener(
                    'click',
                    handleContainerClick
                );
            }

            clearRouteLines();
            clearFacilityMarkers();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (
            mapLoaded
        ) {
            loadFacilityMarkers();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mapLoaded]);

    const handleSwap = () => {
        const previousDeparture =
            departureCoord;

        const previousArrival =
            arrivalCoord;

        const previousDepartureName =
            departure;

        const previousArrivalName =
            arrival;

        setDeparture(
            previousArrivalName ||
                '현재 위치'
        );

        setArrival(
            previousDepartureName
        );

        setDepartureCoord(
            previousArrival
        );

        setArrivalCoord(
            previousDeparture
        );

        clearRoute();

        const map =
            mapRef.current;

        const Tmapv2 =
            window.Tmapv2;

        if (
            !map ||
            !Tmapv2
        ) {
            return;
        }

        if (
            previousArrival
        ) {
            showCurrentLocationMarker(
                Tmapv2,
                map,
                previousArrival
            );
        }

        if (
            previousDeparture
        ) {
            showArrivalMarker(
                Tmapv2,
                map,
                previousDeparture
            );
        }
    };

    const goArrivalSearch = (
        routeMode =
            location.state
                ?.routeMode ||
            'WALK'
    ) => {
        navigate(
            '/departure-search',
            {
                state: {
                    mode:
                        'arrival',

                    routeMode,
                },
            }
        );
    };

    const goSearchRoute = (
        routeMode = 'WALK'
    ) => {
        if (
            !arrival ||
            !arrivalCoord
        ) {
            goArrivalSearch(
                routeMode
            );

            return;
        }

        if (
            routeMode ===
            'TRANSIT'
        ) {
            drawTransitRoute();
            return;
        }

        drawRoute(
            avoidStairs
                ? 'AVOID_STAIRS'
                : 'NORMAL'
        );
    };

    const toggleAvoidStairs =
        () => {
            setAvoidStairs(
                (prev) => {
                    const next =
                        !prev;

                    if (
                        arrivalCoord
                    ) {
                        drawRoute(
                            next
                                ? 'AVOID_STAIRS'
                                : 'NORMAL'
                        );
                    }

                    return next;
                }
            );
        };

    const closeSheet = () => {
        setSelectedFacility(
            null
        );

        setArrival('');
        setArrivalCoord(
            null
        );

        if (
            arrivalMarkerRef.current
        ) {
            arrivalMarkerRef.current.setMap(
                null
            );

            arrivalMarkerRef.current =
                null;
        }

        clearRoute();
    };

    const goSelectedFacilityDetail =
        () => {
            if (
                !selectedFacility
            ) {
                return;
            }

            navigate(
                `/facility-detail/${selectedFacility.facilityId}`
            );
        };

    return {
        mapContainerRef,

        mapLoaded,
        mapError,

        markersLoading,
        loadFacilityMarkers,

        departure,
        arrival,

        locating,
        routeLoading,
        routeMessage,

        walkRouteData,
        transitRouteData,

        avoidStairs,

        handleSwap,
        goArrivalSearch,
        moveToCurrentLocation,

        goSearchRoute,
        clearRoute,

        toggleAvoidStairs,

        selectedFacility,
        closeSheet,

        goSelectedFacilityDetail,
    };
}