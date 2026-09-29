import { useState } from 'react';
import { PAGE_SIZE } from '../components/common/Pagination';

export default function useListPagination(items) {
  const [selection, setSelection] = useState({ items, page: 0 });
  const page = selection.items === items
    ? Math.min(selection.page, Math.max(0, Math.ceil(items.length / PAGE_SIZE) - 1)) : 0;
  return {
    page,
    setPage: next => setSelection({ items, page: next }),
    pageItems: items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
  };
}
