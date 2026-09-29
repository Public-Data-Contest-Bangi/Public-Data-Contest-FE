import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import useRegions from '../../Program/hooks/useRegions';

import {
  searchPlaces,
} from '../../../api/places';

function getFirstPlace(result) {
  const data =
    result?.data ?? result;

  if (Array.isArray(data)) {
    return data[0] ?? null;
  }

  const list =
    data?.places ??
    data?.results ??
    data?.items ??
    data?.pois ??
    data?.content ??
    [];

  if (Array.isArray(list)) {
    return list[0] ?? null;
  }

  return data ?? null;
}

function getPlaceCoord(place) {
  if (!place) {
    return null;
  }

  const coordinate =
    place.coordinate ??
    place.coord ??
    place.location ??
    {};

  const latitude = Number(
    place.latitude ??
      place.lat ??
      place.frontLat ??
      place.noorLat ??
      coordinate.latitude ??
      coordinate.lat
  );

  const longitude = Number(
    place.longitude ??
      place.lng ??
      place.lon ??
      place.frontLon ??
      place.noorLon ??
      coordinate.longitude ??
      coordinate.lng ??
      coordinate.lon
  );

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    return null;
  }

  return {
    latitude,
    longitude,
  };
}

async function getSearchCoord(keyword) {
  let result;

  try {
    result =
      await searchPlaces(keyword);
  } catch (firstError) {
    try {
      result =
        await searchPlaces({
          keyword,
        });
    } catch {
      throw firstError;
    }
  }

  const place =
    getFirstPlace(result);

  return getPlaceCoord(place);
}

export function useFacilitySearch() {
  const navigate =
    useNavigate();

  const [
    keyword,
    setKeyword,
  ] = useState('');

  const [
    openMenu,
    setOpenMenu,
  ] = useState(null);

  const [
    regionLoading,
    setRegionLoading,
  ] = useState(false);

  const {
    province,
    city,
    subDistrict,

    provinces,
    cities,
    subDistricts,

    regionCode,

    isLoading:
      regionsLoading,

    selectProvince,
    selectCity,
    setSubDistrict,
  } = useRegions();

  const provinceRef =
    useRef(null);

  const cityRef =
    useRef(null);

  const subDistrictRef =
    useRef(null);

  useEffect(() => {
    function handleClickOutside(
      event
    ) {
      const clickedProvince =
        provinceRef.current?.contains(
          event.target
        );

      const clickedCity =
        cityRef.current?.contains(
          event.target
        );

      const clickedSubDistrict =
        subDistrictRef.current?.contains(
          event.target
        );

      if (
        !clickedProvince &&
        !clickedCity &&
        !clickedSubDistrict
      ) {
        setOpenMenu(null);
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  const handleProvinceSelect = (
    value
  ) => {
    selectProvince(value);
    setOpenMenu(null);
  };

  const handleCitySelect = (
    value
  ) => {
    selectCity(value);
    setOpenMenu(null);
  };

  const handleSubDistrictSelect = (
    value
  ) => {
    setSubDistrict(value);
    setOpenMenu(null);
  };

  const toggleMenu = (
    menu
  ) => {
    setOpenMenu((prev) =>
      prev === menu
        ? null
        : menu
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  // 현재 위치 검색 → 지도
  const goCurrentLocationMap =
    () => {
      navigate(
        '/facility-map'
      );
    };

  /*
   * 시설명 검색 → 목록
   *
   * 앞뒤 공백 제거
   * + 중간 공백도 모두 제거
   *
   * ex)
   * "  오성 체육관  "
   * → "오성체육관"
   */
  const goKeywordSearch = () => {
    const normalizedKeyword =
      keyword
        .trim()
        .replace(/\s+/g, '');

    if (!normalizedKeyword) {
      return;
    }

    navigate(
      '/search-result',
      {
        state: {
          keyword:
            normalizedKeyword,

          searchMode:
            'KEYWORD',
        },
      }
    );
  };

  // 도/시만 선택해도 검색 가능
  const canSearchRegion =
    Boolean(province);

  // 지역 검색 → 지도
  const goSearchResult =
    async () => {
      if (
        !province ||
        regionLoading
      ) {
        return;
      }

      const regionName =
        [
          province,
          city,
          subDistrict,
        ]
          .filter(Boolean)
          .join(' ');

      try {
        setRegionLoading(true);

        const regionCoord =
          await getSearchCoord(
            regionName
          );

        if (!regionCoord) {
          console.error(
            '선택한 지역의 좌표를 찾을 수 없습니다.',
            {
              province,
              city,
              subDistrict,
              regionName,
            }
          );

          return;
        }

        navigate(
          '/facility-map',
          {
            state: {
              searchMode:
                'REGION',

              province,

              city:
                city ||
                null,

              subDistrict:
                subDistrict ||
                null,

              regionCode:
                regionCode ||
                null,

              regionName,

              regionCoord,
            },
          }
        );
      } catch (error) {
        console.error(
          '지역 위치 조회 실패:',
          error
        );
      } finally {
        setRegionLoading(
          false
        );
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