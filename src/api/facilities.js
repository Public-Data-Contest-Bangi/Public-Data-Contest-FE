import client from './client';

export async function fetchFacilityMarkers({
  south,
  north,
  west,
  east,
  zoom,
}) {
  const response = await client.get(
    '/api/facilities/markers',
    {
      params: {
        south,
        north,
        west,
        east,
        zoom,
      },
    }
  );

  return response.data.data;
}

// 일반 시설 검색
export async function searchFacilities({
  searchMode,
  keyword,
  latitude,
  longitude,
  regionCode,
  accessibilityCodes,
  sportIds,
  voucherStatus,
  page = 0,
  size = 20,
  signal,
}) {
  const params = {
    searchMode,
    latitude,
    longitude,
    page,
    size,
    voucherStatus:
      voucherStatus || 'ALL',
  };

  if (keyword) {
    params.keyword = keyword;
  }

  if (regionCode) {
    params.regionCode = regionCode;
  }

  if (
    accessibilityCodes &&
    accessibilityCodes.length > 0
  ) {
    params.accessibilityCodes =
      accessibilityCodes;
  }

  if (
    sportIds &&
    sportIds.length > 0
  ) {
    params.sportIds = sportIds;
  }

  const response = await client.get(
    '/api/facilities',
    {
      params,
      signal,
      paramsSerializer: {
        indexes: null,
      },
    }
  );

  return response.data.data;
}

// 프로그램 둘러보기 전용 시설 검색
export async function searchProgramFacilities({
  searchMode,
  latitude,
  longitude,
  regionCode,
  sportIds,
  page = 0,
  size = 20,
  signal,
}) {
  const params = {
    searchMode,
    latitude,
    longitude,
    sportIds,
    page,
    size,
  };

  if (
    searchMode === 'REGION' &&
    regionCode
  ) {
    params.regionCode =
      regionCode;
  }

  const response = await client.get(
    '/api/program-facilities',
    {
      params,
      signal,
      paramsSerializer: {
        indexes: null,
      },
    }
  );

  return response.data.data;
}

// 시설 운영 프로그램 조회
export async function getFacilityPrograms(
  facilityId,
  config = {}
) {
  const response = await client.get(
    `/api/facilities/${facilityId}/programs`,
    config
  );

  return response.data;
}

// 지역 조회
export async function fetchRegions() {
  const response = await client.get(
    '/api/regions'
  );

  return (
    response.data.data?.regions ?? []
  );
}