import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    height: 815px;
    width: 375px;

    min-height: 100vh;

    padding: 0 20px 32px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Header = styled.header`
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;

    position: relative;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 0;

    border: none;
    background: none;

    font-size: 38px;
    font-weight: 300;

    cursor: pointer;

    line-height: 1;
`;

export const Title = styled.h1`
    width: 100%;

    margin: 0;

    text-align: center;

    font-size: 21px;
    font-weight: 700;
`;