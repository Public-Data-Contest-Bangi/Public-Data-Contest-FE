import client from './client';

export async function searchRoute({ startLatitude, startLongitude, endLatitude, endLongitude, routeType }) {
  const response = await client.post('/api/routes', {
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
    routeType, // 'NORMAL' | 'AVOID_STAIRS'
  });
  return response.data.data; // { routeType, totalDistanceMeters, totalTimeSeconds, pathSegments, guidePoints }
}