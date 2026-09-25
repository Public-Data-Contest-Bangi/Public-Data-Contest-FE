import { useEffect, useRef, useState } from 'react';
import { DEPARTURE_COORD, ARRIVAL_COORD } from '../utils/mapCoords';
import { fetchPedestrianRoute } from '../utils/fetchPedestrianRoute';
import { fetchFacilityMarkers } from '../../../api/facilities';

function estimateDelta(zoom) {
  return 0.02 * Math.pow(2, 15 - zoom);
}

export function useAccessibleRouteMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const polylineRef = useRef(null);
  const markersRef = useRef([]);
  const facilityMarkersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);
  const [markersLoading, setMarkersLoading] = useState(false);

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
      console.log('시설 마커 응답 개수:', data.totalCount, data.facilities?.length, '| zoom:', zoom);

      clearFacilityMarkers();

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

        Tmapv2.event.addListener(marker, 'click', () => {
          map.setCenter(new Tmapv2.LatLng(c.latitude, c.longitude));
          map.setZoom((map.getZoom() || 15) + 2);
        });

        newMarkers.push(marker);
      });

      facilityMarkersRef.current = newMarkers;
      console.log('생성된 시설 마커 개수:', newMarkers.length);
    } catch (err) {
      console.error('시설 마커 조회 실패:', err.response?.status, err.response?.data || err.message);
    } finally {
      setMarkersLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    let initTimer = null;

    function tryInitMap() {
      if (cancelled) return;
      if (mapRef.current) return;

      if (!window.Tmapv2) {
        initTimer = setTimeout(tryInitMap, 100);
        return;
      }

      if (!mapContainerRef.current) return;
      if (mapRef.current) return;

      const Tmapv2 = window.Tmapv2;

      const map = new Tmapv2.Map(mapContainerRef.current, {
        center: new Tmapv2.LatLng(DEPARTURE_COORD.lat, DEPARTURE_COORD.lng),
        width: '100%',
        height: '100%',
        zoom: 15,
      });

      mapRef.current = map;

      const departureMarker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(DEPARTURE_COORD.lat, DEPARTURE_COORD.lng),
        icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><circle cx="14" cy="14" r="10" fill="#40D293" stroke="white" stroke-width="3"/></svg>'
        ),
        iconSize: new Tmapv2.Size(28, 28),
        map,
      });

      const arrivalMarker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(ARRIVAL_COORD.lat, ARRIVAL_COORD.lng),
        icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 16 20"><path d="M8 19S14 12 14 7A6 6 0 1 0 2 7C2 12 8 19 8 19Z" fill="#FF5A5F"/><circle cx="8" cy="7" r="2.4" fill="white"/></svg>'
        ),
        iconSize: new Tmapv2.Size(28, 32),
        map,
      });

      markersRef.current = [departureMarker, arrivalMarker];

      setMapLoaded(true);
    }

    tryInitMap();

    return () => {
      cancelled = true;
      if (initTimer) clearTimeout(initTimer);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      loadFacilityMarkers();
    }
  }, [mapLoaded]);

  const drawRoute = async () => {
    if (!mapRef.current || !window.Tmapv2) return;

    const appKey = import.meta.env.VITE_TMAP_APP_KEY;
    if (!appKey) return;

    setRouteLoading(true);

    try {
      const coords = await fetchPedestrianRoute(DEPARTURE_COORD, ARRIVAL_COORD, appKey);

      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }

      const Tmapv2 = window.Tmapv2;

      if (coords.length === 0) return;

      const path = coords.map((c) => new Tmapv2.LatLng(c.lat, c.lng));

      const bounds = new Tmapv2.LatLngBounds(path[0]);
      path.forEach((p) => bounds.extend(p));

      const polyline = new Tmapv2.Polyline({
        path,
        strokeColor: '#2F7BFF',
        strokeWeight: 8,
        strokeOpacity: 1,
        map: mapRef.current,
      });
      polylineRef.current = polyline;

      mapRef.current.fitBounds(bounds, { left: 30, top: 30, right: 30, bottom: 30 });
    } catch (err) {
      console.error('경로 그리기 실패:', err);
    } finally {
      setRouteLoading(false);
    }
  };

  return {
    mapContainerRef,
    mapLoaded,
    mapError,
    drawRoute,
    routeLoading,
    loadFacilityMarkers,
    markersLoading,
  };
}