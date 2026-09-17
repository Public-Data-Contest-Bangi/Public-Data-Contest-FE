import styled from "styled-components";

export const Content = styled.main`
    width: 100%;

    padding: 0 16px 96px;

    box-sizing: border-box;
`;

export const Intro = styled.div`
    margin: 22px 0 20px;
`;

export const Title = styled.h2`
    margin: 0 0 15px;

    font-size: 20px;
    font-weight: 700;

    color: #000000;
`;

export const Description = styled.p`
    margin: 0;

    font-size: 14px;
    line-height: 1.5;

    color: #6f6f6f;
`;

export const Section = styled.section`
    margin-bottom: 35px;
`;

export const Label = styled.div`
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 500;

    color: #000000;
`;

export const SubLabel = styled.span`
    margin-left: 4px;

    font-weight: 400;
`;

export const SelectWrapper = styled.div`
    position: relative;

    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    height: 46px;

    padding: 0 42px 0 14px;

    box-sizing: border-box;

    appearance: none;
    -webkit-appearance: none;

    border: 1px solid #cccccc;
    border-radius: 8px;

    background: #ffffff;

    color: #6f6f6f;

    font-size: 14px;

    outline: none;

    &:focus {
        border-color: #41dc99;
    }
`;

export const SelectArrow = styled.span`
    position: absolute;

    top: 50%;
    right: 17px;

    width: 11px;
    height: 11px;

    border-right: 2px solid #555555;
    border-bottom: 2px solid #555555;

    transform: translateY(-70%)
        rotate(45deg);

    pointer-events: none;
`;

export const ChoiceArea = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: ${({ $variant }) =>
        $variant === "pill"
            ? "15px"
            : "9px 10px"};
`;

export const PillButton = styled.button`
    min-width: 120px;
    height: 38px;

    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 2px solid
        ${({ $selected }) =>
            $selected
                ? "#41dc99"
                : "#dedede"};

    border-radius: 20px;

    background: #ffffff;

    color: ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#999999"};

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;
`;

export const HelpText = styled.p`
    margin: 9px 0 0;

    font-size: 11px;

    color: #747474;
`;

export const Chip = styled.button`
    min-width: 80px;
    height: 36px;

    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 2px solid
        ${({ $selected }) =>
            $selected
                ? "#41dc99"
                : "#dedede"};

    border-radius: 20px;

    background: #ffffff;

    color: ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#555555"};

    font-size: 14px;

    font-weight: ${({ $selected }) =>
        $selected ? 600 : 400};

    cursor: pointer;
`;

export const SaveMessage = styled.p`
    height: 20px;

    margin: 8px 0 0;

    text-align: center;

    color: #747474;

    font-size: 14px;

    opacity: ${({ $visible }) =>
        $visible ? 1 : 0};
`;