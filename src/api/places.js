import client from './client';

export async function searchPlaces({ keyword, page = 1, size = 20 }) {
  const response = await client.get('/api/places', {
    params: { keyword, page, size },
  });
  return response.data.data; // { totalCount, page, size, places }
}