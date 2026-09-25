import client from './client';

export async function fetchFacilityMarkers({ south, north, west, east, zoom }) {
  const response = await client.get('/api/facilities/markers', {
    params: { south, north, west, east, zoom },
  });
  return response.data.data;
}

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
}) {
  const params = {
    searchMode,
    latitude,
    longitude,
    page,
    size,
    voucherStatus: voucherStatus || 'ALL',
  };

  if (keyword) params.keyword = keyword;
  if (regionCode) params.regionCode = regionCode;
  if (accessibilityCodes && accessibilityCodes.length > 0) {
    params.accessibilityCodes = accessibilityCodes;
  }
  if (sportIds && sportIds.length > 0) {
    params.sportIds = sportIds;
  }

  const response = await client.get('/api/facilities', { params });
  return response.data.data; // { totalCount, page, size, hasNext, appliedRadiusKm, facilities }
}