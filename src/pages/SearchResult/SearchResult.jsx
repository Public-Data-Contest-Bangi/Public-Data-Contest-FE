import BottomNav from '../../components/BottomNav';
import { useSearchResult } from './hooks/useSearchResult';
import { formatDistance } from './utils/searchResultData';
import AccessIcon from './components/AccessIcon';
import {
  Container,
  Header,
  BackButton,
  Title,
  FilterButton,
  CountText,
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

function SearchResult() {
  const { keyword, facilities, totalCount, loading, error, goBack, goFilter, goDetail } = useSearchResult();

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
        <Title>검색 결과</Title>
        <FilterButton type="button" aria-label="필터" onClick={goFilter}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="9" cy="6" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
            <circle cx="16" cy="12" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
            <circle cx="10" cy="18" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
          </svg>
        </FilterButton>
      </Header>

      {loading && <CountText>&apos;{keyword}&apos; 검색 중...</CountText>}

      {!loading && error && <CountText>검색에 실패했어요. 잠시 후 다시 시도해주세요.</CountText>}

      {!loading && !error && (
        <>
          <CountText>총 {totalCount}개</CountText>

          {facilities.length === 0 ? (
            <CountText>검색 결과가 없어요</CountText>
          ) : (
            <List>
              {facilities.map((facility) => (
                <Card key={facility.facilityId} onClick={() => goDetail(facility.facilityId)}>
                  <CardImage
                    style={
                      facility.representativeImageUrl
                        ? {
                            backgroundImage: `url(${facility.representativeImageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : undefined
                    }
                  />
                  <CardBody>
                    <CardTitleRow>
                      <CardName>{facility.name}</CardName>
                      <CardDistance>{formatDistance(facility.distanceMeters)}</CardDistance>
                    </CardTitleRow>
                    <CardSports>{(facility.sports || []).map((s) => s.name).join(' ')}</CardSports>
                    <CardAccessRow>
                      {(facility.accessibilities || [])
                        .filter((a) => a.availability === 'AVAILABLE')
                        .map((a) => (
                          <AccessIcon key={a.code} name={a.name} />
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
          )}
        </>
      )}

      <BottomNav />
    </Container>
  );
}

export default SearchResult;