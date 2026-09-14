import { useNavigate } from 'react-router-dom';
import mascotSurprisedImg from './assets/search-empty/mascot-surprised.png';
import {
  Container,
  Header,
  BackButton,
  Title,
  Content,
  MascotCircle,
  MascotImage,
  MainText,
  SubText,
  ResetButton,
} from './SearchEmpty.styled';

function SearchEmpty() {
  const navigate = useNavigate();

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
        <Title>검색 결과 없음</Title>
      </Header>

      <Content>
        <MascotCircle>
          <MascotImage src={mascotSurprisedImg} alt="" />
        </MascotCircle>
        <MainText>
          조건에 맞는
          <br />
          체육시설을 찾지 못했어요.
        </MainText>
        <SubText>
          검색 조건을 변경하거나
          <br />
          다른 지역을 선택해보세요
        </SubText>
      </Content>

      <ResetButton type="button" onClick={() => navigate('/search-filter')}>
        검색 조건 다시 설정
      </ResetButton>
    </Container>
  );
}

export default SearchEmpty;
