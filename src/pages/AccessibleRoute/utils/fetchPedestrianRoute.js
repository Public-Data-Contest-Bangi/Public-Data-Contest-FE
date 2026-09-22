export async function fetchPedestrianRoute(start, end, appKey) {
  const response = await fetch(
    'https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json',
    {
      method: 'POST',
      headers: {
        appKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startX: String(start.lng),
        startY: String(start.lat),
        endX: String(end.lng),
        endY: String(end.lat),
        startName: '출발',
        endName: '도착',
      }),
    }
  );

  if (!response.ok) {
    throw new Error('경로 조회 실패');
  }

  const data = await response.json();

  const coords = [];
  data.features.forEach((feature) => {
    if (feature.geometry.type === 'LineString') {
      feature.geometry.coordinates.forEach(([lng, lat]) => {
        coords.push({ lat, lng });
      });
    }
  });

  return coords;
}