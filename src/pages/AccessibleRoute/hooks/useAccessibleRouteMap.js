import { useEffect, useRef, useState } from 'react';
import { DEPARTURE_COORD, ARRIVAL_COORD } from '../utils/mapCoords';
import { fetchPedestrianRoute } from '../utils/fetchPedestrianRoute';

export function useAccessibleRouteMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const polylineRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    function tryInitMap() {
      if (cancelled) return;

      if (!window.Tmapv2) {
        attempts += 1;
        if (attempts > 50) {
          setMapError(true);
          return;
        }
        setTimeout(tryInitMap, 100);
        return;
      }

      if (!mapContainerRef.current) return;

      const Tmapv2 = window.Tmapv2;

      const map = new Tmapv2.Map(mapContainerRef.current, {
        center: new Tmapv2.LatLng(DEPARTURE_COORD.lat, DEPARTURE_COORD.lng),
        width: '100%',
        height: '100%',
        zoom: 15,
      });

      mapRef.current = map;

      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(DEPARTURE_COORD.lat, DEPARTURE_COORD.lng),
        map,
      });

      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(ARRIVAL_COORD.lat, ARRIVAL_COORD.lng),
        map,
      });

      setMapLoaded(true);
    }

    tryInitMap();

    return () => {
      cancelled = true;
    };
  }, []);

  const drawRoute = async () => {
    if (!mapRef.current || !window.Tmapv2) return;

    const appKey = import.meta.env.VITE_TMAP_APP_KEY;
    if (!appKey) return;

    setRouteLoading(true);

    try {
      const coords = await fetchPedestrianRoute(DEPARTURE_COORD, ARRIVAL_COORD, appKey);
      console.log('경로 좌표 개수:', coords.length, coords[0]);

      if (polylineRef.current) {
        polylineRef.current.setMap(null);
      }

      const Tmapv2 = window.Tmapv2;
      const path = coords.map((c) => new Tmapv2.LatLng(c.lat, c.lng));

      const polyline = new Tmapv2.Polyline({
        path,
        strokeColor: '#2F7BFF',
        strokeWeight: 6,
        strokeOpacity: 1,
        map: mapRef.current,
      });

      polylineRef.current = polyline;

      // 지도 범위 맞추기는 실패해도 선 표시엔 영향 없도록 분리
      try {
        if (path.length > 1) {
          const bounds = new Tmapv2.LatLngBounds(path[0], path[0]);
          path.forEach((p) => bounds.extend(p));
          mapRef.current.fitBounds(bounds);
        }
      } catch (boundsErr) {
        console.warn('fitBounds 실패, 중심만 이동:', boundsErr);
        mapRef.current.setCenter(path[Math.floor(path.length / 2)]);
      }
    } catch (err) {
      console.error('경로 그리기 실패:', err);
    } finally {
      setRouteLoading(false);
    }
  };

  return { mapContainerRef, mapLoaded, mapError, drawRoute, routeLoading };
}