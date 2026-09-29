import styled from "styled-components";

export const Card = styled.article`
    width: 100%;

    padding: 16px 16px 18px;

    border: 1px solid #bdbdbd;
    border-radius: 8px;

    background: #ffffff;

    box-sizing: border-box;
        cursor: ${({ $clickable }) =>
        $clickable
            ? "pointer"
            : "default"};

    transition: transform 0.15s ease;

    ${({ $clickable }) =>
        $clickable &&
        `
            &:active {
                transform: scale(0.99);
            }
        `}
`;

export const CardHeader = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 10px;

    cursor: pointer;
`;

export const ProgramIcon = styled.img`
    width: 32px;
    height: 32px;

    flex-shrink: 0;

    object-fit: contain;
`;

export const ProgramTitleArea = styled.div`
    flex: 1;

    display: flex;
    align-items: center;

    gap: 8px;

    min-width: 0;
`;

export const ProgramTitle = styled.h3`
    margin: 0;

    color: #202020;

    font-size: 15px;
    font-weight: 700;
    line-height: 1.3;

    letter-spacing: -0.2px;
`;

export const VoucherTag = styled.span`
    flex-shrink: 0;

    padding: 3px 7px;

    border-radius: 10px;

    background: #eafff5;

    color: #16b978;

    font-size: 10px;
    font-weight: 600;
    line-height: 1.4;
`;

export const ArrowIcon = styled.svg`
    width: 10px;
    height: 18px;

    flex-shrink: 0;

    color: #111111;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;

    margin: 12px 0 16px;

    background: #dddddd;
`;

export const InfoList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 9px;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 88px 1fr;

    align-items: center;

    min-height: 18px;
`;

export const Label = styled.span`
    padding-left: 18px;

    color: #222222;

    font-size: 12px;
    font-weight: 600;

    border-right: 1px solid #dddddd;

    box-sizing: border-box;
`;

export const Value = styled.span`
    padding-left: 18px;

    color: #888888;

    font-size: 12px;
    font-weight: 400;

    box-sizing: border-box;
`;