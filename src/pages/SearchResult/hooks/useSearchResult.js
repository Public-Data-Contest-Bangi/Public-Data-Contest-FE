import { PAGE_SIZE } from '../../../components/common/Pagination';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchFacilities } from '../../../api/facilities';
import { getCurrentCoords } from '../../../utils/geolocation';

export function useSearchResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selection, setSelection] = useState({ key: location.key, page: 0 });
  const page = selection.key === location.key ? selection.page : 0;
  const setPage = page => setSelection({ key: location.key, page });

  const keyword = location.state?.keyword || '';
  const searchMode = location.state?.searchMode || 'KEYWORD';
  const regionCode = location.state?.regionCode;
  const accessibilityCodes = location.state?.accessibilityCodes || [];
  const sportIds = location.state?.sportIds || [];
  const voucherStatus = location.state?.voucherStatus || 'ALL';

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
          searchMode,
          keyword: searchMode === 'KEYWORD' ? keyword : undefined,
          regionCode: searchMode === 'REGION' ? regionCode : undefined,
          latitude: coords.latitude,
          longitude: coords.longitude,
          accessibilityCodes,
          sportIds,
          voucherStatus,
          page,
          size: PAGE_SIZE,
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
  }, [page, searchMode, regionCode, keyword, JSON.stringify(accessibilityCodes), JSON.stringify(sportIds), voucherStatus]);

  const goBack = () => navigate(-1);

  const goFilter = () => {
    navigate('/search-filter', { state: { ...location.state, searchMode, regionCode, keyword, accessibilityCodes, sportIds, voucherStatus } });
  };

  const goDetail = (facilityId) => {
    navigate(`/facility-detail/${facilityId}`);
  };

  return {
    page,
    setPage,
    keyword,
    accessibilityCodes,
    sportIds,
    voucherStatus,
    facilities,
    totalCount,
    loading,
    error,
    goBack,
    goFilter,
    goDetail,
  };
}