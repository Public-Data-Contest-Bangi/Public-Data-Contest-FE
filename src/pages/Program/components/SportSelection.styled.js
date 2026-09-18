import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding: 28px 20px 0;

    box-sizing: border-box;
`;

export const Intro = styled.div`
    margin-bottom: 28px;
`;

export const Title = styled.h1`
    margin: 0 0 8px;

    font-size: 32px;
    font-weight: 600;
    line-height: normal;

    color: #000;
`;

export const Description = styled.p`
    margin: 0;

    font-size: 16px;
    font-weight: 400;

    color: rgba(0, 0, 0, 0.50);
`

export const SportGrid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    column-gap: 13px;
    row-gap: 17px;
`;

export const SportButton = styled.button`
    width: 100%;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 4px;

    border: 1px solid
        ${({ $selected }) =>
            $selected ? "#41dc99" : "#cfcfcf"};

    border-radius: 18px;

    background: ${({ $selected }) =>
        $selected ? "#41dc99" : "#ffffff"};

    color: ${({ $selected }) =>
        $selected ? "#ffffff" : "#222222"};

    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.2px;

    white-space: nowrap;

    cursor: pointer;
    box-sizing: border-box;
`;

export const BottomArea = styled.div`
    width: 100%;

    margin-top: auto;

    padding: 22px 20px 20px;

    box-sizing: border-box;

    background: #ffffff;
`;