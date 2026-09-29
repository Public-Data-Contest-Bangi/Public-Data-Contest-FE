import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 816px;
  margin: 0 auto;
  background: #ffffff;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  button,
  input {
    font-family: inherit;
  }
`;

/* ── 헤더 ───────────────── */

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 20px;
  flex-shrink: 0;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

/* ── 검색창 ───────────────── */

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 20px 16px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #f3f3f3;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: #000000;

  &::placeholder {
    color: #b3b3b3;
  }
`;

export const ClearButton = styled.button`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/* ── 결과 리스트 ───────────────── */

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultItem = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 14px 20px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
`;

export const ResultPinWrap = styled.span`
  flex-shrink: 0;
  padding-top: 2px;
`;

export const ResultTextWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ResultName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

export const ResultAddress = styled.span`
  font-size: 13px;
  color: #8c8c8c;
`;

export const EmptyText = styled.p`
  margin: 40px 20px 0;
  font-size: 14px;
  color: #b3b3b3;
  text-align: center;
`;
