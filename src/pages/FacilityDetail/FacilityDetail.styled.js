import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 100dvh;
  margin: 0 auto;
  background: #ffffff;
  font-family: 'Pretendard', sans-serif;
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

export const FavoriteButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/* ── 이미지 캐러셀 ───────────────── */

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background: #f2f2f2;
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotsRow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => (props.$active ? '#8c8c8c' : '#d9d9d9')};
`;

/* ── 기본 정보 ───────────────── */

export const InfoSection = styled.div`
  padding: 16px 20px 20px;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  color: #000000;
`;

export const Distance = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const AddressText = styled.p`
  margin: 0 0 4px;
  font-size: 13px;
  color: #8c8c8c;
`;

export const PhoneText = styled.p`
  margin: 0;
  font-size: 13px;
  color: #8c8c8c;
`;

/* ── 카드 공통 ───────────────── */

export const Card = styled.div`
  margin: 0 20px 12px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
`;

export const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

export const CardBody = styled.div``;

export const AccessRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const HoursRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HoursLabel = styled.span`
  flex-shrink: 0;
  width: 56px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const HoursValue = styled.span`
  font-size: 14px;
  color: #666666;
`;

/* ── 바우처 / 프로그램 ───────────────── */

export const VoucherCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 20px 12px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
`;

export const VoucherText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const VoucherTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
  text-decoration: underline;
`;

export const VoucherSubtitle = styled.span`
  font-size: 13px;
  color: #8c8c8c;
`;

export const ProgramCard = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: calc(100% - 40px);
  margin: 0 20px 20px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ProgramTextWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`;

export const ProgramTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`;

export const ProgramLink = styled.span`
  font-size: 13px;
  color: #8c8c8c;
  flex-shrink: 0;
`;

/* ── 무장애 경로 버튼 ───────────────── */

export const RouteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: calc(100% - 40px);
  margin: 0 20px;
  padding: 16px;
  border: none;
  border-radius: 16px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;