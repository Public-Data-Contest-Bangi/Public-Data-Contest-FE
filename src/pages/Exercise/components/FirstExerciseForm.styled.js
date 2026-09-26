import styled from "styled-components";

export const QuestionSection = styled.section`
    width: 100%;

    margin-bottom: 36px;
`;

export const QuestionHeader = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    margin-bottom: 10px;
`;

export const Number = styled.div`
    width: 26px;
    height: 26px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #1fce8b;

    color: #ffffff;

    font-size: 12px;
    font-weight: 700;
`;

export const Question = styled.div`
    color: #000000;

    font-size: 16px;
    font-weight: 700;
`;

export const Select = styled.select`
    width: calc(100% - 34px);
    height: 42px;

    margin-left: 34px;

    padding: 0 42px 0 14px;

    box-sizing: border-box;

    border: 1px solid
        ${({ $error }) =>
            $error
                ? "#e76b6b"
                : "#8ce4bd"};

    border-radius: 6px;

    outline: none;

    background-color: #ffffff;

    appearance: none;
    -webkit-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' fill='none' stroke='%23444444' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 12px 8px;

    color: #444444;

    font-size: 12px;

    cursor: pointer;

    &:focus {
        border-color: ${({ $error }) =>
            $error
                ? "#e76b6b"
                : "#1fce8b"};
    }
`;

export const ExerciseTypeHeader = styled.div`
    width: calc(100% - 34px);

    margin-left: 34px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RequiredText = styled.span`
    color: #888888;

    font-size: 11px;
`;

export const SelectAllButton = styled.button`
    padding: 0;

    border: none;
    background: transparent;

    color: #16b978;

    font-size: 11px;
    font-weight: 600;

    cursor: pointer;
`;

export const CheckGrid = styled.div`
    width: calc(100% - 34px);

    margin-left: 34px;

    display: grid;
    grid-template-columns: repeat(
        2,
        1fr
    );

    gap: 8px 10px;
`;

export const CheckItem = styled.button`
    min-height: 32px;

    padding: 6px 8px;

    display: flex;
    align-items: center;

    gap: 8px;

    box-sizing: border-box;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#20cf8b"
                : "#dddddd"};

    border-radius: 6px;

    background: ${({ $selected }) =>
        $selected
            ? "#f1fff8"
            : "#ffffff"};

    color: #333333;

    font-size: 12px;

    cursor: pointer;
`;

export const CheckBox = styled.span`
    width: 14px;
    height: 14px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#20cf8b"
                : "#bdbdbd"};

    border-radius: 2px;

    background: ${({ $selected }) =>
        $selected
            ? "#20cf8b"
            : "#ffffff"};

    color: #ffffff;

    font-size: 10px;
`;

export const ErrorText = styled.p`
    margin: 6px 0 0 34px;

    color: #e05b5b;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.4;
`;