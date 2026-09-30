import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;

    bottom: 0;
    left: 50%;

    transform: translateX(-50%);

    width: 100%;
    max-width: 480px;

    min-height: 64px;

    padding-bottom: env(
        safe-area-inset-bottom,
        0px
    );

    display: flex;
    align-items: center;
    justify-content: space-around;

    box-sizing: border-box;

    background: var(--color-primary);

    z-index: 1000;
`;

export const NavItem = styled.button`
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
    background: transparent;

    cursor: pointer;

    opacity: ${({ $active }) =>
        $active ? 1 : 0.7};
`;

export const NavIcon = styled.svg`
    width: 24px;
    height: 24px;
`;