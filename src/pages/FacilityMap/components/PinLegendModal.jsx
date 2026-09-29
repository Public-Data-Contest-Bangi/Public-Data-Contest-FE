import {
  Overlay,
  Modal,
  Title,
  CloseButton,
  LegendList,
  LegendRow,
  LegendIconWrap,
  LegendText,
  ConfirmButton,
} from './PinLegendModal.styled';

function PinLegendModal({ onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" aria-label="닫기" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l16 16M17 1L1 17" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </CloseButton>

        <Title>지도 핀마크 안내</Title>

        <LegendList>
          <LegendRow>
            <LegendIconWrap>
              <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 19S14 12 14 7A6 6 0 1 0 2 7C2 12 8 19 8 19Z" fill="#40D293" stroke="#40D293" strokeWidth="1.5" />
                <circle cx="8" cy="7" r="3" fill="#FFFFFF" />
              </svg>
            </LegendIconWrap>
            <LegendText>체육시설 하나하나의 위치예요. 눌러보면 상세 정보로 이동할 수 있어요.</LegendText>
          </LegendRow>

          <LegendRow>
            <LegendIconWrap>
              <svg width="30" height="30" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" fill="#40D293" opacity="0.9" />
                <text x="18" y="23" fontSize="14" fontWeight="700" fill="white" textAnchor="middle" fontFamily="sans-serif">12</text>
              </svg>
            </LegendIconWrap>
            <LegendText>시설이 여러 개 모여 있는 구역이에요. 누르면 확대돼서 개별 시설이 보여요.</LegendText>
          </LegendRow>

          <LegendRow>
            <LegendIconWrap>
              <svg width="26" height="26" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="#4A90E2" opacity="0.2" />
                <circle cx="16" cy="16" r="8" fill="#2F7BFF" stroke="white" strokeWidth="3" />
              </svg>
            </LegendIconWrap>
            <LegendText>지금 내가 있는 위치예요.</LegendText>
          </LegendRow>

          <LegendRow>
            <LegendIconWrap>
              <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 19S14 12 14 7A6 6 0 1 0 2 7C2 12 8 19 8 19Z" fill="#FF5A5F" />
                <circle cx="8" cy="7" r="2.4" fill="white" />
              </svg>
            </LegendIconWrap>
            <LegendText>내가 선택한 도착지예요.</LegendText>
          </LegendRow>
        </LegendList>

        <ConfirmButton type="button" onClick={onClose}>
          확인했어요
        </ConfirmButton>
      </Modal>
    </Overlay>
  );
}

export default PinLegendModal;