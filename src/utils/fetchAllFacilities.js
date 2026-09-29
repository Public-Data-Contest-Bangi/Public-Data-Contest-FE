export default async function fetchAllFacilities(fetchPage, params) {
  const facilities = [];
  let page = 0;
  while (true) {
    if (params.signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    const data = await fetchPage({ ...params, page, size: 100 });
    const batch = data?.facilities ?? [];
    facilities.push(...batch);
    if (!batch.length || data?.hasNext === false ||
        (data?.totalCount != null && facilities.length >= data.totalCount) ||
        (data?.hasNext == null && batch.length < 100)) break;
    page += 1;
  }
  return { facilities };
}
