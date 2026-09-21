import { useSearchFilter } from './hooks/useSearchFilter';
import { SPORT_OPTIONS, ACCESSIBILITY_ITEMS } from './utils/searchFilterOptions';
import AccessibilityIcon from './components/AccessibilityIcon';
import sportIcon from '../../assets/icons/sport-icon.png';
import {
  Container,
  Header,
  CloseButton,
  Title,
  ResetButton,
  Body,
  Section,
  SectionTitle,
  CheckList,
  CheckRow,
  HiddenCheckbox,
  CheckboxBox,
  CheckIconWrap,
  CheckLabel,
  SelectWrap,
  SelectTrigger,
  SelectChevron,
  SelectMenu,
  RadioList,
  RadioRow,
  HiddenRadio,
  RadioCircle,
  RadioLabel,
  Footer,
  CancelButton,
  ApplyButton,
} from './SearchFilter.styled';

function SearchFilter() {
  const {
    checked,
    sport,
    voucher,
    sportMenuOpen,
    sportRef,
    toggleCheck,
    handleReset,
    toggleSportMenu,
    selectSport,
    setVoucher,
    goSearchResult,
  } = useSearchFilter();

  return (
    <Container>
      <Header>
        <CloseButton type="button" aria-label="닫기">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l16 16M17 1L1 17" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </CloseButton>
        <Title>검색 필터</Title>
        <ResetButton type="button" onClick={handleReset}>
          초기화
        </ResetButton>
      </Header>

      <Body>
        <Section>
          <SectionTitle>접근성 조건</SectionTitle>
          <CheckList>
            {ACCESSIBILITY_ITEMS.map((item) => (
              <CheckRow key={item.id}>
                <HiddenCheckbox
                  checked={checked[item.id]}
                  onChange={() => toggleCheck(item.id)}
                />
                <CheckboxBox>
                  {checked[item.id] && (
                    <svg width="14" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5l3.5 3.5L11 1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </CheckboxBox>
                <CheckIconWrap>
                  <AccessibilityIcon type={item.id} />
                </CheckIconWrap>
                <CheckLabel>{item.label}</CheckLabel>
              </CheckRow>
            ))}
          </CheckList>
        </Section>

        <Section>
          <SectionTitle>운동 종목</SectionTitle>
          <SelectWrap ref={sportRef}>
            <img src={sportIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />
            <SelectTrigger type="button" onClick={toggleSportMenu}>
              {sport}
            </SelectTrigger>
            <SelectChevron
              $open={sportMenuOpen}
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#8C8C8C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </SelectChevron>

            {sportMenuOpen && (
              <SelectMenu>
                {SPORT_OPTIONS.map((option) => (
                  <li key={option}>
                    <button type="button" onClick={() => selectSport(option)}>
                      {option}
                    </button>
                  </li>
                ))}
              </SelectMenu>
            )}
          </SelectWrap>
        </Section>

        <Section>
          <SectionTitle>스포츠 바우처 이용 가능</SectionTitle>
          <RadioList>
            {['전체', '이용 가능'].map((option) => (
              <RadioRow key={option}>
                <HiddenRadio
                  name="voucher"
                  checked={voucher === option}
                  onChange={() => setVoucher(option)}
                />
                <RadioCircle />
                <RadioLabel>{option}</RadioLabel>
              </RadioRow>
            ))}
          </RadioList>
        </Section>
      </Body>

      <Footer>
        <CancelButton type="button" onClick={goSearchResult}>
          취소
        </CancelButton>
        <ApplyButton type="button">적용하기</ApplyButton>
      </Footer>
    </Container>
  );
}

export default SearchFilter;