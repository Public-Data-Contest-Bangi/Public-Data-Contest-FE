import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 390px;

    min-height: 100vh;

    padding: 0 20px 32px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Header = styled.header`
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;

    position: relative;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 0;

    border: none;
    background: none;

    font-size: 38px;
    font-weight: 300;

    cursor: pointer;

    line-height: 1;
`;

export const Title = styled.h1`
    width: 100%;

    margin: 0;

    text-align: center;

    font-size: 21px;
    font-weight: 700;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    gap: 36px;

    margin-top: 55px;
`;

export const Field = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 10px;
`;

export const Label = styled.label`
    font-size: 15px;
    font-weight: 600;

    color: #222222;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;

    border: 1px solid #d9d9d9;
    border-radius: 9px;

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

export const EmailRow = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 8px;
`;

export const CheckButton = styled.button`
    width: 76px;
    height: 48px;

    flex-shrink: 0;

    border: none;
    border-radius: 9px;

    background: #42dba0;

    color: #ffffff;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    margin: -2px 0 0;

    color: #ff4141;

    font-size: 12px;
`;

export const SelectButton = styled.button`
    width: 100%;
    height: 54px;

    margin-top: auto;

    border: none;
    border-radius: 11px;

    background: #42dba0;

    color: #ffffff;

    font-size: 19px;
    font-weight: 700;

    cursor: pointer;
`;