import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 300px;
  max-width: calc(100% - 48px);
  background: #ffffff;
  border-radius: 20px;
  padding: 24px 20px 20px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0 0 18px;
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
`;

export const LegendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

export const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LegendIconWrap = styled.div`
  width: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LegendText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #444444;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;