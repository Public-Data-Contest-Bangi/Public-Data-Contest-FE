import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchFacilities } from '../../../api/facilities';
import { getCurrentCoords } from '../../../utils/geolocation';

export function useSearchResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const keyword = location.state?.keyword || '';
  const accessibilityCodes = location.state?.accessibilityCodes || [];

  const [facilities, setFacilities] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function runSearch() {
      setLoading(true);
      setError(null);

      try {
        const coords = await getCurrentCoords();

        const data = await searchFacilities({
          searchMode: 'KEYWORD',
          keyword,
          latitude: coords.latitude,
          longitude: coords.longitude,
          accessibilityCodes,
          page: 0,
          size: 20,
        });

        if (!cancelled) {
          setFacilities(data.facilities || []);
          setTotalCount(data.totalCount || 0);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('시설 검색 실패:', err.response?.status, err.response?.data || err.message);
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    runSearch();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, JSON.stringify(accessibilityCodes)]);

  const goBack = () => navigate(-1);

  const goFilter = () => {
    navigate('/search-filter', { state: { keyword, accessibilityCodes } });
  };

  const goDetail = (facilityId) => {
    navigate(`/facility-detail/${facilityId}`);
  };

  return {
    keyword,
    accessibilityCodes,
    facilities,
    totalCount,
    loading,
    error,
    goBack,
    goFilter,
    goDetail,
  };
}