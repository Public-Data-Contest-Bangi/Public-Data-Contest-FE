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

  button,
  input,
  select {
    font-family: inherit;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 20px;
  flex-shrink: 0;
`;

export const CloseButton = styled.button`
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

export const ResetButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 500;
  color: #8c8c8c;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
`;

export const Body = styled.div`
  flex: 1;
  padding: 8px 20px 24px;
  overflow-y: auto;
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckRow = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 60px;
  padding: 10px 14px;
  border: 1px solid ${({ $checked }) => $checked ? '#40d293' : '#e8ecea'};
  border-radius: 12px;
  background: ${({ $checked }) => $checked ? '#effbf5' : '#ffffff'};
  transition: background 150ms ease, border-color 150ms ease;
  cursor: pointer;

  &:has(input:focus-visible) {
    outline: 2px solid #16865e;
    outline-offset: 3px;
  }

  > span:first-of-type {
    order: 3;
    width: 20px;
    height: 20px;
    margin-left: auto;
    border-radius: 6px;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const CheckboxBox = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: 1.5px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  ${HiddenCheckbox}:checked + & {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }
`;

export const CheckIconWrap = styled.span`
  order: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f4f7f5;
  flex-shrink: 0;

  img { display: block; opacity: 0.8; }
`;

export const CheckLabel = styled.span`
  order: 2;
  min-width: 0;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 600;
  color: #1a1a1a;
`;

export const SelectWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 16px 18px;
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
`;

export const SelectTrigger = styled.button`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: inherit;
  color: #000000;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectChevron = styled.svg`
  flex-shrink: 0;
  transition: transform 0.15s ease;
  transform: ${(props) => (props.$open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const SelectMenu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  max-height: 280px;
  overflow-y: auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  z-index: 20;

  li {
    list-style: none;
  }
`;

export const SelectMenuItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 15px;
  color: #000000;
  cursor: pointer;

  &:hover {
    background: #f3f3f3;
  }

  ${CheckboxBox} {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
`;

export const RadioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RadioRow = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const RadioCircle = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: 1.5px solid #d9d9d9;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;

  ${HiddenRadio}:checked + & {
    border-color: var(--color-primary);
  }

  ${HiddenRadio}:checked + &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-primary);
    transform: translate(-50%, -50%);
  }
`;

export const RadioLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const Footer = styled.div`
  display: flex;
  gap: 10px;
  padding: 16px 20px calc(20px + env(safe-area-inset-bottom, 0px));
  flex-shrink: 0;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 17px;
  border: 1px solid #e4e4e4;
  border-radius: 16px;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
`;

export const ApplyButton = styled.button`
  flex: 1.6;
  padding: 17px;
  border: none;
  border-radius: 16px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
`;