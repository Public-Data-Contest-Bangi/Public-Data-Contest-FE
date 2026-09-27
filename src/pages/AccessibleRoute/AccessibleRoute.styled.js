import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 100dvh;
  margin: 0 auto;
  background: #ffffff;
  font-family: 'Pretendard', sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  button {
    font-family: inherit;
  }
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

/* ── 계단 회피 토글 ───────────────── */

export const AvoidStairsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`;

export const AvoidStairsToggle = styled.button`
  position: relative;
  width: 44px;
  height: 26px;
  border-radius: 999px;
  border: none;
  background: ${(props) => (props.$active ? 'var(--color-primary)' : '#e4e4e4')};
  cursor: pointer;
  transition: background 0.2s ease;
  flex-shrink: 0;

  span {
    position: absolute;
    top: 3px;
    left: ${(props) => (props.$active ? '21px' : '3px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: left 0.2s ease;
  }
`;

/* ── 경로 검색 버튼 (공용 Button 감싸는 wrapper) ───────────────── */

export const SearchButtonWrap = styled.div`
  margin: 0 20px 20px;
  flex-shrink: 0;
`;

/* ── 지도 자리(placeholder) ───────────────── */

export const MapPlaceholder = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  background: #eef2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
`;
export const MapContainer = styled.div`
  position: absolute;
  inset: 0;
`;

export const MapPlaceholderText = styled.span`
  font-size: 13px;
  color: #b3b3b3;
`;

export const MapLocateButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 13px;
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

export const ResearchAreaButton = styled.button`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 10px 18px;
  border: none;
  border-radius: 999px;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

/* ── 시설 상세정보 시트 ───────────────── */

export const FacilitySheet = styled.div`
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  z-index: 999;
  background: #ffffff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
  padding: 16px 20px;
  box-sizing: border-box;
`;

export const SheetCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SheetToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #eef2f2;
`;

export const SheetInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const FacilityName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
`;

export const FacilityAddress = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: #999999;
`;

export const ChevronButton = styled.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${(props) => (props.$expanded ? '180deg' : '0deg')});
  transition: transform 0.2s ease;
`;

export const SheetExpanded = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eeeeee;
`;

export const AccessibilityLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
`;

export const AccessibilityDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
`;

export const AccessibilityLabelText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`;

export const AccessibilityGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const AccessibilityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const AccessibilityIconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccessibilityItemLabel = styled.span`
  font-size: 12px;
  color: #666666;
  text-align: center;
  line-height: 1.3;
`;

export const AccessibilityEmptyText = styled.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #b3b3b3;
`;

export const DetailButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 16px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;