import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    background: #ffffff;
`;

export const Container = styled.div`
    width: min(100%, 375px);
    min-height: 100dvh;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;
    min-height: 100dvh;

    padding: 28px 24px 24px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Title = styled.h1`
    margin: 0;

    font-size: 18px;
    font-weight: 700;
    line-height: 1.45;

    color: #222222;
`;

export const Description = styled.p`
    margin: 10px 0 0;

    font-size: 11px;
    line-height: 1.5;

    color: #666666;
`;

export const Section = styled.section`
    width: 100%;

    margin-top: 30px;
`;

export const Label = styled.p`
    margin: 0 0 9px;

    font-size: 13px;
    font-weight: 600;

    color: #333333;
`;

export const MultipleText = styled.span`
    margin-left: 5px;

    color: #888888;

    font-size: 11px;
    font-weight: 400;
`;

export const RadioRow = styled.div`
    width: 100%;

    display: flex;

    gap: 10px;
`;

export const RadioButton = styled.button`
    flex: 1;
    height: 37px;

    padding: 0 20px;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#41dc99"
                : "#d8d8d8"};

    border-radius: 18px;

    background: #ffffff;

    color: ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#777777"};

    font-size: 12px;

    font-weight: ${({ $selected }) =>
        $selected ? 600 : 400};

    cursor: pointer;
`;

export const HelpText = styled.p`
    margin: 9px 0 0;

    color: #747474;

    font-size: 11px;
    font-weight: 300;
    line-height: 1.4;
`;

export const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 9px 8px;
`;

export const Chip = styled.button`
    min-width: 72px;
    height: 34px;

    padding: 0 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#41dc99"
                : "#d8d8d8"};

    border-radius: 17px;

    background: ${({ $selected }) =>
        $selected
            ? "#ecfff7"
            : "#ffffff"};

    color: ${({ $selected }) =>
        $selected
            ? "#24c989"
            : "#333333"};

    font-size: 12px;

    font-weight: ${({ $selected }) =>
        $selected ? 600 : 400};

    cursor: pointer;
`;

export const ButtonArea = styled.div`
    width: 100%;

    margin-top: auto;
    padding-top: 32px;
`;

export const BottomText = styled.p`
    width: 100%;

    margin: 12px 0 0;

    text-align: center;

    color: #747474;

    font-size: 11px;
    font-weight: 300;
    line-height: 1.4;
`;