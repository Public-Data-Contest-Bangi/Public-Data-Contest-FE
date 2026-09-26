import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    width: 375px;
    min-height: 100vh;

    padding: 0 16px 28px;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Header = styled.header`
    position: relative;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 0;

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

    color: #111111;

    font-size: 19px;
    font-weight: 700;
`;