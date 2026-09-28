import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    flex: 1;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding: 24px 20px 32px;

    box-sizing: border-box;
`;

export const ListHeader = styled.div`
    display: flex;
    align-items: center;

    gap: 5px;

    margin-bottom: 18px;
`;

export const ListTitle = styled.h2`
    margin: 0;

    color: #202020;

    font-size: 12px;
    font-weight: 700;
    line-height: 1;
`;


export const ProgramList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
`;

export const StatusText = styled.div`
    width: 100%;

    padding: 48px 0;

    color: #888888;

    font-size: 14px;
    text-align: center;
`;