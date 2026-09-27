import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRegions from '../../Program/hooks/useRegions';
import { searchPlaces } from '../../../api/places';

export function useFacilitySearch() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [openMenu, setOpenMenu] = useState(null);
  const [regionLoading, setRegionLoading] = useState(false);

  const {
    province,
    city,
    subDistrict,
    provinces,
    cities,
    subDistricts,
    regionCode,
    isLoading: regionsLoading,
    selectProvince,
    selectCity,
    setSubDistrict,
  } = useRegions();

  const provinceRef = useRef(null);
  const cityRef = useRef(null);
  const subDistrictRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      const clickedProvince = provinceRef.current?.contains(e.target);
      const clickedCity = cityRef.current?.contains(e.target);
      const clickedSubDistrict = subDistrictRef.current?.contains(e.target);

      if (!clickedProvince && !clickedCity && !clickedSubDistrict) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProvinceSelect = (value) => {
    selectProvince(value);
    setOpenMenu(null);
  };

  const handleCitySelect = (value) => {
    selectCity(value);
    setOpenMenu(null);
  };

  const handleSubDistrictSelect = (value) => {
    setSubDistrict(value);
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

  const goKeywordSearch = () => {
    if (!keyword.trim()) return;
    navigate('/search-result', { state: { keyword: keyword.trim() } });
  };

  // 하위 구가 있는 지역이면 구까지 선택해야 검색 가능
  const canSearchRegion = Boolean(regionCode) && (subDistricts.length === 0 || Boolean(subDistrict));

  // 도/시/구 선택 후 "시설 검색하기" → 그 지역 좌표로 지도(/facility-map) 이동
  const goSearchResult = async () => {
    if (!canSearchRegion) return;

    setRegionLoading(true);

    const regionLabel = subDistrict ? `${province} ${city} ${subDistrict}` : `${province} ${city}`;

    try {
      const data = await searchPlaces({ keyword: regionLabel, page: 1, size: 1 });
      const place = data.places?.[0];

      if (place) {
        navigate('/facility-map', {
          state: {
            regionCoord: { latitude: place.latitude, longitude: place.longitude },
            regionLabel,
          },
        });
      } else {
        navigate('/facility-map', { state: { regionLabel } });
      }
    } catch (err) {
      console.error('지역 좌표 조회 실패:', err.response?.status, err.response?.data || err.message);
      navigate('/facility-map', { state: { regionLabel } });
    } finally {
      setRegionLoading(false);
    }
  };

  return {
    keyword,
    setKeyword,
    openMenu,
    provinceRef,
    cityRef,
    subDistrictRef,
    province,
    city,
    subDistrict,
    provinces,
    cities,
    subDistricts,
    regionsLoading,
    regionLoading,
    canSearchRegion,
    toggleMenu,
    handleProvinceSelect,
    handleCitySelect,
    handleSubDistrictSelect,
    goBack,
    goCurrentLocationMap,
    goKeywordSearch,
    goSearchResult,
  };
}