import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 100dvh;

    padding: 0 20px calc(32px + env(safe-area-inset-bottom, 0px));

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;