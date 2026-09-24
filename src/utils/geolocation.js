const DEFAULT_COORD = { latitude: 37.5665, longitude: 126.978 };

export function getCurrentCoords() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(DEFAULT_COORD);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        resolve(DEFAULT_COORD);
      },
      { timeout: 5000 }
    );
  });
}