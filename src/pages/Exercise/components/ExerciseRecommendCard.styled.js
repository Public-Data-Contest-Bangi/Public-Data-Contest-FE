import styled from "styled-components";

export const Card = styled.button`
    width: 100%;
    height: 123px;

    padding: 16px 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;

    border: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 13px;

    background: #ffffff;

    text-align: left;

    cursor: pointer;

    transition:
        border-color 0.15s,
        background 0.15s;

    &:active {
        border-color: #40d293;
        background: #f4fff9;
    }
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;

    gap: 14px;
`;

export const CardTitle = styled.span`
    color: #111111;

    font-size: 19px;
    font-weight: 600;
`;

export const CardDescription = styled.span`
    color: #111111;

    font-size: 11px;
    line-height: 1.5;
    font-weight: 400;
`;

export const CardImage = styled.img`
    width: 127px;
    height: 106px;

    object-fit: contain;

    flex-shrink: 0;
`;