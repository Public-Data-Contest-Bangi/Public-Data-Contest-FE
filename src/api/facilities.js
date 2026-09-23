import client from './client';

export async function fetchFacilityMarkers({ south, north, west, east, zoom }) {
  const response = await client.get('/api/facilities/markers', {
    params: { south, north, west, east, zoom },
  });
  return response.data.data; // { totalCount, facilities, clusters }
}