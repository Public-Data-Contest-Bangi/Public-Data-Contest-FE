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
    height: 816px;

    padding: 0 16px 24px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Header = styled.header`
    width: 100%;
    height: 72px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.button`
    position: absolute;

    left: 0;

    border: none;
    background: none;

    font-size: 36px;
    font-weight: 300;

    line-height: 1;

    cursor: pointer;
`;

export const Title = styled.h1`
    margin: 0;

    font-size: 27px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;

    color: #000;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    gap: 28px;

    margin-top: 50px;
`;

export const OptionCard = styled.button`
    width: 100%;
    height: 123px;

    padding: 16px 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid
        ${({ $selected }) =>
            $selected
                ? "#41dc99"
                : "rgba(0, 0, 0, 0.35)"};

    border-radius: 13px;

    background: ${({ $selected }) =>
        $selected
            ? "#41dc99"
            : "#ffffff"};

    text-align: left;

    cursor: pointer;

    span {
        color: ${({ $selected }) =>
            $selected
                ? "#ffffff"
                : "#111111"};
    }
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;

    gap: 14px;
`;

export const CardTitle = styled.span`
    font-size: 19px;
    font-weight: 600;

    font-family: Pretendard;
    font-style: normal;
`;

export const CardDescription = styled.span`
    font-size: 11px;
    line-height: 1.5;

    font-weight: 400;

    font-family: Pretendard;
    font-style: normal;
`;

export const CardImage = styled.img`
    width: 127px;
    height: 106px;

    object-fit: contain;

    flex-shrink: 0;
`;

export const ButtonArea = styled.div`
    width: 100%;
    margin-top: auto;
`;