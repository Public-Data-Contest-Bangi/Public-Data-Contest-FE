import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFacilityMarkers } from '../../../api/facilities';
import { getCurrentCoords } from '../../../utils/geolocation';

function estimateDelta(zoom) {
  return 0.02 * Math.pow(2, 15 - zoom);
}

export function useFacilityMap() {
  const navigate = useNavigate();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const facilityMarkersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
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

      clearFacilityMarkers();

      const newMarkers = [];

      (data.facilities || []).forEach((f) => {
        const marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(f.latitude, f.longitude),
          icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><circle cx="13" cy="13" r="9" fill="%23FFFFFF" stroke="%2340D293" stroke-width="3"/></svg>'
          ),
          iconSize: new Tmapv2.Size(26, 26),
          map,
        });

        Tmapv2.event.addListener(marker, 'click', () => {
          navigate(`/facility-detail/${f.facilityId}`);
        });

        newMarkers.push(marker);
      });

      (data.clusters || []).forEach((c) => {
        const marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(c.latitude, c.longitude),
          icon: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="18" cy="18" r="16" fill="%2340D293" opacity="0.9"/><text x="18" y="23" font-size="14" font-weight="700" fill="white" text-anchor="middle" font-family="sans-serif">${c.count}</text></svg>`
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
    } catch (err) {
      console.error('시설 마커 조회 실패:', err.response?.status, err.response?.data || err.message);
    } finally {
      setMarkersLoading(false);
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
      const coords = await getCurrentCoords();

      if (cancelled) return;

      const map = new Tmapv2.Map(mapContainerRef.current, {
        center: new Tmapv2.LatLng(coords.latitude, coords.longitude),
        width: '100%',
        height: '100%',
        zoom: 15,
      });

      mapRef.current = map;
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

  return { mapContainerRef, mapLoaded, mapError, markersLoading, loadFacilityMarkers };
}