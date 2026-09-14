import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 816px;
  margin: 0 auto;
  background: #ffffff;
  font-family: 'Pretendard', sans-serif;
  box-sizing: border-box;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;

  button {
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

/* ── 출발/도착 카드 ───────────────── */

export const RouteCard = styled.div`
  position: relative;
  margin: 4px 20px 16px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 3px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
`;

export const PinIconWrap = styled.span`
  width: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashedLine = styled.div`
  position: relative;
  width: 0;
  height: 18px;
  margin: 0 0 0 8px;
  border-left: 1.5px dashed #cccccc;
`;

export const SwapButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RowLabel = styled.span`
  flex-shrink: 0;
  min-width: 32px;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`;

export const RowValue = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const GpsButton = styled.button`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/* ── 경로 검색 버튼 ───────────────── */

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: calc(100% - 40px);
  margin: 0 20px 20px;
  padding: 16px;
  border: none;
  border-radius: 16px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
`;

/* ── 지도 자리(placeholder) ───────────────── */

export const MapPlaceholder = styled.div`
  position: relative;
  flex: 1;
  min-height: 320px;
  background: #eef2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const MapPlaceholderText = styled.span`
  font-size: 13px;
  color: #b3b3b3;
`;

export const MapLocateButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;