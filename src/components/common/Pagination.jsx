import styled from 'styled-components';

export const PAGE_SIZE = 15;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  padding: 24px 0;
  button {
    min-width: 36px;
    min-height: 44px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    background: white;
    color: #333;
    cursor: pointer;
  }
  button[aria-current='page'] { background: #40d293; color: #fff; border-color: #40d293; }
  button:disabled { opacity: .4; cursor: default; }
  button:focus-visible { outline: 2px solid #16865e; outline-offset: 2px; }
`;
export default function Pagination({ page, totalCount, onPageChange, disabled = false }) {
  const count = Math.ceil(totalCount / PAGE_SIZE);
  if (count <= 1) return null;
  const start = Math.max(0, Math.min(page - 2, count - 5));
  return <Nav aria-label="목록 페이지">
    <button type="button" disabled={disabled || page === 0} onClick={() => onPageChange(page - 1)}>이전</button>
    {Array.from({ length: Math.min(5, count) }, (_, index) => start + index).map(index =>
      <button type="button" key={index} aria-label={`${index + 1}페이지`} aria-current={page === index ? 'page' : undefined}
        disabled={disabled} onClick={() => onPageChange(index)}>{index + 1}</button>)}
    <button type="button" disabled={disabled || page >= count - 1} onClick={() => onPageChange(page + 1)}>다음</button>
  </Nav>;
}
