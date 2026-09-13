import { useEffect, useRef, useState } from 'react';
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

const sportOptions = [
  '전체',
  '검도', '골프', '농구', '댄스', '롤러인라인', '무용',
  '배구', '배드민턴', '복싱', '볼링', '스케이트', '수영',
  '스쿼시', '승마', '야구', '에어로빅', '요가', '유도',
  '줄넘기', '축구', '탁구', '태권도', '펜싱', '필라테스',
  '크로스핏', '주짓수', '클라이밍', '당구', '종합체육시설',
];

const accessibilityItems = [
  { id: 'wheelchair', label: '휠체어 접근가능' },
  { id: 'ramp', label: '경사로' },
  { id: 'elevator', label: '엘리베이터' },
  { id: 'restroom', label: '장애인 화장실' },
  { id: 'parking', label: '장애인 주차장' },
];

function AccessibilityIcon({ type }) {
  switch (type) {
    case 'wheelchair':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="5" r="1.6" fill="#1A1A1A" />
          <path
            d="M15 7.2v3.3h3.3M15 10.5l-2 7.5M13 10.5H9"
            stroke="#1A1A1A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="16.5" r="4.2" stroke="#1A1A1A" strokeWidth="1.6" />
          <circle cx="9" cy="16.5" r="0.8" fill="#1A1A1A" />
          <path d="M9 12.3v4.2" stroke="#1A1A1A" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case 'ramp':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 19h18" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 19 14 7" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M11 7h3v3"
            stroke="#1A1A1A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'elevator':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="#1A1A1A" strokeWidth="1.6" />
          <path d="M12 7l-3 4h6l-3-4Z" fill="#1A1A1A" />
          <path d="M12 17l3-4H9l3 4Z" fill="#1A1A1A" />
        </svg>
      );
    case 'restroom':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="5" r="1.8" fill="#1A1A1A" />
          <path d="M8 8v6M5.5 11h5M6 20l2-6 2 6" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16.5" cy="5" r="1.8" fill="#1A1A1A" />
          <path d="M14 10h5v4h-1.5v6h-2v-6H15v6h-2v-6H14v-4Z" fill="#1A1A1A" />
        </svg>
      );
    case 'parking':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#1A1A1A" strokeWidth="1.6" />
          <path
            d="M9 17V7h3.2a2.7 2.7 0 0 1 0 5.4H9"
            stroke="#1A1A1A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SearchFilter() {
  const [checked, setChecked] = useState({
    wheelchair: true,
    ramp: false,
    elevator: false,
    restroom: false,
    parking: false,
  });
  const [sport, setSport] = useState('전체');
  const [voucher, setVoucher] = useState('전체');
  const [sportMenuOpen, setSportMenuOpen] = useState(false);
  const sportRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sportRef.current && !sportRef.current.contains(e.target)) {
        setSportMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setChecked({
      wheelchair: false,
      ramp: false,
      elevator: false,
      restroom: false,
      parking: false,
    });
    setSport('전체');
    setVoucher('전체');
  };

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
            {accessibilityItems.map((item) => (
              <CheckRow key={item.id}>
                <HiddenCheckbox
                  checked={checked[item.id]}
                  onChange={() => toggleCheck(item.id)}
                />
                <CheckboxBox>
                  {checked[item.id] && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="12" r="2.5" stroke="#1A1A1A" strokeWidth="1.6" />
              <circle cx="18" cy="12" r="2.5" stroke="#1A1A1A" strokeWidth="1.6" />
              <path d="M8.5 12h7" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <SelectTrigger type="button" onClick={() => setSportMenuOpen((prev) => !prev)}>
              {sport}
            </SelectTrigger>
            <SelectChevron
              $open={sportMenuOpen}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#8C8C8C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </SelectChevron>

            {sportMenuOpen && (
              <SelectMenu>
                {sportOptions.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        setSport(option);
                        setSportMenuOpen(false);
                      }}
                    >
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
            {['전체', '이용 가능', '이용 불가'].map((option) => (
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
        <CancelButton type="button">취소</CancelButton>
        <ApplyButton type="button">적용하기</ApplyButton>
      </Footer>
    </Container>
  );
}

export default SearchFilter;