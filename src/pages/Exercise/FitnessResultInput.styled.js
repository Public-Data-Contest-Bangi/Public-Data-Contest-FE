import styled from "styled-components";

export const Inner = styled.div`
    width: 100%;
    flex: 1;

    padding: 0 16px 20px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;
`;

export const Title = styled.h2`
    margin: 34px 0 23px;

    font-size: 28px;
    line-height: normal;
    font-weight: 700;

    color: #000;
`;

export const Description = styled.p`
    margin: 0 0 50px;

    font-size: 16px;
    color: #000;
    font-weight: 300;
`;

export const ResultList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 30px;
`;

export const ResultRow = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`;

export const Category = styled.div`
    width: 90px;
    flex-shrink: 0;

    font-size: 18px;
    font-weight: 600;
    color: #000;
`;

export const GradeArea = styled.div`
    flex: 1;

    display: flex;
    gap: 9px;
`;

export const GradeButton = styled.button`
    flex: 1;
    height: 30px;

    padding: 0;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#40D293"
                : "#aaaaaa"};

    border-radius: 21px;

    background: ${({ $selected }) =>
        $selected
            ? "#40D293"
            : "#ffffff"};

    color: ${({ $selected }) =>
        $selected
            ? "#ffffff"
            : "#222222"};

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
`;

export const BottomArea = styled.div`
    width: 100%;  
    flex-shrink: 0;
`;

export const Notice = styled.p`
    width: 100%;

    margin: 24px 0 16px;

    color: #8a8a8a;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    text-align: center;

    word-break: keep-all;
`;