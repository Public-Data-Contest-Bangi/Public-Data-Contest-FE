import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    width: 100%;
    max-width: 480px;
    min-height: 100dvh;

    margin: 0 auto;

    background: #ffffff;

    font-family: inherit;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    button {
        font-family: inherit;
    }
`;

/* ── 출발 / 도착 카드 ───────────────── */

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

  top: calc(50% - 7px);
  left: 0;

  transform: translate(-50%, -50%);

  z-index: 1;

  width: 28px;
  height: 28px;

  padding: 0;
  margin: 0;

  border-radius: 50%;
  border: 1px solid #e4e4e4;

  background: #ffffff;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 0;

  -webkit-appearance: none;
  appearance: none;

  cursor: pointer;

  img,
  svg {
    display: block;

    width: 16px;
    height: 16px;

    flex-shrink: 0;
  }
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
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  border: none;
  border-radius: 50%;

  background: transparent;
  color: #64766e;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:disabled {
    opacity: 0.6;
  }
`;

/* ── 도보 / 대중교통 탭 ───────────────── */

export const RouteTabs = styled.div`
  display: flex;

  margin: 0 20px 14px;
  padding: 4px;

  background: #f4f6f5;

  border-radius: 14px;

  flex-shrink: 0;
`;

export const RouteTab = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  height: 42px;

  padding: 0;

  border: none;
  border-radius: 11px;

  background: ${(props) =>
    props.$active
      ? '#ffffff'
      : 'transparent'};

  color: ${(props) =>
    props.$active
      ? 'var(--color-primary)'
      : '#8c8c8c'};

  font-size: 14px;
  font-weight: 700;

  box-shadow: ${(props) =>
    props.$active
      ? '0 2px 8px rgba(0, 0, 0, 0.08)'
      : 'none'};

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
`;

/* ── 계단 회피 ───────────────── */

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

  background: ${(props) =>
    props.$active
      ? 'var(--color-primary)'
      : '#e4e4e4'};

  cursor: pointer;

  transition: background 0.2s ease;

  flex-shrink: 0;

  span {
    position: absolute;

    top: 3px;

    left: ${(props) =>
      props.$active
        ? '21px'
        : '3px'};

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background: #ffffff;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    transition: left 0.2s ease;
  }
`;

/* ── 검색 버튼 ───────────────── */

export const SearchButtonWrap = styled.div`
  margin: 14px 20px 16px;

  flex-shrink: 0;
`;

/* ── 대중교통 경로 결과 ───────────────── */

export const TransitResultCard = styled.div`
  margin: 0 20px 16px;

  padding: 16px;

  border: 1px solid #eeeeee;
  border-radius: 16px;

  background: #ffffff;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);

  flex-shrink: 0;
`;

export const TransitSummary = styled.div`
  padding-bottom: 14px;

  border-bottom: 1px solid #eeeeee;
`;

export const TransitTime = styled.div`
  font-size: 24px;
  font-weight: 800;

  color: #1a1a1a;

  line-height: 1.2;
`;

export const TransitMeta = styled.div`
  margin-top: 6px;

  font-size: 13px;
  font-weight: 500;

  color: #777777;
`;

export const TransitNotice = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 6px;

  margin-top: 12px;
  padding: 10px 12px;

  border-radius: 10px;

  background: #f1faf6;

  color: #5f746b;

  font-size: 12px;
  line-height: 1.5;

  span {
    flex-shrink: 0;

    color: var(--color-primary);

    font-weight: 700;
  }
`;

export const TransitLegList = styled.div`
  max-height: 210px;

  margin-top: 14px;

  overflow-y: auto;

  scrollbar-width: thin;
`;

export const TransitLeg = styled.div`
  display: flex;

  min-height: 72px;

  &:last-child {
    min-height: auto;
  }
`;

export const TransitTimeline = styled.div`
  position: relative;

  width: 18px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
`;

export const TransitTimelineDot = styled.span`
  position: relative;

  z-index: 2;

  width: 10px;
  height: 10px;

  margin-top: 6px;

  border-radius: 50%;

  background: ${(props) =>
    props.$color || '#9ea4aa'};

  border: 2px solid #ffffff;

  box-shadow: 0 0 0 1px
    ${(props) =>
      props.$color || '#9ea4aa'};
`;

export const TransitTimelineLine = styled.span`
  position: absolute;

  top: 17px;
  bottom: -6px;
  left: 50%;

  width: 2px;

  transform: translateX(-50%);

  background: #e4e4e4;
`;

export const TransitLegContent = styled.div`
  flex: 1;

  min-width: 0;

  padding: 0 0 16px 8px;
`;

export const TransitLegTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
`;

export const TransitModeBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 5px;

  min-width: 0;

  padding: 5px 9px;

  border-radius: 999px;

  background: ${(props) =>
    props.$walk
      ? '#f2f3f4'
      : props.$color || 'var(--color-primary)'};

  color: ${(props) =>
    props.$walk
      ? '#666666'
      : '#ffffff'};

  font-size: 12px;
  font-weight: 700;

  line-height: 1;

  span {
    font-size: 12px;
  }
`;

export const TransitLegTime = styled.span`
  flex-shrink: 0;

  font-size: 12px;
  font-weight: 600;

  color: #777777;
`;

export const TransitLegRoute = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;

  margin-top: 7px;

  font-size: 13px;
  font-weight: 600;

  color: #333333;

  line-height: 1.4;

  span {
    flex-shrink: 0;

    color: #aaaaaa;
  }
`;

export const TransitLegStops = styled.div`
  margin-top: 4px;

  font-size: 12px;

  color: #999999;
`;

/* ── 지도 ───────────────── */

export const MapPlaceholder = styled.div`
    position: relative;

    width: 100%;
    height: 520px;

    flex-shrink: 0;

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
  bottom: 80px;

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

/* ── 시설 미리보기 시트 ───────────────── */

export const FacilitySheet = styled.div`
    position: fixed;

    left: 50%;
    bottom: 64px;

    transform: translateX(-50%);

    width: 100%;
    max-width: 480px;

    z-index: 999;

    background: #ffffff;

    border-radius: 20px 20px 0 0;

    box-shadow:
        0 -4px 16px
        rgba(0, 0, 0, 0.08);

    padding: 10px;

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

  padding-right: 28px;
`;

export const FacilityName = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: 700;

  color: #1a1a1a;

  line-height: 22px;

  word-break: keep-all;
  overflow-wrap: anywhere;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

  transform: rotate(
    ${(props) =>
      props.$expanded
        ? '180deg'
        : '0deg'}
  );

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