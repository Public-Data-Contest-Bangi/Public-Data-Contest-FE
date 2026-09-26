import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFacilityMarkers } from '../../../api/facilities';
import { searchRoute } from '../../../api/routes';
import { getCurrentCoords } from '../../../utils/geolocation';

function estimateDelta(zoom) {
  return 0.02 * Math.pow(2, 15 - zoom);
}

// 표준 웹 지도 Web Mercator 투영법 (구글/네이버/카카오/티맵 공통 방식) - 위경도 → 전체 지도상의 픽셀 좌표
function latLngToWorldPixel(lat, lng, zoom) {
  const scale = 256 * Math.pow(2, zoom);
  const sinLat = Math.sin((lat * Math.PI) / 180);
  const x = (0.5 + lng / 360) * scale;
  const y = (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale;
  return { x, y };
}

export function useFacilityMap() {
  const navigate = useNavigate();
  const location = useLocation();

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const facilityMarkersRef = useRef([]);
  const currentLocationMarkerRef = useRef(null);
  const arrivalMarkerRef = useRef(null);
  const polylineRef = useRef(null);

  const facilitiesDataRef = useRef([]);
  const clustersDataRef = useRef([]);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [markersLoading, setMarkersLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);
  const [avoidStairs, setAvoidStairs] = useState(false);

  const [departure, setDeparture] = useState('현재 위치');
  const [arrival, setArrival] = useState(location.state?.arrival || '');
  const [arrivalCoord, setArrivalCoord] = useState(location.state?.arrivalCoord || null);
  const [departureCoord, setDepartureCoord] = useState(null);

  const [selectedFacility, setSelectedFacility] = useState(null);
  const [sheetExpanded, setSheetExpanded] = useState(false);

  const clearFacilityMarkers = () => {
    facilityMarkersRef.current.forEach((m) => m.setMap(null));
    facilityMarkersRef.current = [];
  };

  const loadFacilityMarkers = async () => {
    const map = mapRef.current;
    const Tmapv2 = window.Tmapv2;
    if (!map || !Tmapv2) return;

    setMarkersLoading(true);

    let south, north, west, east, zoom;

    try {
      zoom = map.getZoom();
      const bounds = map.getBounds();
      const sw = bounds.getSouthWest ? bounds.getSouthWest() : bounds.getSW();
      const ne = bounds.getNorthEast ? bounds.getNorthEast() : bounds.getNE();
      south = sw.lat();
      west = sw.lng();
      north = ne.lat();
      east = ne.lng();
    } catch (e) {
      const center = map.getCenter();
      zoom = map.getZoom();
      const delta = estimateDelta(zoom);
      south = center.lat() - delta;
      north = center.lat() + delta;
      west = center.lng() - delta;
      east = center.lng() + delta;
    }

    try {
      const data = await fetchFacilityMarkers({ south, north, west, east, zoom });

      clearFacilityMarkers();

      facilitiesDataRef.current = data.facilities || [];
      clustersDataRef.current = data.clusters || [];

      const newMarkers = [];

      (data.facilities || []).forEach((f) => {
        const marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(f.latitude, f.longitude),
          icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><circle cx="13" cy="13" r="9" fill="#FFFFFF" stroke="#40D293" stroke-width="3"/></svg>'
          ),
          iconSize: new Tmapv2.Size(26, 26),
          map,
        });
        newMarkers.push(marker);
      });

      (data.clusters || []).forEach((c) => {
        const marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(c.latitude, c.longitude),
          icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="18" cy="18" r="16" fill="#40D293" opacity="0.9"/><text x="18" y="23" font-size="14" font-weight="700" fill="white" text-anchor="middle" font-family="sans-serif">${c.count}</text></svg>`
          ),
          iconSize: new Tmapv2.Size(36, 36),
          map,
        });
        newMarkers.push(marker);
      });

      facilityMarkersRef.current = newMarkers;
    } catch (err) {
      console.error('시설 마커 조회 실패:', err.response?.status, err.response?.data || err.message);
    } finally {
      setMarkersLoading(false);
    }
  };

  const handleContainerClick = (domEvent) => {
    const map = mapRef.current;
    const container = mapContainerRef.current;
    if (!map || !container) return;

    const zoom = map.getZoom();
    const center = map.getCenter();
    const centerLat = typeof center.lat === 'function' ? center.lat() : center.lat;
    const centerLng = typeof center.lng === 'function' ? center.lng() : center.lng;

    const centerPixel = latLngToWorldPixel(centerLat, centerLng, zoom);

    const rect = container.getBoundingClientRect();
    const clickX = domEvent.clientX - rect.left;
    const clickY = domEvent.clientY - rect.top;

    // 클릭한 화면 좌표를, 지도 중심 기준 "전체 지도상의 픽셀 좌표"로 변환
    const clickWorldX = centerPixel.x + (clickX - container.clientWidth / 2);
    const clickWorldY = centerPixel.y + (clickY - container.clientHeight / 2);

    let closestFacility = null;
    let closestFacilityDist = Infinity;

    facilitiesDataRef.current.forEach((f) => {
      const p = latLngToWorldPixel(f.latitude, f.longitude, zoom);
      const dist = Math.hypot(p.x - clickWorldX, p.y - clickWorldY);
      if (dist < closestFacilityDist) {
        closestFacilityDist = dist;
        closestFacility = f;
      }
    });

    if (closestFacility && closestFacilityDist <= 16) {
      setSelectedFacility(closestFacility);
      setSheetExpanded(false);
      return;
    }

    let closestCluster = null;
    let closestClusterDist = Infinity;

    clustersDataRef.current.forEach((c) => {
      const p = latLngToWorldPixel(c.latitude, c.longitude, zoom);
      const dist = Math.hypot(p.x - clickWorldX, p.y - clickWorldY);
      if (dist < closestClusterDist) {
        closestClusterDist = dist;
        closestCluster = c;
      }
    });

    if (closestCluster && closestClusterDist <= 20) {
      const Tmapv2 = window.Tmapv2;
      map.setCenter(new Tmapv2.LatLng(closestCluster.latitude, closestCluster.longitude));
      map.setZoom((map.getZoom() || 15) + 2);
    }
  };

  const showCurrentLocationMarker = (Tmapv2, map, coords) => {
    if (currentLocationMarkerRef.current) {
      currentLocationMarkerRef.current.setMap(null);
    }

    const marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(coords.latitude, coords.longitude),
      icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><circle cx="16" cy="16" r="14" fill="#4A90E2" opacity="0.2"/><circle cx="16" cy="16" r="8" fill="#2F7BFF" stroke="white" stroke-width="3"/></svg>'
      ),
      iconSize: new Tmapv2.Size(32, 32),
      map,
    });

    currentLocationMarkerRef.current = marker;
  };

  const showArrivalMarker = (Tmapv2, map, coord) => {
    if (arrivalMarkerRef.current) {
      arrivalMarkerRef.current.setMap(null);
    }

    if (!coord) return;

    const marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(coord.latitude, coord.longitude),
      icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 16 20"><path d="M8 19S14 12 14 7A6 6 0 1 0 2 7C2 12 8 19 8 19Z" fill="#FF5A5F"/><circle cx="8" cy="7" r="2.4" fill="white"/></svg>'
      ),
      iconSize: new Tmapv2.Size(28, 32),
      map,
    });

    arrivalMarkerRef.current = marker;
    map.setCenter(new Tmapv2.LatLng(coord.latitude, coord.longitude));
  };

  const moveToCurrentLocation = async () => {
    const map = mapRef.current;
    const Tmapv2 = window.Tmapv2;
    if (!map || !Tmapv2) return;

    setLocating(true);
    setDeparture('현재 위치');

    try {
      const coords = await getCurrentCoords();
      setDepartureCoord(coords);
      map.setCenter(new Tmapv2.LatLng(coords.latitude, coords.longitude));
      map.setZoom(16);
      showCurrentLocationMarker(Tmapv2, map, coords);
    } finally {
      setLocating(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    let initTimer = null;

    async function tryInitMap() {
      if (cancelled) return;
      if (mapRef.current) return;

      if (!window.Tmapv2) {
        initTimer = setTimeout(tryInitMap, 100);
        return;
      }

      if (!mapContainerRef.current) return;
      if (mapRef.current) return;

      const Tmapv2 = window.Tmapv2;

      const regionCoord = location.state?.regionCoord;
      const initialCoord = regionCoord || (await getCurrentCoords());

      if (cancelled) return;
      if (mapRef.current) return;

      const map = new Tmapv2.Map(mapContainerRef.current, {
        center: new Tmapv2.LatLng(initialCoord.latitude, initialCoord.longitude),
        width: '100%',
        height: '100%',
        zoom: regionCoord ? 14 : 15,
      });

      mapRef.current = map;

      mapContainerRef.current.addEventListener('click', handleContainerClick);

      const myCoords = await getCurrentCoords();
      if (!cancelled) {
        setDepartureCoord(myCoords);
        showCurrentLocationMarker(Tmapv2, map, myCoords);
      }

      if (location.state?.arrivalCoord) {
        showArrivalMarker(Tmapv2, map, location.state.arrivalCoord);
      }

      setMapLoaded(true);
    }

    tryInitMap();

    return () => {
      cancelled = true;
      if (initTimer) clearTimeout(initTimer);
      if (mapContainerRef.current) {
        mapContainerRef.current.removeEventListener('click', handleContainerClick);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      loadFacilityMarkers();
    }
  }, [mapLoaded]);

  const handleSwap = () => {
    setDeparture(arrival);
    setArrival(departure);
    setDepartureCoord((prevDep) => {
      const prevArr = arrivalCoord;
      setArrivalCoord(prevDep);
      return prevArr;
    });
  };

  const goArrivalSearch = () => {
    navigate('/departure-search', { state: { mode: 'arrival' } });
  };

  const drawRoute = async (routeType) => {
    const map = mapRef.current;
    const Tmapv2 = window.Tmapv2;
    if (!map || !Tmapv2) return;
    if (!departureCoord || !arrivalCoord) return;

    setRouteLoading(true);

    try {
      const data = await searchRoute({
        startLatitude: departureCoord.latitude,
        startLongitude: departureCoord.longitude,
        endLatitude: arrivalCoord.latitude,
        endLongitude: arrivalCoord.longitude,
        routeType,
      });

      const coords = (data.pathSegments || []).flatMap((seg) => seg.coordinates || []);

      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }

      if (coords.length === 0) return;

      const path = coords.map((c) => new Tmapv2.LatLng(c.latitude, c.longitude));

      const bounds = new Tmapv2.LatLngBounds(path[0]);
      path.forEach((p) => bounds.extend(p));

      const polyline = new Tmapv2.Polyline({
        path,
        strokeColor: routeType === 'AVOID_STAIRS' ? '#9B59FF' : '#2F7BFF',
        strokeWeight: 8,
        strokeOpacity: 1,
        map,
      });
      polylineRef.current = polyline;

      map.fitBounds(bounds, { left: 30, top: 30, right: 30, bottom: 30 });
    } catch (err) {
      console.error('경로 검색 실패:', err.response?.status, err.response?.data || err.message);
    } finally {
      setRouteLoading(false);
    }
  };

  const goSearchRoute = () => {
    if (!arrival || !arrivalCoord) {
      goArrivalSearch();
      return;
    }
    drawRoute(avoidStairs ? 'AVOID_STAIRS' : 'NORMAL');
  };

  const toggleAvoidStairs = () => {
    setAvoidStairs((prev) => {
      const next = !prev;
      if (arrivalCoord) {
        drawRoute(next ? 'AVOID_STAIRS' : 'NORMAL');
      }
      return next;
    });
  };

  const toggleSheet = () => {
    setSheetExpanded((prev) => !prev);
  };

  const closeSheet = () => {
    setSelectedFacility(null);
    setSheetExpanded(false);
    setArrival('');
    setArrivalCoord(null);

    if (arrivalMarkerRef.current) {
      arrivalMarkerRef.current.setMap(null);
      arrivalMarkerRef.current = null;
    }

    if (polylineRef.current) {
      polylineRef.current.setMap(null);
      polylineRef.current = null;
    }
  };

  const goSelectedFacilityDetail = () => {
    if (!selectedFacility) return;
    navigate(`/facility-detail/${selectedFacility.facilityId}`);
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
  };
}