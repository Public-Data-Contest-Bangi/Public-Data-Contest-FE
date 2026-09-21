import { useDepartureSearch } from './hooks/useDepartureSearch';
import DepartureLocationIcon from './components/DepartureLocationIcon';
import {
  Container,
  Header,
  BackButton,
  Title,
  SearchWrap,
  SearchInput,
  ClearButton,
  ResultList,
  ResultItem,
  ResultPinWrap,
  ResultTextWrap,
  ResultName,
  ResultAddress,
  EmptyText,
} from './DepartureSearch.styled';

function DepartureSearch() {
  const { query, setQuery, results, handleClear, handleSelect, goBack } = useDepartureSearch();

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
        <Title>출발지 검색</Title>
      </Header>

      <SearchWrap>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#8C8C8C" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="#8C8C8C" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="출발지를 검색해주세요"
          autoFocus
        />
        {query && (
          <ClearButton type="button" aria-label="지우기" onClick={handleClear}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2l14 14M16 2L2 16" stroke="#B3B3B3" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </ClearButton>
        )}
      </SearchWrap>

      {results.length > 0 ? (
        <ResultList>
          {results.map((place) => (
            <ResultItem key={place.id} type="button" onClick={() => handleSelect(place)}>
              <ResultPinWrap>
                <DepartureLocationIcon />
              </ResultPinWrap>
              <ResultTextWrap>
                <ResultName>{place.name}</ResultName>
                <ResultAddress>{place.address}</ResultAddress>
              </ResultTextWrap>
            </ResultItem>
          ))}
        </ResultList>
      ) : (
        <EmptyText>검색 결과가 없어요</EmptyText>
      )}
    </Container>
  );
}

export default DepartureSearch;