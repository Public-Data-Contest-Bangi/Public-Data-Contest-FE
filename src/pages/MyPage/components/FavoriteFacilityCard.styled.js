import styled from "styled-components";

export const Card = styled.button`
    width: 100%;

    padding: 0;

    border: 1px solid #dedede;
    border-radius: 10px;

    overflow: hidden;

    background: #ffffff;

    text-align: left;

    cursor: pointer;

    font-family: inherit;
`;

export const CardImage = styled.div`
    width: 100%;
    height: 150px;

    background: #e5e5e5;
`;

export const CardBody = styled.div`
    padding: 12px 12px 14px;
`;

export const CardTitleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5px;
`;

export const CardName = styled.h3`
    margin: 0;

    font-size: 17px;
    font-weight: 700;

    color: #1a1a1a;
`;

export const CardDistance = styled.span`
    font-size: 12px;
    font-weight: 600;

    color: #3d3d3d;
`;

export const CardSports = styled.div`
    display: flex;
    align-items: center;

    gap: 4px;

    margin-bottom: 10px;

    font-size: 12px;
    font-weight: 500;

    color: #555555;
`;

export const SportIcon = styled.img`
    width: 14px;
    height: 14px;

    object-fit: contain;
`;

export const CardAccessRow = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

export const AccessIcon = styled.img`
    width: 40px;
    height: 40px;

    object-fit: contain;
`;

export const CardChevron = styled.span`
    margin-left: auto;
    margin-right: 3px;

    font-size: 32px;
    font-weight: 300;
    line-height: 1;

    color: #1a1a1a;
`;