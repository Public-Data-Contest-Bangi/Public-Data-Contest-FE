import client from './client';

export async function fetchFacilityDetail(facilityId, { latitude, longitude }) {
  const response = await client.get(`/api/facilities/${facilityId}`, {
    params: {
      latitude,
      longitude,
      coordinatePairValid: true,
    },
  });
  return response.data.data;
}