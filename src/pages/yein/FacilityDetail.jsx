import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import wheelchairIcon from '../../assets/icons/wheelchair-icon.png';
import rampIcon from '../../assets/icons/ramp-icon.png';
import restroomIcon from '../../assets/icons/restroom-icon.png';
import parkingIcon from '../../assets/icons/parking-icon.png';
import {
  Container,
  Header,
  BackButton,
  Title,
  FavoriteButton,
  Carousel,
  CarouselTrack,
  Slide,
  DotsRow,
  Dot,
  InfoSection,
  NameRow,
  Name,
  Distance,
  AddressText,
  PhoneText,
  Card,
  CardTitleRow,
  CardTitle,
  CardBody,
  AccessRow,
  HoursRow,
  HoursLabel,
  HoursValue,
  VoucherCard,
  VoucherText,
  VoucherTitle,
  VoucherSubtitle,
  ProgramCard,
  ProgramTextWrap,
  ProgramTitle,
  ProgramLink,
  RouteButton,
} from './FacilityDetail.styled';

const facilitiesDetail = {
  1: {
    name: '장충체육센터',
    distance: '850m',
    address: '서울특별시 중구 동호로 249',
    phone: '02-2233-4567',
    hours: '매일 06:00 - 22:00',
    closedDay: '매주 월요일',
  },
  2: {
    name: '중구 다목적체육관',
    distance: '850m',
    address: '서울특별시 중구 00로 123',
    phone: '02-012-3456',
    hours: '매일 06:00 - 22:00',
    closedDay: '매주 월요일',
  },
};

const ACCESS_ICON_SIZE = 28;

function ImagePlaceholderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="6" stroke="#C7C7C7" strokeWidth="2" />
      <circle cx="14" cy="14" r="3" stroke="#C7C7C7" strokeWidth="2" />
      <path
        d="M6 28l9-9 6 6 5-5 8 8"
        stroke="#C7C7C7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="9" fill="var(--color-primary)" />
      <path
        d="M5 9.3l2.6 2.6L13 6.5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacilityDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const facility = facilitiesDetail[id] || facilitiesDetail[2];

  const [activeSlide, setActiveSlide] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const trackRef = useRef(null);
  const slideCount = 3;

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveSlide(index);
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
        <Title>시설 상세</Title>
        <FavoriteButton
          type="button"
          aria-label="찜하기"
          onClick={() => setFavorite((prev) => !prev)}
        >
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 19S1.5 13 1.5 6.8A5.3 5.3 0 0 1 11 3.4a5.3 5.3 0 0 1 9.5 3.4C20.5 13 11 19 11 19Z"
              stroke="#1A1A1A"
              strokeWidth="1.8"
              strokeLinejoin="round"
              fill={favorite ? '#1A1A1A' : 'none'}
            />
          </svg>
        </FavoriteButton>
      </Header>

      <Carousel>
        <CarouselTrack ref={trackRef} onScroll={handleScroll}>
          {Array.from({ length: slideCount }).map((_, i) => (
            <Slide key={i}>
              <ImagePlaceholderIcon />
            </Slide>
          ))}
        </CarouselTrack>
        <DotsRow>
          {Array.from({ length: slideCount }).map((_, i) => (
            <Dot key={i} $active={i === activeSlide} />
          ))}
        </DotsRow>
      </Carousel>

      <InfoSection>
        <NameRow>
          <Name>{facility.name}</Name>
          <Distance>{facility.distance}</Distance>
        </NameRow>
        <AddressText>{facility.address}</AddressText>
        <PhoneText>{facility.phone}</PhoneText>
      </InfoSection>

      <Card>
        <CardTitleRow>
          <CheckIcon />
          <CardTitle>접근성 정보</CardTitle>
        </CardTitleRow>
        <CardBody>
          <AccessRow>
            <img src={wheelchairIcon} alt="" style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }} />
            <img src={rampIcon} alt="" style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }} />
            <img src={restroomIcon} alt="" style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }} />
            <img src={parkingIcon} alt="" style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }} />
          </AccessRow>
        </CardBody>
      </Card>

      <Card>
        <CardTitleRow>
          <CheckIcon />
          <CardTitle>운영 정보</CardTitle>
        </CardTitleRow>
        <CardBody>
          <HoursRow>
            <HoursLabel>운영 시간</HoursLabel>
            <HoursValue>{facility.hours}</HoursValue>
          </HoursRow>
          <HoursRow>
            <HoursLabel>휴무일</HoursLabel>
            <HoursValue>{facility.closedDay}</HoursValue>
          </HoursRow>
        </CardBody>
      </Card>

      <Card>
        <CardTitleRow>
          <CheckIcon />
          <CardTitle>이용 가능 종목</CardTitle>
        </CardTitleRow>
        <CardBody />
      </Card>

      <VoucherCard>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="8" width="22" height="12" rx="2" stroke="var(--color-primary)" strokeWidth="1.8" />
          <path d="M3 14h4M21 14h4" stroke="var(--color-primary)" strokeWidth="1.8" strokeDasharray="2 2" />
        </svg>
        <VoucherText>
          <VoucherTitle>스포츠 바우처</VoucherTitle>
          <VoucherSubtitle>이용 가능 시설입니다.</VoucherSubtitle>
        </VoucherText>
      </VoucherCard>

      <ProgramCard type="button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="3" width="20" height="22" rx="2" fill="var(--color-primary)" />
          <path d="M9 9h10M9 13h10M9 17h6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <ProgramTextWrap>
          <ProgramTitle>운영 프로그램</ProgramTitle>
        </ProgramTextWrap>
        <ProgramLink>자세히 보기 &gt;</ProgramLink>
      </ProgramCard>

      <RouteButton type="button" onClick={() => navigate('/accessible-route')}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L2 8l6 2 2 6 6-14Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        무장애 경로 보기
      </RouteButton>

      <BottomNav />
    </Container>
  );
}

export default FacilityDetail;
