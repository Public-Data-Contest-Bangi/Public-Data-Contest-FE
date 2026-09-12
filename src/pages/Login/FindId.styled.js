import styled from "styled-components";

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

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.2);

    z-index: 1000;
`;

export const Modal = styled.div`
    position: relative;

    width: 280px;

    padding: 55px 20px 22px;

    background: #effcf7;
    border-radius: 8px;

    text-align: center;
`;

export const ResultCharacter = styled.img`
    position: absolute;

    width: 250px;
    height: auto;

    left: 50%;
    top: -220px;

    transform: translateX(-50%);

    object-fit: contain;
`;

export const ResultText = styled.p`
    margin: 0;

    font-size: 17px;
    font-weight: 600;
    color: #333333;

    line-height: 1.6;
`;

export const UserId = styled.span`
    margin: 0 4px;

    font-size: 19px;
    font-weight: 700;

    color: #42dba0;
`;

export const ModalButtonRow = styled.div`
    margin-top: 24px;

    display: flex;
    justify-content: center;

    gap: 8px;
`;

export const CancelButton = styled.button`
    width: 92px;
    height: 38px;

    border: 1px solid #d9d9d9;
    border-radius: 7px;

    background: #ffffff;

    font-size: 14px;

    cursor: pointer;
`;

export const ResetButton = styled.button`
    width: 110px;
    height: 38px;

    border: none;
    border-radius: 7px;

    background: #42dba0;

    color: #ffffff;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
`;