import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const allPlaces = [
  { id: 1, name: '장충체육관', address: '서울특별시 중구 동호로 241' },
  { id: 2, name: '중구체육센터', address: '서울특별시 중구 다산로 32' },
  { id: 3, name: '동국대학교 서울캠퍼스 체육관', address: '서울특별시 중구 필동로 1' },
];

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 18s6-5.2 6-9.6A6 6 0 0 0 4 8.4C4 12.8 10 18 10 18Z"
        stroke="#3BBFA0"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.2" r="1.8" stroke="#3BBFA0" strokeWidth="1.6" />
    </svg>
  );
}

function DepartureSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('체육관');

  const results = query.trim()
    ? allPlaces.filter((place) => place.name.includes(query.trim()))
    : allPlaces;

  const handleSelect = (place) => {
    navigate('/accessible-route', { state: { departure: place.name } });
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
          <ClearButton type="button" aria-label="지우기" onClick={() => setQuery('')}>
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
                <PinIcon />
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
