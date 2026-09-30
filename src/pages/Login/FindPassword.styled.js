import styled from "styled-components";

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    gap: 22px;

    margin-top: 28px;
`;

export const Field = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 8px;

    align-items: stretch;
    text-align: left;
`;

export const Label = styled.label`
    width: 100%;

    font-size: 15px;
    font-weight: 600;

    color: #222222;

    text-align: left;
`;

export const Row = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    padding: 0 14px;

    box-sizing: border-box;

    outline: none;

    font-size: 14px;

    &::placeholder {
        color: #a7a7a7;
    }

    &:focus {
        border-color: #42dba0;
    }
`;

export const CheckButton = styled.button`
    width: 72px;
    height: 48px;

    flex-shrink: 0;

    border: none;
    border-radius: 8px;

    background: #42dba0;

    color: #ffffff;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    margin: 0;

    color: #42dba0;

    font-size: 12px;
`;

export const SuccessMessage = styled.p`
    margin: 0;

    color: #42dba0;

    font-size: 12px;
`;

export const HelpText = styled.p`
    margin: 0;

    color: #777777;

    font-size: 10px;
`;

export const ButtonArea = styled.div`
    width: 100%;
    margin-top: auto;
`;