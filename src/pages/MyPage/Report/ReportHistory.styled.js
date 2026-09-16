import styled from "styled-components";

export const Inner = styled.div`
    width: 100%;
    height: 100%;

    padding: 0 16px 24px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;
`;

export const ReportList = styled.div`
    width: 100%;
`;

export const ReportItem = styled.button`
    width: 100%;

    padding: 20px 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: none;
    border-bottom: 1px solid #d9d9d9;

    background: #ffffff;

    text-align: left;

    cursor: pointer;
`;

export const ReportInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 9px;
`;

export const Date = styled.span`
    font-size: 12px;
    font-weight: 400;

    color: #777777;
`;

export const ReportTitle = styled.span`
    font-size: 15px;
    font-weight: 600;

    color: #111111;
`;

export const Arrow = styled.span`
    width: 8px;
    height: 8px;

    margin-right: 4px;

    border-top: 1.5px solid #777777;
    border-right: 1.5px solid #777777;

    transform: rotate(45deg);
`;

export const ButtonArea = styled.div`
    width: 100%;

    margin-top: 48px;
`;