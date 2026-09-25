import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGION_DATA } from '../utils/regionData';
import { searchPlaces } from '../../../api/places';

export function useFacilitySearch() {
  const navigate = useNavigate();
  const [province, setProvince] = useState('서울특별시');
  const [district, setDistrict] = useState(REGION_DATA['서울특별시'][0]);
  const [openMenu, setOpenMenu] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [regionLoading, setRegionLoading] = useState(false);

  const provinceRef = useRef(null);
  const districtRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      const insideProvince = provinceRef.current && provinceRef.current.contains(e.target);
      const insideDistrict = districtRef.current && districtRef.current.contains(e.target);
      if (!insideProvince && !insideDistrict) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProvince = (p) => {
    setProvince(p);
    setDistrict(REGION_DATA[p][0]);
    setOpenMenu(null);
  };

  const handleSelectDistrict = (d) => {
    setDistrict(d);
    setOpenMenu(null);
  };

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const goBack = () => {
    navigate(-1);
  };

  const goCurrentLocationMap = () => {
    navigate('/facility-map');
  };

  // 시설명 검색창 → 검색 버튼 클릭 → SearchResult로 이동 (키워드 검색)
  const goKeywordSearch = () => {
    if (!keyword.trim()) return;
    navigate('/search-result', { state: { keyword: keyword.trim() } });
  };

  const goSearchResult = async () => {
    setRegionLoading(true);

    try {
      const data = await searchPlaces({ keyword: `${province} ${district}`, page: 1, size: 1 });
      const place = data.places?.[0];

      if (place) {
        navigate('/facility-map', {
          state: {
            regionCoord: { latitude: place.latitude, longitude: place.longitude },
            regionLabel: `${province} ${district}`,
          },
        });
      } else {
        navigate('/facility-map', { state: { regionLabel: `${province} ${district}` } });
      }
    } catch (err) {
      console.error('지역 좌표 조회 실패:', err.response?.status, err.response?.data || err.message);
      navigate('/facility-map', { state: { regionLabel: `${province} ${district}` } });
    } finally {
      setRegionLoading(false);
    }
  };

  return {
    province,
    district,
    openMenu,
    provinceRef,
    districtRef,
    keyword,
    setKeyword,
    regionLoading,
    handleSelectProvince,
    handleSelectDistrict,
    toggleMenu,
    goBack,
    goCurrentLocationMap,
    goKeywordSearch,
    goSearchResult,
  };
}