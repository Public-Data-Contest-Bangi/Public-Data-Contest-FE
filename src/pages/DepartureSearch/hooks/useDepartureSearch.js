import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchPlaces } from '../../../api/places';

export function useDepartureSearch() {
  const navigate = useNavigate();
  const location = useLocation();

  // FacilityMap의 도착지 검색에서 왔으면 mode가 'arrival'로 넘어옴
  const mode = location.state?.mode || 'departure';

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const data = await searchPlaces({ keyword: query.trim(), page: 1, size: 20 });
        if (!cancelled) {
          setResults(data.places || []);
        }
      } catch (err) {
        console.error('장소 검색 실패:', err.response?.status, err.response?.data || err.message);
        if (!cancelled) {
          setResults([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 300); // 입력 멈춘 뒤 300ms 후 검색 (디바운스)

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  const handleClear = () => {
    setQuery('');
  };

  const handleSelect = (place) => {
    if (mode === 'arrival') {
      navigate('/facility-map', {
        state: {
          arrival: place.name,
          arrivalCoord: { latitude: place.latitude, longitude: place.longitude },
        },
      });
      return;
    }

    navigate('/accessible-route', { state: { departure: place.name } });
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    query,
    setQuery,
    results,
    loading,
    mode,
    handleClear,
    handleSelect,
    goBack,
  };
}