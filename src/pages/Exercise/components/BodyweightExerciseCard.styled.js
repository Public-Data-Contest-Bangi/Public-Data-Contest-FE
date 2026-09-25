import styled from "styled-components";

export const Card = styled.article`
    width: 100%;

    padding: 18px 16px;

    box-sizing: border-box;

    border: 1px solid #e1e1e1;
    border-radius: 14px;

    background: #ffffff;
`;

export const TopButton = styled.button`
    width: 100%;

    padding: 0;

    display: flex;
    align-items: flex-start;

    gap: 12px;

    border: none;

    background: transparent;

    text-align: left;

    cursor: pointer;
`;

export const Main = styled.div`
    flex: 1;
    min-width: 0;
`;

export const TitleRow = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    margin-bottom: 9px;
`;

export const Number = styled.span`
    color: #40d293;

    font-size: 11px;
    font-weight: 700;
`;

export const Title = styled.div`
    color: #111111;

    font-size: 17px;
    font-weight: 700;
    line-height: 1.3;
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 5px;
`;

export const Tag = styled.span`
    padding: 4px 8px;

    border-radius: 20px;

    background: #edf9f4;

    color: #2aba84;

    font-size: 10px;
    font-weight: 600;
`;

export const Arrow = styled.span`
    width: 8px;
    height: 8px;

    margin-top: 7px;
    margin-right: 4px;

    flex-shrink: 0;

    border-right: 2px solid #333333;
    border-bottom: 2px solid #333333;

    transform: ${({ $open }) =>
        $open
            ? "rotate(225deg)"
            : "rotate(45deg)"};

    transition: transform 0.2s;
`;

export const Reason = styled.p`
    margin: 15px 0;

    color: #737373;

    font-size: 11.5px;
    font-weight: 400;
    line-height: 1.55;

    word-break: keep-all;
`;

export const DoseBox = styled.div`
    width: 100%;

    padding: 10px 2px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border-radius: 9px;

    background: #f8f8f8;
`;

export const DoseItem = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3px;
`;

export const DoseValue = styled.strong`
    color: #222222;

    font-size: 15px;
    font-weight: 700;
`;

export const DoseLabel = styled.span`
    color: #999999;

    font-size: 9px;
    font-weight: 400;
`;

export const DoseDivider = styled.div`
    width: 1px;
    height: 24px;

    background: #e3e3e3;
`;

export const DetailArea = styled.div`
    margin-top: 16px;
    padding-top: 16px;

    display: flex;
    flex-direction: column;

    gap: 15px;

    border-top: 1px solid #eeeeee;
`;

export const DetailItem = styled.div`
    display: grid;
    grid-template-columns: 76px 1fr;

    gap: 10px;
`;

export const DetailLabel = styled.div`
    color: #333333;

    font-size: 11px;
    font-weight: 700;
    line-height: 1.6;
`;

export const DetailText = styled.p`
    margin: 0;

    color: #777777;

    font-size: 11px;
    font-weight: 400;
    line-height: 1.65;

    word-break: keep-all;
`;