import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import swapIcon from '../../assets/icons/swap-icon.png';
import locationIcon from '../../assets/icons/location-icon.png';
import {
  Container,
  Header,
  BackButton,
  Title,
  RouteCard,
  Row,
  Dot,
  PinIconWrap,
  DashedLine,
  SwapButton,
  RowLabel,
  RowValue,
  GpsButton,
  SearchButton,
  MapPlaceholder,
  MapPlaceholderText,
  MapLocateButton,
} from './AccessibleRoute.styled';

function AccessibleRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const [departure, setDeparture] = useState(location.state?.departure || '현재 위치');
  const [arrival, setArrival] = useState('중구 체육센터');

  const handleSwap = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  return (
    <Container>
      <Header>
        <BackButton type="button" aria-label="뒤로가기" onClick={() => navigate(-1)}>
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
              fill="#1A1A1A"
            />
          </svg>
        </BackButton>
        <Title>무장애 경로 안내</Title>
      </Header>

      <RouteCard>
        <Row>
          <Dot />
          <RowLabel>출발</RowLabel>
          <RowValue
            as="button"
            type="button"
            style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => navigate('/departure-search')}
          >
            {departure}
          </RowValue>
          <GpsButton type="button" aria-label="현재 위치로">
            <img src={locationIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />
          </GpsButton>
        </Row>

        <DashedLine>
          <SwapButton type="button" aria-label="출발/도착 바꾸기" onClick={handleSwap}>
            <img src={swapIcon} alt="" style={{ width: 14, height: 16, objectFit: 'contain' }} />
          </SwapButton>
        </DashedLine>

        <Row>
          <PinIconWrap>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 15S13.5 9.5 13.5 6a5.5 5.5 0 1 0-11 0C2.5 9.5 8 15 8 15Z"
                fill="#FF5A5F"
              />
              <circle cx="8" cy="6" r="2" fill="#ffffff" />
            </svg>
          </PinIconWrap>
          <RowLabel>도착</RowLabel>
          <RowValue>{arrival}</RowValue>
        </Row>
      </RouteCard>

      <SearchButton type="button">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L2 8l6 2 2 6 6-14Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        경로 검색
      </SearchButton>

      <MapPlaceholder>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22s7-6.2 7-11.5A7 7 0 0 0 5 10.5C5 15.8 12 22 12 22Z"
            stroke="#B3C2C2"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10.5" r="2.3" stroke="#B3C2C2" strokeWidth="1.8" />
        </svg>
        <MapPlaceholderText>지도 영역 (준비 중)</MapPlaceholderText>

        <MapLocateButton type="button" aria-label="현재 위치로 이동">
          <img src={locationIcon} alt="" style={{ width: 18, height: 18, objectFit: 'contain' }} />
        </MapLocateButton>
      </MapPlaceholder>

      <BottomNav />
    </Container>
  );
}

export default AccessibleRoute;