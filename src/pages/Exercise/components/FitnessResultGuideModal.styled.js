import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    box-sizing: border-box;

    background: rgba(17, 17, 17, 0.32);
`;

export const Modal = styled.div`
    width: min(
        320px,
        calc(100vw - 40px)
    );

    padding: 26px 24px 18px;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;

    border-radius: 18px;

    background: #ffffff;

    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.12);

    text-align: center;
`;

export const ModalCharacter = styled.img`
    width: 140px;
    height: 140px;

    margin-bottom: 5px;

    object-fit: contain;
`;

export const Title = styled.h2`
    margin: 0 0 10px;

    color: #111111;

    font-size: 19px;
    font-weight: 700;
    line-height: 1.4;
`;

export const Description = styled.p`
    margin: 0;

    color: #3f3f3f;

    font-size: 14px;
    font-weight: 400;
    line-height: 1.65;

    strong {
        color: #1bad77;
        font-weight: 700;
    }
`;

export const SubText = styled.p`
    margin: 8px 0 22px;

    color: #888888;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.55;
`;

export const ConfirmButton = styled.button`
    width: 100%;
    height: 46px;

    border: none;
    border-radius: 10px;

    background: #40d293;

    color: #ffffff;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    &:active {
        background: #32c487;
    }
`;

export const CancelButton = styled.button`
    margin-top: 10px;
    padding: 4px 10px;

    border: none;
    background: transparent;

    color: #999999;

    font-size: 12px;
    font-weight: 400;

    cursor: pointer;
`;