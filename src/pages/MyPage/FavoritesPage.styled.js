import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    position: relative;

    width: 375px;
    min-height: 100dvh;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding-bottom: 90px;

    box-sizing: border-box;
`;

export const InfoSection = styled.section`
    padding: 10px 20px 22px;
`;

export const Count = styled.h2`
    margin: 0 0 6px;

    font-size: 18px;
    font-weight: 700;

    color: #1a1a1a;
`;

export const Description = styled.p`
    margin: 0;

    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;

    color: #8c8c8c;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;

    gap: 28px;

    padding: 0 20px 24px;

    box-sizing: border-box;
`;

export const EmptyState = styled.div`
    width: 100%;

    padding: 120px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const EmptyTitle = styled.p`
    margin: 0;

    font-size: 16px;
    font-weight: 600;

    color: #333333;
`;

export const EmptyDescription = styled.p`
    margin: 8px 0 0;

    font-size: 13px;
    font-weight: 400;

    color: #999999;
`;
