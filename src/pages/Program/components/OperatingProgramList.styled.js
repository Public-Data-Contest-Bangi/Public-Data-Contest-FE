import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    flex: 1;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding: 18px 20px 32px;

    box-sizing: border-box;
`;

export const Banner = styled.div`
    position: relative;

    width: 100%;
    height: 138px;

    margin-bottom: 28px;

    overflow: hidden;

    border-radius: 12px;

    background: #41dc99;

    box-sizing: border-box;
`;

export const CharacterImage = styled.img`
    position: absolute;

    left: 12px;
    bottom: 0;

    width: 125px;
    height: auto;

    object-fit: contain;
`;

export const BannerText = styled.p`
    position: absolute;

    top: 20px;
    right: 20px;

    margin: 0;

    color: #ffffff;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.35;

    letter-spacing: -0.3px;
`;

export const Section = styled.section`
    width: 100%;
`;

export const SectionTitle = styled.h2`
    margin: 0 0 22px;

    color: #111111;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
`;

export const ProgramList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 24px;
`; 