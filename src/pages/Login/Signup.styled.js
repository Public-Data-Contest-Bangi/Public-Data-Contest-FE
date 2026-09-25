import styled from "styled-components";

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;

    margin-top: 24px;
`;

export const Field = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;

    color: #222222;
`;

export const Row = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 46px;

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
    width: 70px;
    height: 46px;

    flex-shrink: 0;

    border: none;
    border-radius: 8px;

    background: #42dba0;

    color: #ffffff;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
`;

export const HelpText = styled.p`
    margin: 0;

    color: #777777;

    font-size: 10px;
`;

export const SuccessMessage = styled.p`
    margin: 6px 0 0;

    color: #41dc99;

    font-size: 13px;
`;

export const ErrorMessage = styled.p`
    margin: 6px 0 0;

    color: #ff4d4f;

    font-size: 13px;
`;

export const AgreementField = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 6px;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;

    gap: 8px;

    cursor: pointer;
`;

export const Checkbox = styled.input`
    width: 18px;
    height: 18px;

    margin: 0;

    accent-color: #42dba0;

    cursor: pointer;
`;

export const AgreementText = styled.span`
    color: #222222;

    font-size: 13px;
    font-weight: 500;
`;

export const Required = styled.span`
    margin-left: 4px;

    color: #42dba0;

    font-size: 12px;
    font-weight: 600;
`;

export const AgreementDescription = styled.p`
    margin: 0 0 0 26px;

    color: #888888;

    font-size: 10px;
    line-height: 1.5;
`;