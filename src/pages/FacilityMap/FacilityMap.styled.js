import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 375px;
  min-height: 816px;
  margin: 0 auto;
  background: #ffffff;
  font-family: 'Pretendard', sans-serif;
  box-sizing: border-box;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;

  button {
    font-family: inherit;
  }
`;

export const MapPlaceholder = styled.div`
  position: relative;
  flex: 1;
  min-height: 320px;
  background: #eef2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
`;

export const MapContainer = styled.div`
  position: absolute;
  inset: 0;
`;

export const MapPlaceholderText = styled.span`
  font-size: 13px;
  color: #b3b3b3;
`;

export const MapLocateButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ResearchAreaButton = styled.button`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 10px 18px;
  border: none;
  border-radius: 999px;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;