import BottomNav from '../../components/BottomNav';
import wheelchairIcon from '../../assets/icons/wheelchair-icon.png';
import rampIcon from '../../assets/icons/ramp-icon.png';
import elevatorIcon from '../../assets/icons/elevator-icon.png';
import restroomIcon from '../../assets/icons/restroom-icon.png';
import parkingIcon from '../../assets/icons/parking-icon.png';
import { useFacilityDetail } from './hooks/useFacilityDetail';
import { ACCESS_ICON_SIZE } from './utils/facilityDetailData';
import ImagePlaceholderIcon from './components/ImagePlaceholderIcon';
import CheckIcon from './components/CheckIcon';
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

const ACCESS_ICON_MAP = {
  wheelchair: wheelchairIcon,
  ramp: rampIcon,
  elevator: elevatorIcon,
  restroom: restroomIcon,
  parking: parkingIcon,
};

function matchAccessIcon(name) {
  if (name?.includes('휠체어')) return wheelchairIcon;
  if (name?.includes('경사로')) return rampIcon;
  if (name?.includes('엘리베이터')) return elevatorIcon;
  if (name?.includes('화장실')) return restroomIcon;
  if (name?.includes('주차')) return parkingIcon;
  return null;
}

function formatDistance(meters) {
  if (meters === null || meters === undefined) return '';
  if (meters < 1000) return `${Math.round(meters)}m`;
  return `${(meters / 1000).toFixed(1)}km`;
}

function FacilityDetail() {
  const {
    facility,
    loading,
    error,
    activeSlide,
    favorite,
    trackRef,
    slideCount,
    handleScroll,
    toggleFavorite,
    handleProgramClick,
    goBack,
    goAccessibleRoute,
  } = useFacilityDetail();

  if (loading) {
    return (
      <Container>
        <Header>
          <BackButton type="button" aria-label="뒤로가기" onClick={goBack}>
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
                fill="#1A1A1A"
              />
            </svg>
          </BackButton>
          <Title>시설 상세</Title>
        </Header>
        <InfoSection>
          <AddressText>불러오는 중...</AddressText>
        </InfoSection>
      </Container>
    );
  }

  if (error || !facility) {
    return (
      <Container>
        <Header>
          <BackButton type="button" aria-label="뒤로가기" onClick={goBack}>
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
                fill="#1A1A1A"
              />
            </svg>
          </BackButton>
          <Title>시설 상세</Title>
        </Header>
        <InfoSection>
          <AddressText>시설 정보를 불러오지 못했어요.</AddressText>
        </InfoSection>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton type="button" aria-label="뒤로가기" onClick={goBack}>
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
          onClick={toggleFavorite}
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
          {slideCount > 0 ? (
            facility.imageUrls.map((url, i) => (
              <Slide key={i}>
                <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Slide>
            ))
          ) : (
            <Slide>
              <ImagePlaceholderIcon />
            </Slide>
          )}
        </CarouselTrack>
        {slideCount > 1 && (
          <DotsRow>
            {Array.from({ length: slideCount }).map((_, i) => (
              <Dot key={i} $active={i === activeSlide} />
            ))}
          </DotsRow>
        )}
      </Carousel>

      <InfoSection>
        <NameRow>
          <Name>{facility.name}</Name>
          <Distance>{formatDistance(facility.distanceMeters)}</Distance>
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
            {(facility.accessibilities || [])
              .filter((a) => a.availability === 'AVAILABLE')
              .map((a) => {
                const icon = matchAccessIcon(a.name);
                if (!icon) return null;
                return (
                  <img
                    key={a.code}
                    src={icon}
                    alt={a.name}
                    title={a.name}
                    style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }}
                  />
                );
              })}
          </AccessRow>
        </CardBody>
      </Card>

      <Card>
        <CardTitleRow>
          <CheckIcon />
          <CardTitle>이용 가능 종목</CardTitle>
        </CardTitleRow>
        <CardBody>
          <AccessRow>
            {(facility.sports || []).map((s) => (
              <span key={s.sportId} style={{ fontSize: 14, color: '#1a1a1a' }}>
                {s.name}
              </span>
            ))}
          </AccessRow>
        </CardBody>
      </Card>

      {facility.voucherStatus === 'AVAILABLE' && (
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
      )}

      <ProgramCard
        type="button"
        onClick={handleProgramClick}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="3"
            width="20"
            height="22"
            rx="2"
            fill="var(--color-primary)"
          />
          <path
            d="M9 9h10M9 13h10M9 17h6"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>

        <ProgramTextWrap>
          <ProgramTitle>
            운영 프로그램
          </ProgramTitle>
        </ProgramTextWrap>

        <ProgramLink>
          자세히 보기 &gt;
        </ProgramLink>
      </ProgramCard>

      <RouteButton type="button" onClick={goAccessibleRoute}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L2 8l6 2 2 6 6-14Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        경로 보기
      </RouteButton>

      <BottomNav />
    </Container>
  );
}

export default FacilityDetail;