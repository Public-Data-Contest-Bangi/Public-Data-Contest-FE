import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 100dvh;
  margin: 0 auto;
  background: #ffffff;
  font-family: 'Pretendard', sans-serif;
  box-sizing: border-box;
  padding: 0 20px 40px;
  display: flex;
  flex-direction: column;

  button,
  input {
    font-family: inherit;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin: 0 -20px;
  padding: 0 20px;
  flex-shrink: 0;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

export const Hero = styled.section`
  position: relative;
  padding: 16px 0 24px;
  min-height: 150px;
  flex-shrink: 0;
`;

export const HeroText = styled.div`
  max-width: 210px;
`;

export const HeroTitle = styled.p`
  margin: 0 0 12px;
  color: #111111;
  font-size: 23px;
  font-weight: 700;
  line-height: 1.4;
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  color: #959595;
  font-size: 14px;
  font-weight: 600;
`;
export const Mascot = styled.img`
  position: absolute;
  right: 2px;
  top: -16px;
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 14px 16px;
  background: #f3f3f3;
  border-radius: 12px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const InputIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: #000000;

  &::placeholder {
    color: #b3b3b3;
  }
`;

export const KeywordSubmit = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 10px;
  border: none;
  border-radius: 12px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  color: #b5b5b5;
  font-size: 14px;
  flex-shrink: 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e4e4e4;
  }
`;

export const RegionSection = styled.section`
  flex-shrink: 0;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: #151515;
  font-size: 18px;
  font-weight: 700;
`;

export const PinIcon = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--color-primary);
  flex-shrink: 0;
`;

export const CurrentLocationButton = styled.button`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 10px;
  background: #eafaf1;
  color: #222222;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
`;

export const TargetIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  background: #ffffff;
  box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
`;

export const BuildingIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 1.7;
  flex-shrink: 0;
`;

export const LocationIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--color-primary);
  flex-shrink: 0;
`;

export const SelectButton = styled.button`
  flex: 1;
  min-width: 0;
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => (props.$placeholder ? '#b3b3b3' : '#202020')};
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectMenu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 220px;
  margin: 0;
  padding: 6px;
  overflow-y: auto;
  list-style: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  z-index: 30;

  li {
    list-style: none;
  }

  button {
    width: 100%;
    padding: 10px 12px;
    border: none;
    border-radius: 6px;
    background: none;
    color: #202020;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
  }

  button:hover {
    background: #f5f5f5;
  }
`;

export const SubmitButtonWrap = styled.div`
  margin-top: 24px;
`;