import styled from "styled-components";

export const Card = styled.article`
    width: 100%;
    min-height: 170px;

    display: flex;
    gap: 12px;

    padding: 16px 14px;

    border: 1px solid #e3e3e3;
    border-radius: 12px;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Info = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;
`;

export const TopRow = styled.div`
    display: flex;
    align-items: flex-start;

    gap: 6px;
`;

export const Name = styled.h3`
    flex: 1;

    margin: 15px 0 0;

    color: #202020;

    font-size: 14px;
    font-weight: 700;
    line-height: 1.45;

    word-break: keep-all;
`;

export const Distance = styled.span`
    flex-shrink: 0;

    padding-top: 1px;

    color: #20cc91;

    font-size: 13px;
    font-weight: 700;

    white-space: nowrap;
`;

export const Address = styled.p`
    margin: 5px 0 10px;

    color: #777777;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 5px;

    margin-bottom: 12px;
`;

export const Tag = styled.div`
    display: inline-flex;
    align-items: center;

    gap: 4px;

    padding: 4px 8px;

    border: 1px solid #e4e4e4;
    border-radius: 999px;

    color: #666666;
    background: #ffffff;

    font-size: 11px;
    font-weight: 500;

    white-space: nowrap;
`;

export const DetailButton = styled.button`
    align-self: flex-end;

    display: flex;
    align-items: center;

    gap: 7px;

    margin-top: auto;

    padding: 8px 12px;

    border: 1px solid #d4d4d4;
    border-radius: 12px;

    background: #ffffff;

    color: #222222;

    font-family: inherit;
    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
`;

export const SportsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    margin-top: 10px;
`;

export const SportIcon = styled.img`
    width: 16px;
    height: 16px;

    flex-shrink: 0;

    object-fit: contain;
`;