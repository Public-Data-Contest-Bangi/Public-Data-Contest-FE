import { useEffect, useRef, useState } from 'react';
import { DEPARTURE_COORD, ARRIVAL_COORD } from '../utils/mapCoords';
import { fetchPedestrianRoute } from '../utils/fetchPedestrianRoute';

export function useAccessibleRouteMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const polylineRef = useRef(null);
  const markersRef = useRef([]);
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

      const departureMarker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(DEPARTURE_COORD.lat, DEPARTURE_COORD.lng),
        icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><circle cx="14" cy="14" r="10" fill="%2340D293" stroke="white" stroke-width="3"/></svg>'
        ),
        iconSize: new Tmapv2.Size(28, 28),
        map,
      });

      const arrivalMarker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(ARRIVAL_COORD.lat, ARRIVAL_COORD.lng),
        icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 16 20"><path d="M8 19S14 12 14 7A6 6 0 1 0 2 7C2 12 8 19 8 19Z" fill="%23FF5A5F"/><circle cx="8" cy="7" r="2.4" fill="white"/></svg>'
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
    };
  }, []);

  const drawRoute = async () => {
    if (!mapRef.current || !window.Tmapv2) return;

    const appKey = import.meta.env.VITE_TMAP_APP_KEY;
    if (!appKey) return;

    setRouteLoading(true);

    try {
      const coords = await fetchPedestrianRoute(DEPARTURE_COORD, ARRIVAL_COORD, appKey);
      console.log('경로 좌표 개수:', coords.length);

      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }

      const Tmapv2 = window.Tmapv2;
      const path = coords.map((c) => new Tmapv2.LatLng(c.lat, c.lng));

      if (path.length === 0) {
        console.warn('좌표가 비어있음');
        return;
      }

      let minLat = coords[0].lat;
      let maxLat = coords[0].lat;
      let minLng = coords[0].lng;
      let maxLng = coords[0].lng;

      coords.forEach((c) => {
        minLat = Math.min(minLat, c.lat);
        maxLat = Math.max(maxLat, c.lat);
        minLng = Math.min(minLng, c.lng);
        maxLng = Math.max(maxLng, c.lng);
      });

      const centerLat = (minLat + maxLat) / 2;
      const centerLng = (minLng + maxLng) / 2;
      const latDiff = maxLat - minLat;
      const lngDiff = maxLng - minLng;
      const maxDiff = Math.max(latDiff, lngDiff);

      let zoom = 16;
      if (maxDiff > 0.008) zoom = 15;
      if (maxDiff > 0.015) zoom = 14;
      if (maxDiff > 0.03) zoom = 13;
      if (maxDiff > 0.06) zoom = 12;

      mapRef.current.setCenter(new Tmapv2.LatLng(centerLat, centerLng));
      mapRef.current.setZoom(zoom);

      setTimeout(() => {
        console.log('Tmapv2.Polyline 존재?', typeof Tmapv2.Polyline);
        console.log('path 배열 길이:', path.length, 'path[0]:', path[0]);

        try {
          const polyline = new Tmapv2.Polyline({
            path: path,
            strokeColor: '#FF0000',
            strokeWeight: 10,
            strokeOpacity: 1,
            map: mapRef.current,
          });
          polylineRef.current = polyline;
          console.log('폴리라인 생성 성공, map 속성:', polyline.getMap ? polyline.getMap() : 'getMap 없음');
        } catch (polyErr) {
          console.error('폴리라인 생성 중 에러:', polyErr);
        }
      }, 150);
    } catch (err) {
      console.error('경로 그리기 실패:', err);
    } finally {
      setRouteLoading(false);
    }
  };

  return { mapContainerRef, mapLoaded, mapError, drawRoute, routeLoading };
}