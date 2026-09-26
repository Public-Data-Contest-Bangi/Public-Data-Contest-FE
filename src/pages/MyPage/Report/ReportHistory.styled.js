import styled from "styled-components";

export const Inner = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;

    padding: 0 16px 100px;

    box-sizing: border-box;
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

export const TopArea = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

export const Date = styled.span`
    color: #777777;

    font-size: 12px;
    font-weight: 400;
`;

export const StatusBadge = styled.span`
    padding: 4px 9px;

    border: 1px solid
        ${({ $isCompleted }) =>
            $isCompleted
                ? "#40D293"
                : "#D9D9D9"};

    border-radius: 20px;

    background: #ffffff;

    color: ${({ $isCompleted }) =>
        $isCompleted
            ? "#20C985"
            : "#777777"};

    font-size: 11px;
    font-weight: 500;

    white-space: nowrap;
`;

export const ReportTitle = styled.span`
    color: #111111;

    font-size: 15px;
    font-weight: 600;
`;

export const Arrow = styled.span`
    width: 8px;
    height: 8px;

    margin-right: 4px;

    flex-shrink: 0;

    border-top: 1.5px solid #777777;
    border-right: 1.5px solid #777777;

    transform: rotate(45deg);
`;

export const ButtonArea = styled.div`
    width: 100%;

    margin-top: auto;
    padding-top: 32px;
`;

export const EmptyState = styled.div`
    width: 100%;

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #999999;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    text-align: center;
`;