import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
    width: 100%;
    max-width: 480px;
    min-height: 100dvh;
  margin: 0 auto;
  background: #ffffff;
  font-family: inherit;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  button {
    font-family: inherit;
  }
`;

/* ── 헤더 ───────────────── */

export { HeaderWrap as Header, BackButton } from "../../components/common/Header";


export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

/* ── 가운데 콘텐츠 ───────────────── */

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  text-align: center;
`;

export const MascotCircle = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #e5f8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
`;

export const MascotImage = styled.img`
  width: 270px;
  height: 270px;
  object-fit: contain;
`;

export const MainText = styled.p`
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #000000;
`;

export const SubText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #8c8c8c;
`;

/* ── 버튼 ───────────────── */

export const ResetButton = styled.button`
  width: calc(100% - 40px);
  margin: 0 20px 60px;
  padding: 17px;
  border: none;
  border-radius: 16px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
`;