import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 100dvh;
  margin: 0 auto;
  background: #ffffff;
  font-family: inherit;
  box-sizing: border-box;
  padding-bottom: 96px;

  button,
  input,
  select {
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

export const FilterButton = styled.button`
  position: absolute;
  right: 20px;
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

/* ── 개수 / 필터 칩 ───────────────── */

export const CountText = styled.p`
  margin: 8px 20px 12px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

export const ChipRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 20px;
  margin-bottom: 16px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled.span`
  flex-shrink: 0;
  padding: 8px 14px;
  border-radius: 999px;
  background: #f3f3f3;
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
`;

/* ── 리스트 / 카드 ───────────────── */

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

export const Card = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 160px;
  background: #e4e4e4;
`;

export const CardBody = styled.div`
  padding: 14px 16px 16px;
`;

export const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const CardName = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #000000;
`;

export const CardDistance = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const CardSports = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const SportChip = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #8c8c8c;
`;

export const SportChipIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const CardAccessRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardChevron = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
`;