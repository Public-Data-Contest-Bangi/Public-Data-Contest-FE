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

export const EmptyMessage = styled.p`
    margin: 80px 0 0;

    text-align: center;

    font-size: 15px;
    font-weight: 500;

    color: #8c8c8c;
`;