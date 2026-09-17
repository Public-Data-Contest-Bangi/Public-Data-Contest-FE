import styled from "styled-components";

export const Page = styled.div`
    width: 375px;
    min-height: calc(100dvh - 56px);

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;

    padding: 28px 20px 24px;

    box-sizing: border-box;
`;

export const Intro = styled.div`
    margin-bottom: 22px;
`;

export const Title = styled.h1`
    margin: 0 0 7px;

    font-size: 23px;
    font-weight: 700;
    line-height: 1.35;

    color: #1a1a1a;
`;

export const Description = styled.p`
    margin: 0;

    font-size: 13px;
    font-weight: 400;

    color: #9a9a9a;
`;

export const SportGrid = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 10px 8px;
`;

export const SportButton = styled.button`
    min-width: 74px;
    height: 36px;

    padding: 0 15px;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#41dc99"
                : "#cfcfcf"};

    border-radius: 18px;

    background: ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#ffffff"};

    color: ${({ $selected }) =>
        $selected
            ? "#ffffff"
            : "#333333"};

    font-family: inherit;
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    box-sizing: border-box;

    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        color 0.15s ease;
`;

export const BottomArea = styled.div`
    width: 100%;

    padding: 16px 20px 24px;

    box-sizing: border-box;

    background: #ffffff;
`;