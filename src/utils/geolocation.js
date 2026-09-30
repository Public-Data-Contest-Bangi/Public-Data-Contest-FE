const DEFAULT_COORD = { latitude: 37.5665, longitude: 126.978 };
const MAX_AGE = 60_000;
let pendingPosition = null;

export function getCurrentCoords() {
  if (pendingPosition) return pendingPosition;
  if (!navigator.geolocation) return Promise.resolve(DEFAULT_COORD);

  pendingPosition = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
      () => resolve(DEFAULT_COORD),
      { timeout: 5000, maximumAge: MAX_AGE }
    );
  }).finally(() => {
    pendingPosition = null;
  });

  return pendingPosition;
}
