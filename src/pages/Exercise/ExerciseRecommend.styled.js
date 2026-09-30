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
    width: 100%;
    max-width: 480px;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Header = styled.header`
    position: relative;

    width: 100%;
    height: 72px;

    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 16px;

    padding: 0;

    border: none;
    background: transparent;

    font-size: 36px;
    font-weight: 300;
    line-height: 1;

    cursor: pointer;
`;

export const Title = styled.h1`
    margin: 0;

    color: #000000;

    font-size: 19px;
    font-weight: 700;
`;

export const Content = styled.main`
    width: 100%;
    flex: 1;

    padding: 0 16px 100px;

    display: flex;
    flex-direction: column;

    gap: 28px;

    margin-top: 50px;

    box-sizing: border-box;
`;