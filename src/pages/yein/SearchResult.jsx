import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import wheelchairIcon from '../../assets/icons/wheelchair-icon.png';
import rampIcon from '../../assets/icons/ramp-icon.png';
import elevatorIcon from '../../assets/icons/elevator-icon.png';
import restroomIcon from '../../assets/icons/restroom-icon.png';
import parkingIcon from '../../assets/icons/parking-icon.png';
import sportTagIcon from '../../assets/icons/sport-tag-icon.png';
import {
  Container,
  Header,
  BackButton,
  Title,
  FilterButton,
  CountText,
  ChipRow,
  Chip,
  List,
  Card,
  CardImage,
  CardBody,
  CardTitleRow,
  CardName,
  CardDistance,
  CardSports,
  CardAccessRow,
  CardChevron,
} from './SearchResult.styled';

const filterChips = ['계단 없는 출입', '장애인 화장실'];

const facilities = [
  {
    id: 1,
    name: '장충체육센터',
    distance: '850m',
    sports: '헬스 배드민턴 축구',
    accessibility: ['wheelchair', 'ramp', 'restroom', 'parking'],
  },
  {
    id: 2,
    name: '중구 다목적체육관',
    distance: '850m',
    sports: '헬스 배드민턴 축구',
    accessibility: ['wheelchair', 'ramp', 'restroom', 'parking'],
  },
];

const ACCESS_ICON_SIZE = 45;

function AccessIcon({ type }) {
  const iconMap = {
    wheelchair: wheelchairIcon,
    ramp: rampIcon,
    elevator: elevatorIcon,
    restroom: restroomIcon,
    parking: parkingIcon,
  };
  const src = iconMap[type];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }}
    />
  );
}

function SearchResult() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton type="button" aria-label="뒤로가기">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
              fill="#1A1A1A"
            />
          </svg>
        </BackButton>
        <Title>검색 결과</Title>
        <FilterButton type="button" aria-label="필터" onClick={() => navigate('/search-filter')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="9" cy="6" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
            <circle cx="16" cy="12" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
            <circle cx="10" cy="18" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
          </svg>
        </FilterButton>
      </Header>

      <CountText>총 27개</CountText>

      <ChipRow>
        {filterChips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </ChipRow>

      <List>
        {facilities.map((facility) => (
          <Card key={facility.id} onClick={() => navigate(`/facility-detail/${facility.id}`)}>
            <CardImage />
            <CardBody>
              <CardTitleRow>
                <CardName>{facility.name}</CardName>
                <CardDistance>{facility.distance}</CardDistance>
              </CardTitleRow>
              <CardSports>
                <img src={sportTagIcon} alt="" style={{ width: 14, height: 14, objectFit: 'contain' }} />
                {facility.sports}
              </CardSports>
              <CardAccessRow>
                {facility.accessibility.map((type) => (
                  <AccessIcon type={type} key={type} />
                ))}
                <CardChevron>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1l6 6-6 6"
                      stroke="#B3B3B3"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </CardChevron>
              </CardAccessRow>
            </CardBody>
          </Card>
        ))}
      </List>

      <BottomNav />
    </Container>
  );
}

export default SearchResult;