import styled from "styled-components";

export const Banner = styled.div`
    position: relative;

    width: 100%;
    height: 168px;

    margin-bottom: 38px;
    padding: 18px;

    box-sizing: border-box;

    overflow: hidden;

    border: 1px solid #d5f4e7;
    border-radius: 16px;

    background: #effbf6;
`;

export const BannerText = styled.div`
    position: relative;
    z-index: 2;

    width: 190px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Badge = styled.span`
    margin-bottom: 8px;
    padding: 4px 9px;

    border-radius: 20px;

    background: #d7f7e9;

    color: #269c70;

    font-size: 10px;
    font-weight: 700;
`;

export const Title = styled.div`
    color: #173c2e;

    font-size: 20px;
    line-height: 1.3;
    font-weight: 700;
`;

export const Description = styled.div`
    margin-top: 11px;

    color: #65766f;

    font-size: 11px;
    line-height: 1.5;
    font-weight: 500;
`;

export const Image = styled.img`
    position: absolute;

    right: -3px;
    bottom: -3px;

    width: 150px;
    height: 150px;

    object-fit: contain;
`;