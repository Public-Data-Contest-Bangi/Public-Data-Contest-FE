import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const LoginContainer = styled.div`
    width: 815px;
    max-width: 375px;

    padding: 40px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
`;

export const Logo = styled.img`
    width: 295px;
    height: auto;

    object-fit: contain;

    margin: 0;
`;

export const BrandName = styled.h1`
    margin: -20px 0 28px;

    font-size: 40px;
    font-weight: 900;
    line-height: 1;

    color: #111111;

    font-family:
        "Arial Rounded MT Bold",
        "Pretendard",
        sans-serif;

    letter-spacing: -1px;
`;

export const BrandAccent = styled.span`
    color: #42dba0;
`;

export const InputSection = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 14px;
`;

export const InputWrapper = styled.div`
    width: 100%;
    height: 46px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    display: flex;
    align-items: center;

    padding: 0 12px;

    box-sizing: border-box;

    &:focus-within {
        border-color: #42dba0;
    }
`;

export const IconImage = styled.img`
    width: 20px;
    height: 20px;

    object-fit: contain;

    margin-right: 12px;

    flex-shrink: 0;
`;

export const EyeIcon = styled.img`
    width: 20px;
    height: 20px;

    object-fit: contain;
`;

export const Input = styled.input`
    flex: 1;

    border: none;
    outline: none;

    font-size: 14px;
    font-weight: 400;

    background: transparent;

    &::placeholder {
        color: #6f6f6f;
    }
`;

export const PasswordButton = styled.button`
    border: none;
    background: none;

    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 48px;

    margin-top: 35px;

    border: none;
    border-radius: 10px;

    background: #41dc99;

    color: #ffffff;

    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export const Divider = styled.div`
    width: 100%;

    margin-top: 40px;

    display: flex;
    align-items: center;

    gap: 12px;

    span {
        flex: 1;
        height: 1px;

        background: #e5e5e5;
    }

    p {
        margin: 0;

        color: #b5b5b5;

        font-size: 13px;
    }
`;

export const LinkContainer = styled.div`
    width: 100%;

    margin-top: 24px;

    display: flex;
    justify-content: center;
`;

export const LinkButton = styled.button`
    flex: 1;

    border: none;
    background: none;

    font-size: 13px;
    color: #333333;

    cursor: pointer;

    position: relative;

    &:not(:last-child)::after {
        content: "";

        position: absolute;

        right: 0;
        top: 50%;

        transform: translateY(-50%);

        width: 1px;
        height: 12px;

        background: #e3e3e3;
    }
`;