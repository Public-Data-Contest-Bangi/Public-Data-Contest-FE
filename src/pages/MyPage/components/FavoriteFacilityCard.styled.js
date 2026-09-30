import styled from "styled-components";

export const Card = styled.button`
    width: 100%;
    min-height: 126px;

    padding: 12px;

    display: flex;
    align-items: center;

    gap: 14px;

    box-sizing: border-box;

    border: 1px solid #eeeeee;
    border-radius: 17px;

    background: #ffffff;

    font-family: inherit;
    text-align: left;

    cursor: pointer;

    transition:
        background 0.15s ease,
        transform 0.15s ease;

    &:active {
        background: #f7fcfa;
        transform: scale(0.99);
    }
`;

export const CardBody = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const TopRow = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 8px;
`;

export const CardName = styled.div`
    flex: 1;
    min-width: 0;

    overflow: hidden;

    color: #181818;

    font-size: 15px;
    font-weight: 700;

    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const HeartButton = styled.button`
    width: 29px;
    height: 29px;

    padding: 0;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background: #edfaf5;

    color: #40d293;

    font-size: 16px;

    cursor: pointer;
`;

export const MetaRow = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

export const Address = styled.div`
    flex: 1;
    min-width: 0;

    overflow: hidden;

    color: #999999;

    font-size: 10px;
    font-weight: 400;

    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Distance = styled.span`
    flex-shrink: 0;

    color: #40c991;

    font-size: 11px;
    font-weight: 700;
`;

export const SportRow = styled.div`
    display: flex;
    align-items: center;

    gap: 5px;

    color: #666666;

    font-size: 10.5px;
    font-weight: 500;
`;

export const SportIcon = styled.img`
    width: 18px;
    height: 18px;

    object-fit: contain;
`;

export const BottomRow = styled.div`
    margin-top: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AccessList = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

export const AccessBadge = styled.div`
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background: #f2faf6;
`;

export const AccessIcon = styled.img`
    width: 20px;
    height: 20px;

    object-fit: contain;
`;

export const CardChevron = styled.span`
    color: #aaaaaa;

    font-size: 22px;
    font-weight: 300;
`;