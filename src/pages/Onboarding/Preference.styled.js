import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    background: #ffffff;
`;

export const Container = styled.div`
    width: 375px;
    height: 816px;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;
    height: 100%;

    padding: 28px 24px;

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
    margin: 0 0 7px;

    font-size: 13px;
    font-weight: 500;

    color: #333333;
`;

export const Select = styled.select`
    width: 100%;
    height: 38px;

    padding: 0 12px;

    border: 1px solid #d8d8d8;
    border-radius: 7px;

    background: #ffffff;

    color: #6f6f6f;
    font-size: 12px;

    outline: none;
    cursor: pointer;

    &:focus {
        border-color: #41dc99;
    }
`;

export const RadioRow = styled.div`
    width: 100%;

    display: flex;
    gap: 10px;
`;

export const RadioButton = styled.button`
    flex: 1;
    height: 37px;
    padding: 12px 20px;

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

    font-size: 11px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    color: #747474;
`;

export const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 9px 12px;
`;

export const Chip = styled.button`
    min-width: 65px;
    height: 34px;

    padding: 12px 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid
        ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#d8d8d8"};

    border-radius: 16px;

    background: #ffffff;

    color: ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#000"};

    font-size: 14px;

    font-weight: ${({ $selected }) =>
        $selected ? 600 : 400};

    cursor: pointer;
`;

export const SubmitButton = styled.button`
    width: 331px;
    height: 53px;

    margin-top: 26px;

    border: none;
    border-radius: 10px;

    background: ${({ disabled }) =>
        disabled
            ? "#d9d9d9"
            : "#41dc99"};

    color: #ffffff;

    font-size: 18px;
    font-weight: 600;
    font-family: Pretendard;

    cursor: ${({ disabled }) =>
        disabled
            ? "default"
            : "pointer"};
`;

export const BottomText = styled.p`
    margin: 12px 0 0;
    width: 327px;
    height: 62px;

    text-align: center;

    color: #747474;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    font-size: 11px;
`;