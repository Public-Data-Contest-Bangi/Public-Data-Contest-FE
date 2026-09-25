import styled from "styled-components";

export const Inner = styled.div`
    position: relative;

    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;

    padding-bottom: 140px;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding: 0 20px;

    box-sizing: border-box;
`;

export const Title = styled.h1`
    margin: 30px 0 22px;

    color: #111111;

    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
`;

export const TabContainer = styled.div`
    width: 100%;

    margin-bottom: 30px;
    padding: 4px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    box-sizing: border-box;

    border-radius: 12px;

    background: #f4f5f5;
`;

export const TabButton = styled.button`
    height: 42px;

    border: none;
    border-radius: 9px;

    background: ${({ $active }) =>
        $active
            ? "#ffffff"
            : "transparent"};

    color: ${({ $active }) =>
        $active
            ? "#222222"
            : "#999999"};

    font-size: 14px;
    font-weight: ${({ $active }) =>
        $active ? 700 : 500};

    box-shadow: ${({ $active }) =>
        $active
            ? "0 1px 5px rgba(0, 0, 0, 0.05)"
            : "none"};

    cursor: pointer;
`;