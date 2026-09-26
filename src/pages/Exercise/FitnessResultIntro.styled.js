import styled from "styled-components";

export const Inner = styled.div`
    width: 100%;
    height: 100%;

    padding: 0 16px 20px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;
`;

export const Mascot = styled.img`
    display: block;

    width: 250px;
    height: 250px;

    margin: 17px auto 0px;

    object-fit: contain;
`;

export const Title = styled.h2`
    margin: 0 0 54px;

    font-size: 32px;
    line-height: normal;
    font-weight: 700;

    color: #000;
`;

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;

    gap: 26px;
`;

export const SelectButton = styled.button`
    width: 100%;
    height: 62px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 45px;

    border: 1px solid #9f9f9f;
    border-radius: 6px;

    background: #ffffff;

    font-size: 16px;
    font-weight: 600;
    color: #000;

    cursor: pointer;

    &:active {
        background: #f7f7f7;
    }
`;

export const Arrow = styled.span`
    position: absolute;
    right: 25px;

    width: 10px;
    height: 10px;

    border-top: 1.5px solid #111111;
    border-right: 1.5px solid #111111;

    transform: rotate(45deg);
`;

